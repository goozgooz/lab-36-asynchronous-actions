const emptyState = {};

export default (state=emptyState, {type,payload}) => {
  let oldState = {...state};
  
  switch(type){
    case 'BOOK_CREATE':
      return {...state, [payload.id]:payload};
      
    case 'BOOK_DELETE':
      delete oldState[payload.id];
      return oldState;

    case 'BOOK_READ':
      oldState[payload.id].read = !oldState[payload.id].read;
      return oldState;
    
    default:
      return state;
  }
} 