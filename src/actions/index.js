import * as categoryActions from './categoryActions';
import * as productActions from './productActions';
import * as cartActions from './cartActions';

export const types = {
  ...categoryActions.types,
  ...productActions.types,
  ...cartActions.types
};

export const actions = {
  ...categoryActions.actions,
  ...productActions.actions,
  ...cartActions.actions
};
