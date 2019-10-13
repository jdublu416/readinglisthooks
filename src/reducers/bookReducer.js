import uuid from 'uuid';

export const bookReducer = (state, action) => {
  const { type, book, id } = action;
  switch (type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: book.title,
          author: book.author,
          id: uuid.v4()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};
