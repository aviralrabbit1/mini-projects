import React from 'react'
import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
    const screenStyle = {
        height: '100px',
        width: '100%',
        marginBottom: '10px',
        marginTop: '10px',
        padding: '0 10px',
        backgroundColor: '#edb1f1',
        borderRadius: '10px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'black',
        // fontWeight: 'bold',
        boxSizing: 'border-box',
    }
    return (
      <Textfit style={screenStyle} mode="single" max={70}>
        {value}
      </Textfit>
    );
  };

export default Screen