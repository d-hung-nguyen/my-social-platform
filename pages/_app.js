// pages/_app.js

import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout'; // Assume you have a Layout component


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      // Wrap everything in the global state provider if you're using Context API
      
        <Layout> 
      
          <Component {...pageProps} />
        </Layout>
 
    );
  }
}

export default MyApp;
