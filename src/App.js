import React, { Component } from 'react';

import './stylesheets/App.scss'

import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

class App extends Component {

  state = {
    page: 'Bradley Haley'
  }

  changeState = (event) => {
    this.setState({ page: event.target.innerText })
  }

  render() {
    return (
      <>
        <Header changeState={this.changeState}></Header>
        <Main page={this.state.page} className='MainComponent'></Main>
        <Footer></Footer>
      </>
    );
  }


}

export default App;
