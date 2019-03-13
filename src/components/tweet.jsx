import React from 'react';

const renderTweet = (tweetData) => {
  return <li key={tweetData.id}>
    <p>{ tweetData.content }</p>
    <h3> { tweetData.author }</h3>
  </li>
}

export default (props) => {
  if (!props.data) {
    return <p>Still Loading!</p>;
  }

  return <ul>
    { props.data.map(prop => renderTweet(prop)) }
  </ul>
}
