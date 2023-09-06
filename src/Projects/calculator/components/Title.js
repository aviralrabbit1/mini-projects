import React from 'react'

function Title(props) {
  const titleStyle = {
    color: 'white',
    backgroundColor: '#385170',
    fontSize: '24px',
    padding: '4px',
    // backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
  }
  return (
    <div style={titleStyle} >{props.value}</div>
  )
}

export default Title