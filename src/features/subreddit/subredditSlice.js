import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 'askReddit',
}

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {
        changeSubreddit: (state, action) => {state.value = action.payload},
    }
})

export const {changeSubreddit} = subredditSlice.actions;
export default subredditSlice.reducer;