import React, { useState } from 'react';

const Feedback = ({ setActiveTab }) => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#fff', minHeight: '80vh' }}>
      <h1 style={{ color: '#000' }}>Give us your feedback</h1>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your experience here..."
        style={{ width: '80%', height: '150px', padding: '15px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <br />
      <button 
        onClick={() => {
           alert("Thank you!");
           setActiveTab("cultpass Home");
        }}
        style={{ 
          padding: '15px 30px', 
          marginTop: '20px', 
          cursor: 'pointer', 
          background: '#ff4500', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        SUBMIT FEEDBACK
      </button>
    </div>
  );
};

export default Feedback;