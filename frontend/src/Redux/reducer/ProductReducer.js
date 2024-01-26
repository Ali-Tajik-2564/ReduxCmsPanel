import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProductFormServer = createAsyncThunk(
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
  async ({ url, product }) => {
    console.log('url', url);
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const PutOffProductFormServer = createAsyncThunk(
  'product/PutOffProductFromServer',
  async ({ url, product }) => {
    console.log('url', url);
    console.log('off', product);
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data);
        return data;
      });
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
      getProductFormServer.fulfilled,
      (state, action) => action.payload
    );
    Builder.addCase(RemoveProductFormServer.fulfilled, (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload.id);
      return newState;
    });
    Builder.addCase(AddProductFormServer.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    Builder.addCase(PutOffProductFormServer.fulfilled, (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    });
  },
});

export default slice.reducer;
