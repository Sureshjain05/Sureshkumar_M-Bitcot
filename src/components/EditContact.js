import React, { useState } from 'react';

// EditContact component to edit an existing contact
const EditContact = ({ contact, onEdit, onCancel }) => {
  // Initialize state variables with the values from the contact prop
  const [name, setName] = useState(contact.name);
  const [mobile, setmobile] = useState(contact.mobile);
  const [email, setemailAddress] = useState(contact.email);
  const [address, setAddress] = useState(contact.address);
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an updated contact object with the current state values
    const updatedContact = {
      ...contact,
      name,
      email,
      address,
      mobile
    };
    // Call the onEdit function passed as a prop with the updated contact
    onEdit(updatedContact);
  };
  
  // Input Fields for Name, EmailAdress, Address, PhoneNumber
  return (
    <div className="modal">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setemailAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
          required
        />
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditContact;