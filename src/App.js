import React,{useState,useEffect} from 'react'
import api from './API/api'
import AddContact from './components/AddContact'
import {v4 as uuid} from 'uuid'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ContactList from './components/ContactList'
import EditContact from './components/EditContact'
import ContactDetail from './components/ContactDeatil'
import Header from './components/Header'
    

const App =() => {

    //Localhost setItem()  and getItem()
  // const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

  // const [contacts, setContacts] = useState(initialState);

  // useEffect(()=>{
  //   localStorage.setItem('contacts',JSON.stringify(contacts))
  // },[contacts]);

  const [contacts, setContacts] = useState([ ]);

  const apiContacts = async()=> {
    const response = await api.get('./contacts')
      return response.data
  };
const addContact = async contact => {
  const request = {
    id: uuid(), ...contact};
const response = await api.post('/contacts',request)
  setContacts([response.data, ...contacts])};

const deleteContact = async id => {
      await api.delete (`/contacts/${id}`)
  setContacts(contacts.filter(contact => contact.id !== id))};

const editContact = async contact => {
  const response = await api.put(`/contacts/${contact.id}`, contact)
  setContacts(contacts.map(contact => contact.id === response.data.id ? {...response.data} : contact))}



useEffect(()=> {
  const getAllContacts = async() => {
    const allContacts = await apiContacts();
    if(allContacts) setContacts(allContacts)
  }
  getAllContacts();
},[])

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
                            <Route exact path = '/' 
                                    render={(props) => (
                              <ContactList {...props}
                                    contacts = {contacts}
                                    deleteContact = {deleteContact}              
                              />)}
                            />                                      
                          <Route exact path = '/edit/:id'
                                 render={(props)=> (
                              <EditContact  {...props}
                                  editContact = {editContact}/>
                              )}
                          />
                          <Route exact path = '/contacts/:id' 
                                  render={(props) =>(
                              <ContactDetail {...props}/>
                                )}
                           />
                      </Switch>
              </Router>
          </div>   
  );
}

export default App;
