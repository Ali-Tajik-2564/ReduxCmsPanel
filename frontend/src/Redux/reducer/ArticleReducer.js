import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersFormServer = createAsyncThunk(
  'users/getUsersFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const RemoveUsersFormServer = createAsyncThunk(
  'users/RemoveUsersFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const AddArticleFormServer = createAsyncThunk(
  'users/AddUsersFromServer',
  async (url, article) => {
    console.log('url', url);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    SearchArticleResult: (action, state) => {
      let newState;
      console.log('SearchProductResult action', action);
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
    Builder.addCase(RemoveUsersFormServer.fulfilled, (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload.id);
      return newState;
    });
    Builder.addCase(AddArticleFormServer.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default slice.reducer;
