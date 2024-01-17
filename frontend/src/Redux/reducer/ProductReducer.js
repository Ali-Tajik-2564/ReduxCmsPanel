import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersFormServer = createAsyncThunk(
  'product/getProductFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const RemoveProductFormServer = createAsyncThunk(
  'product/RemoveProductFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
);
export const AddProductFormServer = createAsyncThunk(
  'product/AddProductFromServer',
  async (url, product) => {
    console.log('url', url);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const PutOffProductFormServer = createAsyncThunk(
  'product/PutOffProductFromServer',
  async (url, off) => {
    console.log('url', url);
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(off),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    SearchProductResult: (action, state) => {
      console.log('SearchProductResult action', action);
      let newState;
      if (action.payload.trim()) {
        newState = state.filter((product) =>
          product.name.startsWith(action.payload)
        );
      }
      return newState;
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(
      getUsersFormServer.fulfilled,
      (state, action) => action.payload
    );
    Builder.addCase(RemoveProductFormServer.fulfilled, (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload.id);
      return newState;
    });
    Builder.addCase(AddProductFormServer.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    Builder.addCase(
      PutOffProductFormServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
