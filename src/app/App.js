import React from 'react';
import {Subreddit} from '../features/subreddit/subreddit';
import {Articles} from '../features/articles/articles';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Subreddit />
        <Articles />
      {/* </header> */}
    </div>
  );
}

export default App;
