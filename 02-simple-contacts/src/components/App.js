import React, { Component } from 'react';
import ContactList from './ContactList';
import './App.css';


const contacts = [{
  id: 1,
  name: '박병진',
  img: 'https://avatars0.githubusercontent.com/u/1484002?v=3&s=460',
  tel: '010-9999-1411',
  email: 'posquit0.bj@gmail.com'
}, {
  id: 2,
  name: '홍길동',
  tel: '010-1234-2345',
  email: 'mr.hong@gmail.com'
}, {
  id: 3,
  name: '김세정',
  img: 'http://file2.instiz.net/data/file2/2016/01/30/5/b/9/5b96fd93fa523311bde471939f550f7c.jpg',
  tel: '010-9876-2345',
  email: 'love.sj@gmail.com'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Contacts</h2>
        </div>
        <ContactList contacts={ contacts } />
      </div>
    );
  }
}

export default App;
