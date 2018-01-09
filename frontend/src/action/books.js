import uuid from 'uuid/v4';
import superagent from 'superagent';
let API = `${__API_URL__}/api/books`;

export const create = payload => store => {
  superagent.post(API)
    .send(payload)
    .then(res => store.dispatch(createBook(res.body)))
    .catch(console.error)
};

export const destroy = (payload) => ({
  type: 'BOOK_DELETE',
  payload,
});

export const read = (payload) => ({
  type: 'BOOK_READ',
  payload,
})


const createBook = ({title, author}) => ({
  type: 'BOOK_CREATE',
  payload: {
    title,
    author,
    read: false, 
    id: uuid(),
  },
});

