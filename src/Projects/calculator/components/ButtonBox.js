import React from 'react'

const ButtonBox = ({ children }) => {
  const buttonBoxStyle = {
    width: '100%',
    height: 'calc(100% - 160px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridGap: '10px',
    border: '2px solid #142d4c'
  }
  return (
    <div style={buttonBoxStyle}>
      {children}
    </div>);
};

export default ButtonBox