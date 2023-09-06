import React from 'react'
import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
    const screenStyle = {
        height: '100px',
        width: '100%',
        marginBottom: '10px',
        padding: '0 10px',
        backgroundColor: '#4357692d',
        borderRadius: '10px',
        display: 'flex',
        alignitems: 'center',
        justifycontent: 'flex-end',
        color: 'white',
        fontweight: 'bold',
        boxSizing: 'border-box',
    }
    return (
      <Textfit style={screenStyle} mode="single" max={70}>
        {value}
      </Textfit>
    );
  };

export default Screen