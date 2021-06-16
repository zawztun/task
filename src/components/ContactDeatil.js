import React from 'react'

const ContactDeatil = (props) => {
    const {id,name, email} = props.location.state.contact;
 
    return (
        <div className = 'ui center aligned container'>
            <div className="ui links cards">
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
                        <span className="right floated">Joined in {Math.floor(Math.random()*10 + 2000)}</span>
                        <span><i className="user icon"></i>{Math.floor(Math.random()*2000)}Friends</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDeatil
