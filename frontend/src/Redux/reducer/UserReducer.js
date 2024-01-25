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
export const AddUsersFormServer = createAsyncThunk(
  'users/AddUsersFromServer',
  async (users) => {
    console.log('user', users);
    return fetch('https://redux-cms-panel.liara.run/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        return data;
      });
  }
);

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    SearchUserResult: (action, state) => {
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
    Builder.addCase(RemoveUsersFormServer.fulfilled, (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload.id);
      return newState;
    });
    Builder.addCase(AddUsersFormServer.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default slice.reducer;
