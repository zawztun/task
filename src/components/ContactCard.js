import React from 'react'
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
    const  { id,name,email } = props.contact

    return (
        <div className = 'item'>
                <img className = 'ui avatar image' src = {`https://robohash.org/${id}`} alt = 'user'/>        
            <div className = 'content'>   
                <div className = 'header'>{name}</div>   
                <div className="descrtption">{email}</div>
            </div>
            <div className = 'ui right floated icon '>
                <i onClick = {()=>props.deleteContact(id)} 
                className="trash alternate icon" 
                style = {{padding:'10px',color:'red'}}></i>
            <Link to = {{pathname:`/edit/${id}`,state:{contact:props.contact}}}>
            <i className="edit alternate icon" style = {{padding:'10px',color:'green'}}></i>
            </Link> 
            </div>         
        </div>
      
    )
}

export default ContactCard
