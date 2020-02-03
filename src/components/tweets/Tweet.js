import React from 'react';
import TopMostUsedWords from './TopMostUsedWords';
import './tweet.scss';

function Tweet({ tweet }) {
  const user = tweet.user;
  return (
    <div className='row tweet'>
    	<div className='col-2 profile-pic'>
    		<img className='profile-pic' src={user.profile_image_url} width='100%' alt={user.name}/>
    	</div>
    	<div className='col-10 body'>
    		<div className='header'>
    			<b>{ user.name }</b> &nbsp;
    			<small className='text-muted'>{ '@' + user.screen_name }</small>
    			<small className='text-muted time'>{ new Date(tweet.created_at).toUTCString().replace('GMT', '') }</small>
    		</div>
    		<div className='text' dangerouslySetInnerHTML={{ __html: tweet.full_text }}></div>
    	</div>
      <div className='col-12'>
        <TopMostUsedWords text={tweet.actual_text}/>
      </div>
    </div>
  );
}

export default Tweet;
