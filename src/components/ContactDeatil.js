import React from 'react'

const ContactDeatil = (props) => {
    const {id,name, email} = props.location.state.contact
 
    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={`https://robohash.org/${id}`} alt = 'user'/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta"></div>
                    <div className="description">{email}</div>
                </div>
                <div className="extra content">
                    <span className="right floated">Joined in 2013</span>
                    <span><i className="user icon"></i>75 Friends</span>
                </div>
            </div>
        </div>
    );
}

export default ContactDeatil
