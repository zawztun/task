import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'


const ContactList = (props) => {
    const renderContacts = props.contacts.map(contact => (
            <ContactCard key = {contact.id}
                    contact = {contact}
                    deleteContact = {props.deleteContact}
                    />
        ))

    return (
      
            <div className = 'ui cleaning segment'> 
                <h2>Contact Lists</h2>
                <Link to = '/add'>
                <button className = 'ui right floated red button' >Add Contact</button>

                </Link>
            <div className = 'ui celled list' style = {{margin: '5em'}}>
                {renderContacts}
            </div>
            </div>
         
       
    )
}

export default ContactList
