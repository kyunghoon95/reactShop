import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState : 'ko'
});



let cartData = createSlice({
  name: 'cartData',
  initialState : [
    {id : 0, title : 'White and Black', count : 2},
    {id : 2, title : 'Grey Yordan', count : 1}
  ],
  reducers: {
    countUp(state, action){
      let item = state.find((x) => x.id === action.payload);
      console.log(action.payload);
      console.log(action);

      item.count++;

    },
    countDown(state, action){
      let item = state.find((x) => x.id === action.payload);
      item.count--;
      if (item.count === 0) {
        state.splice(state.indexOf(item), 1);
      }
    },
    update(state, action){
      let elId = state.find((x) => x.id === action.payload.id);
      if (elId) {
        elId.count += 1;
      } else {
        state.push(action.payload);
      }
      // console.log(action.payload);
      // console.log(action.payload.id);
    },
  }
});

// let viewItem = createSlice({
//   name : 'viewItem',
//   initialState : [],
//   reducers : {
//     addViewItem(state, action) {
//       state.push(action.payload);
//       // if (!state.some(item => item.id === action.payload.id)) {
//       //   state.push(action.payload);
//       // }
//     }
//   }
// })

let size = createSlice({
  name: 'size',
  initialState : {size : 230},
  reducers : {
    updateSize(state, action){
      state.size = action.payload;
      console.log("Received Size:", action.payload);
    }
  }
});

export let { countUp, update, countDown } = cartData.actions;
// export let { addViewItem } = viewItem.actions;
export let { updateSize } = size.actions;


export default configureStore({
  reducer: {
    user : user.reducer,
    cartData : cartData.reducer,
    size : size.reducer
    // viewItem: viewItem.reducer
  }
})