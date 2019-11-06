import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FAQ } from './components/FAQ';
import { FAQForm } from './components/FAQForm';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/faqs' component={FAQ} />
            <Route path='/skjema' component={FAQForm} />
      </Layout>
    );
  }
}