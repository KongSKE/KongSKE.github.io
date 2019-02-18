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
        <center><img src= "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/16684191_1431759500227788_4523539130141331084_n.jpg?_nc_cat=111&_nc_eui2=AeHbrGSO1IUDHGKZet4yQsahb6a3GMubElajYjx8ur0ZPOATN_R1UQDqRE1HlLQ3MDmK1MWnxx6tIANP_UnEY0dgEAWtsumrmFK-S3okKcHRsg&_nc_ht=scontent.fbkk22-1.fna&oh=445751d66d87e9c06ce855356a85036f&oe=5CE6B737" width="20%" height="20%"></img></center>
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
