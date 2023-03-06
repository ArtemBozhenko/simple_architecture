import {URI} from '../../api';

export default {
  getCharacters: {
    query: () => ({
      method: 'GET',
      url: URI.get_characters,
    }),
    transformResponse: (response: any) => {
      return response.results;
    },
  },
};
