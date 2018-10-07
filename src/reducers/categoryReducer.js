import { types } from '../actions';

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_SUCCEEDED:
      return action.category;
    default:
      return state;
  }
};

export default categoryReducer;
