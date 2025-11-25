import React from 'react';

const ContactItem = ({ icon, text, link }) => {
  const content = link ? <a href={link} target="_blank" rel="noopener noreferrer">{text}</a> : text;
  return (
    <div style={{ margin: '1rem 0', fontSize: '1.3rem' }}>
      <span style={{ color: '#00ffff', marginRight: '12px' }}>{icon}</span>
      {content}
    </div>
  );
};

export default ContactItem;