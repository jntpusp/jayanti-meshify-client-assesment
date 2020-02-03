import React from 'react';
import Header from './components/common/header/Header';
import Tweets from './components/tweets/Tweets';
import { searchTwitterByHashTag } from './services/twitterService';
import './app.scss';


function App() {
  return (
    <div className='container-fluid app'> 
      <Header />
      <div className='main'>
      	<Tweets tweets={searchTwitterByHashTag('IoT')} />
      </div>
    </div>
  );
}

export default App;
