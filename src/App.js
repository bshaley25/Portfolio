import React, { Component } from 'react';

import './App.scss'

import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

class App extends Component {

  state = {

  }

  render() {
    return (
      <>

        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }


}

export default App;
