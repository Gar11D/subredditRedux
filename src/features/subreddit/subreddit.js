import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {submitSubreddit} from './subredditSlice';

export function Subreddit() {
    const count = useSelector ((state) => state.subreddit.value);
    const dispatch = useDispatch();
    const [subreddit, setSubreddit] = useState('askReddit');

    return (
        <div>
            <header className="App-header">
                <input 
                type="text" className="input" spellcheck="false" 
                value={subreddit} onChange={e => setSubreddit(e.target.value)}
                />
                <button onClick={() => dispatch(submitSubreddit(subreddit))}>
                    Submit
                </button>
            </header>
        </div>
    )
}