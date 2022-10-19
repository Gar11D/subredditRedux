import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setArticles} from './articlesSlice';

export function Articles() {
    const count = useSelector ((state) => state.articles.value);
    const dispatch = useDispatch();
    const [articles, setArticles] = useState([]);

    return (
        <div>
            <div>
                <button 
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button> 
                <br>
                </br>
                <input 
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>
            </div>
        </div>
    )
}