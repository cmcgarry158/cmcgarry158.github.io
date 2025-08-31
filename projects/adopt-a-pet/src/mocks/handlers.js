import { http, HttpResponse } from 'msw';
import types from './data/types.json';
import animals from './data/animals.json';
import details from './data/details.json';

const projectFolder = "/projects/adopt-a-pet"

export const handlers = [
  http.get(`${projectFolder}/types`, () => {
    return HttpResponse.json(types, {status: 200});
  }),

  http.get(`${projectFolder}/animals`, ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const query = url.searchParams.get('query');
    let animalResponse = animals.animals;

    if (type !== '') {
      animalResponse = animalResponse.filter(
        (animal) => animal.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (query !== '') {
      animalResponse = animalResponse.filter(
        (animal) =>
          animal.contact.address.state
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          animal.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return HttpResponse.json(animalResponse, {status: 200});
  }),

  http.get(`${projectFolder}/animals/:id`, ({ params }) => {
    const { id } = params;
    let detailsResponse = details[id];

    if (!detailsResponse) {
      return new HttpResponse(null,{status: 404});
    }

    return HttpResponse.json(detailsResponse, {status: 200});
  })
];
