import React, { Component } from 'react';

class HelperFunctions extends Component {
    handleIsFinished() {
        if (this.isFinished) {
          clearInterval(this.isFinished);
          this.isFinished = null;
    
          // Sets stillSorting to false
          this.setState({ stillSorting: false });
        }
    }
}

export default (HelperFunctions);