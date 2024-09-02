import React from 'react';

// ContactListItem component to display an individual contact in a list
const ContactListItem = ({ contact, onEdit, onView, onDelete }) => (
  <li>
    <span className="col-2">{contact.id}</span>
    <span className="col-4">{contact.name}  - {contact.mobile}</span>
    <button className="col-2" onClick={() => onView(contact)}>👁️</button>
    <button className="col-2" onClick={() => onEdit(contact)}>✏️</button>
    <button className="col-2" onClick={() => onDelete(contact.id)}>🗑️</button>
  </li>
);

export default ContactListItem;
      