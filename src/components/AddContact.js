import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const AddContact = (props) => {
    const history = useHistory()
    const [contact, setContact] = useState({
        id:'',
        name:'',
        email:''
    })

    const onFormSubmit = e => {
        e.preventDefault()
    console.log(contact)
        setContact({...contact, name:'', email:'', id : Date.now()})
        props.addContact({...contact})
        history.push('/')
        console.log(contact)
    }

    return (
        <div className = 'ui clearing segment'>
            <form  className = 'ui form 'onSubmit = {onFormSubmit}>
                <input type="text"
                        name = "name"
                        placeholder=" your name "
                        value = {contact.name}
                        onChange = {e => setContact({...contact,name:e.target.value})}
                />
                <input type="text"
                        name = "email"
                        placeholder=" your email "
                        value = {contact.email}
                        onChange = {e => setContact({...contact, email:e.target.value})}
                />
                <button className = 'ui right floated red button' >Submit</button>
            </form>
        </div>
    )
}

export default AddContact