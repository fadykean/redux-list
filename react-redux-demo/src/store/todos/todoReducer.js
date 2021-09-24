import { ADD_TODO } from "./todoTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, title } = action.payload;
      let todos = [...state.todos, { id, title }];

      return {
        ...state,
        todos,
      };

    default:
      return state;
  }
};

export default todoReducer;
