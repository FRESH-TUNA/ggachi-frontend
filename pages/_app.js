import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import axios from 'axios'

import {store}  from '../states/store'
import './_app.css'

axios.defaults.baseURL = 'http://34.84.70.64/api';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default withRedux(store)(class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const {Component, pageProps, store} = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
})