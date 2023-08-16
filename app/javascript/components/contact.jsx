import React, { useState } from 'react';

const Contact = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    try {
      const response = await fetch('api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      const data = await response.json();
      console.log('Email sent succesfully', data);
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <span className='borders top'></span>
      <span className='borders right'></span>
      <span className='borders bottom'></span>
      <span className='borders left'></span>
        <div>
          <input type="text" id="name" value={fullname} onChange={handleFullNameChange}
          placeholder='Full Name'/>
        </div>
        <div>
          <input type="text" id="email" value={email} onChange={handleEmailChange}
          placeholder='Email'/>
        </div>
        <div>
          <textarea id="message" value={message} onChange={handleMessageChange}
          placeholder='Your message'/>
        </div>
        <button type="submit">SEND EMAIL</button>
      </form>
    </>
  );
};

export default Contact;
