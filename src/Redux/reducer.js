import { ADD_ITEM, REMOVE_ITEM } from './action';

const initialState = {
  items: [
    {
        id:1,
        slide: 1,
        name: 'Item 1',
        description: 'This is the first item',
        
      },
      {
        id:2,
        slide: 2,
        name: 'Item 2',
        description: 'This is the second item',
       
      },
      {
        id:3,
        slide: 3,
        name: 'Item 3',
        description: 'This is the third item',
        
      },
      {
        id:4,
        slide: 4,
        name: 'Item 4',
        description: 'This is the fourth item',
        
      },
      {
        id:5,
        slide: 5,
        name: 'Item 5',
        description: 'This is the fifth item',
        
      },
      // {
      //   id: 6,
      //   name: 'Item 2',
      //   description: 'This is the second item',
      //   image: 'https://example.com/item2.jpg',
      // },
      // {
      //   id: 7,
      //   name: 'Item 1',
      //   description: 'This is the first item',
      //   image: 'https://example.com/item1.jpg',
      // },
      // {
      //   id: 8,
      //   name: 'Item 2',
      //   description: 'This is the second item',
      //   image: 'https://example.com/item2.jpg',
      // },
      // {
      //   id: 9,
      //   name: 'Item 1',
      //   description: 'This is the first item',
      //   image: 'https://example.com/item1.jpg',
      // },
      // {
      //   id: 10,
      //   name: 'Item 2',
      //   description: 'This is the second item',
      //   image: 'https://example.com/item2.jpg',
      // },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.data],
      };
    // case REMOVE_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default Reducer;
