import React from 'react';
import './App.css';
import Header from '../components/header'
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList'
function App() {
  return (
    <div className="App">
    <Header/>
    <AddContact/>
    {/*<ContactList/>*/}
    </div>
  );
}

export default App;
