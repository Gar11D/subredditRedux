import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeSubreddit} from './subredditSlice';

export function Subreddit() {
    const subreddit = useSelector ((state) => state.subreddit.value);
    const dispatch = useDispatch();
    // const [subreddit, setSubreddit] = useState('askReddit');

    return (
        <div>
            <header className="App-header">
                <input 
                type="text" className="input" spellCheck="false" 
                // value={subreddit} onChange={e => setSubreddit(e.target.value)}
                value={subreddit} onChange={e => dispatch(changeSubreddit(e.target.value))} //works.
                />
                {/* <button onClick={() => dispatch(storeSubreddit(subreddit))}>
                    Submit
                </button> */}
            </header>
        </div>
    )
}