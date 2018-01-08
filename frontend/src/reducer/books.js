const emptyState = {};

export default (state=emptyState, {type,payload}) => {
  let oldState = {...state};
  switch(type){
    case 'BOOK_CREATE':
      return {...state, [payload.id]:payload};
      
    case 'BOOK_DELETE':
      return delete oldState[payload.id];

    default:
      return state;
  }
} 