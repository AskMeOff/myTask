import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from "./Menu";
import AddItem from "./AddItem";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Menu/>
            <AddItem/>
            <Footer />
        </div>
    );
  }
}

export default App;
