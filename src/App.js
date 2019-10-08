import React, { Component } from 'react';
import Header from './component/Header'
import Experience from './component/Expeience';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <body bgcolor = "orange">
        <h1><center>Varit Assavavisidchai</center></h1>
        <center>React motherfucker</center>
        <Header></Header>
        <Experience></Experience>
        <br></br><br></br>
        <Footer></Footer>
        </body>
      </div>
    );
  }
}

export default App;
