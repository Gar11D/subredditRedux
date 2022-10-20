import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: [],
}

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        storeArticles: (state, action) => {state.value = action.payload},
    }
})

export const {storeArticles} = articlesSlice.actions;
export default articlesSlice.reducer;