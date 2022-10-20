import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storeArticles} from './articlesSlice';
// import {submitSubreddit} from '../subreddit/subredditSlice';
// import { Subreddit } from '../subreddit/subreddit';

export function Articles() {
    const subreddit = useSelector ((state) => state.subreddit.value);
    const articles = useSelector ((state) => state.articles);
    const dispatch = useDispatch();
    // const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/"+subreddit+".json").then(res =>{
          if (res.status != 200) {
            console.log('ERROR!');
            return;
          }
          res.json().then(data => {
            if (data != null) {
              //console.log(data); this works
              // setArticles(data.data.children);
              dispatch(storeArticles(data.data.children));
            }
          })
        })
      }, [subreddit])

    return (
        <div>
            <div className="App">
                <div className="articles">
                    { (articles != null)
                    ? 
                    (
                      console.log(articles), //now logging correct arrays
                    // articles.map((article, index) => <Article key={index} article={article.data}/>)
                    articles.value.map((article) => {
                     return <article>
                              <a href={"https://reddit.com" + article.data.permalink} target="_blank">
                                <h3>{article.data.title}</h3>
                              </a>
                            </article>
                    }))
                    :
                    ''
                    }
                </div>
            </div>
        </div>
    )
}