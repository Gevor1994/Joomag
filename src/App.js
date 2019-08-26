import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
