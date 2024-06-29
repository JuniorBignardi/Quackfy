import { createClient } from 'pexels';

const client = createClient('l9xAy5XjW0WLDS2M4z489Nz7BX9m6mFPrpjZQj8RqyH8JXusjrTuZdM7');

export const getImages = ({query}: {query: any}) => {
  client.photos.search({ query, per_page: 1 }).then(photos => photos);
}