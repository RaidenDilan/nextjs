import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({ appName: 'Super App' }), 1000);
    });

    promise
      .then((result) => console.log('Promise -> result', result))
      .catch((error) => console.log('Promise -> error', error));

    return promise;
  }
  // static async getInitialProps(context) {
  //   console.log(context);
  //   return { appName: 'Super App' };
  // }

  render() {
    return(
      <div>
        <h1>The Main Page of { this.props.appName }</h1>
        <p>
          Go to
          <Link href='/auth'><a>Auth</a></Link>
        </p>
        <button onClick={ () => Router.push('/auth') }>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;
