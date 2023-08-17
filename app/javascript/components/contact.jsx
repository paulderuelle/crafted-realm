import React, { useState } from 'react';

const Contact = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

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

    setEmailSent(true);
    setFullName('');
    setEmail('');
    setMessage('');
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
      {emailSent && <div className='alert'>Email sent successfully!</div>}
    </>
  );
};

export default Contact;
