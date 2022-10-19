import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 'askReddit',
}

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {
        submitSubreddit: (state, action) => {state.value = action.payload},
    }
})

export const {submitSubreddit} = subredditSlice.actions;
export default subredditSlice.reducer;