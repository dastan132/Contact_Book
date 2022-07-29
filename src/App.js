import './App.css';
import React from 'react';
import { NavBar } from './component/NavBar';
import { Contact } from './component/contact/contact';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import store from './store.js';
import { AddContact } from './component/contact/AddContact';
import { Editcontact } from './component/contact/editContact';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <NavBar />
      <div className='container'>
      <div className="py-3">
      <Routes>
        <Route  path="/" element={<Contact />} />
        <Route  path="/contact/add" element={<AddContact />} />
        <Route  path="/contact/edit/:id" element={<Editcontact />} />
        </Routes>
      </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

