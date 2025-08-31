import React from 'react';

const projectFolder = "/projects/adopt-a-pet"

const Pet = ({ animal }) => {
  return (
    <a
      key={animal.id}
      href={`${projectFolder}/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breeds.primary || 'Unknown'}</p>
        <p>Color: {animal.colors.primary || 'Unknown'}</p>
        <p>Gender: {animal.gender || 'Unknown'}</p>
      </article>
    </a>
  );
};

export default Pet;
