import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './App.css';

//import BasicForm from './components/BasicForm'
//import FetchForm from './components/FetchForm'
import TextArea from './components/TextArea'
import Select from './components/Select'

function App() {

  return (
    <div>
        <TextArea />
        <Select />
    </div>
  );
}

export default App;
