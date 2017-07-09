import React, { Component } from 'react';
import Clock from './clock/Clock';
import logo from './logo.svg';
import ContactForm from './contactus/contactus.js';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="text-center"><img src={logo} className="App-logo" alt="logo" /> Shop Management</h1>  
          <h5 className="text-center">A venture by Foot Print Solution.</h5>
        </div>
        <div className="container">
          <h6><Clock /></h6>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="../index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Customer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <ContactForm />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
