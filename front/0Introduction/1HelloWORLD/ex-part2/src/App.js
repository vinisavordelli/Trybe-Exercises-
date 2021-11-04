// App.js
import React from 'react';
import Header from './content/Header';
import Content from './content/Content';
import Footer from './content/Footer';
import './App.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;