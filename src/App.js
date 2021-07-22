import {BsFillEnvelopeOpenFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiTwotonePhone} from 'react-icons/ai'

import React, {useState} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="section-user">
        <div className="top-bar"></div>
        <div className="bottom-bar">
          <div className="user-info">
            <img className="circle-image"/>
            <span></span>
            <span></span>
            <div className="user-icons">
              <BsFillEnvelopeOpenFill/>
              <BsFillPersonFill/>
              <AiTwotonePhone/>
            </div>
            <button className="btn">Random User</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
