import React from 'react';

/**
 * Renders a bar - these bars are for visualization and will be sorted based on height/value
 * 
 * @param {*} props 
 */
function ArrayElement(props) {
    const arrayElement = {
      element: {
        backgroundColor: props.color,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        color: 'green',
        display: 'inline-block',
        height: props.size * 9, 
        margin: 3,
        width: 17
      },
      text: {
        color: 'black',
        display: 'inline-block',
      }
    }
    
    // Renders a bar for element in the array
    return (
      <div className='array-element' style={arrayElement.element}>
        <h7 style={arrayElement.text}>{ arrayElement.element.height / 9}</h7>
      </div>
    );
  }

export default ArrayElement;