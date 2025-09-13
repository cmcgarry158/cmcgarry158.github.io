const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { getAllRestaurants } = require("./restaurants");
const router = express.Router();

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

const getJoinedStarredRestaurants = () => {
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const allRestaurants = getAllRestaurants();
      const restaurant = allRestaurants.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );

  return joinedStarredRestaurants;
}

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = getJoinedStarredRestaurants();

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const joinedStarredRestaurants = getJoinedStarredRestaurants();

  const foundRestaurant = joinedStarredRestaurants.find(r => r.id == id);

  if (foundRestaurant) {
    res.json(foundRestaurant);
  }
  else {
    res.status(404).send();
  }
});


/**
 * Feature 8: Adding to your list of starred restaurants.
 */
router.post("/", (req, res) => {
  const { body } = req;
  const { id } = body;

  const existingRestaurant = getAllRestaurants().find(r => r.id == id);

  if (existingRestaurant) {
    const newId = uuidv4();
    const restaurant = {
      id: newId,
      restaurantId: existingRestaurant.id,
      name: existingRestaurant.name,
      comment: ""
    }

    STARRED_RESTAURANTS.push({ id: newId, restaurantId: existingRestaurant.id, comment: "" });

    console.log(`Starred ${existingRestaurant.name} (${existingRestaurant.id})`);

    res.json(restaurant);
  }
  else {
    res.status(404).send();
  }
});


/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const foundRestaurant = STARRED_RESTAURANTS.find(r => r.id == id);

  if (foundRestaurant) {
    STARRED_RESTAURANTS = STARRED_RESTAURANTS.filter(r => r.id !== id);

    console.log(`Unstarred ${id}`);

    res.status(200).send();
  }
  else {
    res.status(404).send();
  }
});


/**
 * Feature 10: Updating your comment of a starred restaurant.
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { newComment } = body;

  const foundRestaurant = STARRED_RESTAURANTS.find(r => r.id == id);

  if (foundRestaurant) {
    foundRestaurant.comment = newComment;
    res.status(200).send();
  }
  else {
    res.status(404).send();
  }
});


module.exports = router;