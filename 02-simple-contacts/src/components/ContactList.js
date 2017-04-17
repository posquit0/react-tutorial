import React from 'react';
import ContactItem from './ContactItem';


class ContactList extends React.Component {
  renderContactItem(contact) {
    return <ContactItem key={ contact.id } contact={ contact } />
  }

  render() {
    const contacts = this.props.contacts;

    return (
      <ul className="contact-list">
        { contacts.map(this.renderContactItem) }
      </ul>
    );
  }
}

export default ContactList;
