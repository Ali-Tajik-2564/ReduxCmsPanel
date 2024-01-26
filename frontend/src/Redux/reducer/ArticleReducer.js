import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getArticleFormServer = createAsyncThunk(
  'Article/getArticleFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const RemoveArticleFormServer = createAsyncThunk(
  'Article/RemoveArticleFromServer',
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
  'Article/AddArticleFromServer',
  async (article) => {
    console.log('article', article);
    return fetch('https://redux-cms-panel.liara.run/articles ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
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
      getArticleFormServer.fulfilled,
      (state, action) => action.payload
    );
    Builder.addCase(RemoveArticleFormServer.fulfilled, (state, action) => {
      const newState = state.filter((user) => user._id !== action.payload.id);
      return newState;
    });
    Builder.addCase(AddArticleFormServer.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default slice.reducer;
