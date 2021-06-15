import React,{useState,useEffect} from 'react'
import AddContact from './components/AddContact'
//import {v4 as uuid} from 'uuid'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ContactList from './components/ContactList'
import EditContact from './components/EditContact';
import Header from './components/Header'
    

function App() {

  const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

  const [contacts, setContacts] = useState(initialState);

  useEffect(()=>{
    localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts]);


const addContact = contact => setContacts([contact, ...contacts]);
const deleteContact = id => setContacts(contacts.filter(contact => contact.id !== id));
const editContact = contact => setContacts(contacts.map(contact => contact.id === contact ? {...contact }: contact))

  return (
    
        <div className = 'ui container' style = {{padding:'2em'}}>
          <Router>
          <Header/> 
            <Switch>
              <Route exact path = '/add'
                  render={(props) =>(
                    <AddContact {...props} 
                    addContact = {addContact}/>
                  )}
               />

              
      
              <ContactList 
                  contacts = {contacts}
                  deleteContact = {deleteContact}              
              />
              <Route exact path = '/edit/:id'
                  render={(props)=> (
                    <EditContact  {...props}
                    editContact = {editContact}/>

                  )}
              />
          
            </Switch>
          </Router>
          </div>
   
   
 
  );
}

export default App;
