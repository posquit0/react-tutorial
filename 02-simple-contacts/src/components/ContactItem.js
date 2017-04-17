import React from 'react';
import './ContactItem.css'


const CONTACT_IMAGE_DEFAULT = 'http://bcdcog.com/wp-content/uploads/2016/05/profile-default-02.png';

const ContactItem = (props) => {
  const img = props.contact.img || CONTACT_IMAGE_DEFAULT;

  return (
    <li className="contact-item">
      <img className="contact-img" src={ img } alt={ props.contact.name } />
      <div className="contact-name">{ props.contact.name }</div>
      <div className="contact-tel">{ props.contact.tel }</div>
      <div className="contact-email">
        <a href={ `mailto:${props.contact.email}` }>Send E-Mail</a>
      </div>
    </li>
  );
};

export default ContactItem;
