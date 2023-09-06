import React from 'react'

const Wrapper = ({ children }) => {
    const wrapperStyle = {
      width: '340px',
      height: '540px',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#485461',
      backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
    }
    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    );
  };

export default Wrapper
