import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import subredditReducer from '../features/subreddit/subredditSlice';
import articlesReducer from '../features/articles/articlesSlice';

export const store = configureStore({
    reducer: {
        subreddit: subredditReducer,
        articles: articlesReducer
    },
})