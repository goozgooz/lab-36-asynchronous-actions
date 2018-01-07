import uuid from 'uuid/v4';

export const create = ({title, author}) => ({
  type: 'BOOK_CREATE',
  payload: {
    title,
    author,
    id: uuid(),
  },
});