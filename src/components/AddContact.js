import React, { useState } from 'react';

// AddContact component to add a new contact
const AddContact = ({ contacts, onAdd, onCancel }) => {
  // State variables to hold form input values
  const [name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemailAddress] = useState('');
  const [address, setAddress] = useState('');
  // State variable to keep track of the next contact ID
  //const [nextId, setNextId] = useState(3);
  const nextId = contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
   // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

     // Create a new contact object with the current state values
    const newContact = {
      id : nextId,
      name,
      email,
      address,
      mobile
    };
    // Call the onAdd function passed as a prop, with the new contact
    onAdd(newContact);

     // Increment the next ID for the next contact
  };
  
  // Input Fields for Name, EmailAddress, Address, PhoneNumber
  return (
    <div className="modal">
      <h2>Add Contact</h2>
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
        
        {/*Submit Button to add the new Contact */}
        <button type="submit" >Add</button>
        {/*Cancel Button to Cancel Operation */}
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddContact;