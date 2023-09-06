import React from 'react'

const Wrapper = ({ children }) => {
    const wrapperStyle = {
      width: '340px',
      height: '540px',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#485461',
      backgroundImage: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'
    }
    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    );
  };

export default Wrapper
