// Action Types
export const ADD_ITEM = 'ADD_ITEM';
// export const REMOVE_ITEM = 'REMOVE_ITEM';

// Action Creators
export const list = (item) => ({
  type: ADD_ITEM,
  data: item,
});

// export const removeItem = (itemId) => ({
//   type: REMOVE_ITEM,
//   payload: itemId,
// });
