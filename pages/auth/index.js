import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - { props.appName }</h1>
    <User name='Max' age={ 28 } />
  </div>
);

authIndexPage.getInitialProps = context => {
  // console.log('context', context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ appName: 'Super App (Auth)' }), 1000);
  });

  // promise
  //   .then((result) => console.log('Promise -> result', result))
  //   .catch((error) => console.log('Promise -> error', error));

  return promise;
};

export default authIndexPage;
