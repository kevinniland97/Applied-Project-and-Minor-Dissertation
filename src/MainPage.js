import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './styling/MainPage.css';
import { withStyles } from '@material-ui/styles';
import TextField from "@material-ui/core/TextField";
import BubbleSort from './algorithms/BubbleSort.js';
import InsertionSort from './algorithms/InsertionSort.js';
import SelectionSort from './algorithms/SelectionSort.js';
import QuickSort from './algorithms/QuickSort.js';
import BogoSort from './algorithms/BogoSort.js';
import MergeSort from './algorithms/MergeSort.js';
import HeapSort from './algorithms/HeapSort.js';
import ShellSort from './algorithms/ShellSort.js';
import MainToolbar from './components/MainToolbar';

// Constants
const SIZE = 70;
const SPEED = 200;
const MAX = 200;
const BARCOLORS = ['red', 'purple', 'blue', 'gray'];
var i;

// Styling
const styles = {
  button: {
    display: 'inline-block',
    backgroundColor: '#56935c',
    color: 'white',
    margin: 10,
    '&:hover': {
      backgroundColor: '#56935c',
    }
  },
  title: {
    textTransform: 'capitalize',
    marginLeft: 15,
    fontWeight: 'bold '
  }
}

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

/**
 * MainPage - Main page of the application. Allows users to choose a sorting algorithm to visualize
 */
class MainPage extends Component {
  constructor(props) {
    super(props);

    // Contains various states related to sorting aspect
    this.state = {
      array: [], // Array of elements to sort
      isSelected: [], // Array of selected elements up for sorting
      show: true, // Will enable access to various functionality if user is logged in
      stillSorting: false, // Determines whether the array of elements is still being sorted
      sortName: 'Bubble Sort', // Default sort name
      dataset: '' // Contains the user dataset
    }; 
    
    this.counter = 0;
    this.isFinished = null;
    this.sortSpeed = SPEED;
  }

  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
   * Initialization that requires DOM nodes go here. As such, a random array is automatically generated
   * and whether or not the user is logged in is also checked
   */
  componentDidMount() {
    this.randomArray();

    this.props.history.listen((algorithm) => {
      this.randomArray();

      // Determines which sort name to display based on chosen sorting algorithm
      switch (algorithm.pathname) {
        case '/bogo-sort':
          this.setState({ sortName: 'Bogo Sort' });
          break;
        case '/bubble-sort':
          this.setState({ sortName: 'Bubble Sort' });
          break;
        case '/heap-sort':
          this.setState({ sortName: 'Heap Sort' });
          break;
        case '/insertion-sort':
          this.setState({ sortName: 'Insertion Sort' });
          break;
        case '/merge-sort':
          this.setState({ sortName: 'Merge Sort' });
          break;
        case '/quick-sort':
          this.setState({ sortName: 'Quick Sort' });
          break;
        case '/selection-sort':
          this.setState({ sortName: 'Selection Sort' });
          break;
        case '/shell-sort':
          this.setState({ sortName: 'Shell Sort' });
          break;         
        default:
          this.setState({ sortName: 'Bubble Sort' });
      }
    });

    // Displays logged in user
    if (localStorage.getItem('loggedIn') === 'true') {
      console.log("Logged in");

      this.setState({ show: true })

      return;
    } else {
      console.log("Not logged in");

      this.setState({ show: false })

      return;
    }
  }

  // Checks if array is still being sorted
  handleIsFinished() {
    if (this.isFinished) {
      // Sets stillSorting to false
      this.setState({stillSorting: false});

      clearInterval(this.isFinished);
      this.isFinished = null;
    }
  }

  /**
   * Handles dataset defined by user
   */
  handleDataset = ({ arr }) => {
    this.setState({ dataset: arr.value });
  };

  /**
   * Submits dataset to be sorted. Generates the user array from this
   */
  handleSubmit = () => {
    const { dataset } = this.state;

    this.userArray(dataset);
  };

   /**
   * Handles sorting
   */
  handleSort() {
    if (this.counter === 0) {
      this.sortSelected(this.state.array.slice(), this.sortedElements, this.selectedElements);

      this.counter = 0;
    }  

    this.setState({ stillSorting: true });
    
    this.isFinished = setInterval( () => {
      if (this.counter >= this.sortedElements.length - 1) {
        clearInterval(this.isFinished);
        this.isFinished = null;

        this.setState({stillSorting: false});
      }

      this.setState({
        array: this.sortedElements[this.counter], 
        isSelected: this.selectedElements[this.counter]
      });

      this.counter++;
    }, MAX - this.sortSpeed);
  }

  /**
   * Generates an array to be sorted based on user input
   * 
   * @param {*} dataset - Dataset defined by user
   */
  userArray(dataset) {
    this.handleIsFinished();

    let array = [];

    /**
     * Process the dataset, enabling a visual representation to be generated from it
     */
    for (let i = 0; i < dataset.length; i++) {
      array = dataset.split("");
      dataset = dataset.split(/[ ,]+/).join(',');
      array = dataset.split(',');
    }

    /**
     * Shuffle the user array using the Fisher-Yates Shuffle
     * 
     * Implementation of the Fisher-Yates Shuffle: https://stackoverflow.com/a/2450976/8721358
     */
    var currentIndex = array.length, temp, random;

    while (currentIndex !== 0) {
      random = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      // And swap it with the current element.
      temp = array[currentIndex];
      array[currentIndex] = array[random];
      array[random] = temp;
    }

    this.setState({array: array, isHighlighted: -1});
  }

  /** 
   * Generates a random array of a fixed size
   */ 
  randomArray() {
    this.handleIsFinished();

    let array = [];

    for (i = 1; i < SIZE; i++) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }

    this.setState({array: array, isSelected: -1});
  }

  /**
   * Performs sorting based on chosen sorting algorithm
   * 
   * @param {*} array - Array to be sorted
   * @param {*} sortedElements - Elements that have been sorted
   * @param {*} selectedElements - Elements that have been selected for sorting
   */
  sortSelected(array, sortedElements, selectedElements) {
    let arr = array.slice();

    switch (this.props.location.pathname) {
      case '/bogo-sort':
        BogoSort.bogoSort(arr, sortedElements, selectedElements);
        break;
      case '/bubble-sort':
        BubbleSort.bubbleSort(arr, sortedElements, selectedElements);
        break;
      case '/heap-sort':
        HeapSort.heapSort(arr, sortedElements, selectedElements);
        break;
      case '/insertion-sort':
        InsertionSort.insertionSort(arr, sortedElements, selectedElements);
        break;
      case '/merge-sort':
        MergeSort.mergeSort(arr, sortedElements, selectedElements);
        break;
      case '/quick-sort':
        QuickSort.quickSort(arr, sortedElements, selectedElements);
        break;
      case '/selection-sort':
        SelectionSort.selectionSort(arr, sortedElements, selectedElements);
        break;
      case '/shell-sort':
        ShellSort.shellSort(arr, sortedElements, selectedElements);
        break;           
      default:
        BubbleSort.bubbleSort(arr, sortedElements, selectedElements);
    }
  }

  /**
   * Pauses sorting the array on button click
   */
  pauseSort() {
   this.handleIsFinished();
  }

  /**
   * Determines the color of each bar during the sorting process
   * 
   * @param {*} isSelected - Selected index in array
   * @param {*} index - Current index
   */
  setColor(isSelected, index) {
    for (i = 0; i < isSelected.length; i++) {
      if (isSelected[i] === index) {
        return BARCOLORS[i];
      }
    }

    // Determines the color of the bars when not being sorted
    return '#48d0fa';
  }

  // Renders the page
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <MainToolbar history={this.props.history} />

        <div>
        {this.state.show &&
          <div className="record-wrapper">
            <a href="https://jmperezperez.com/screenflow/" target="_blank" rel="noopener noreferrer">
              <Button className={classes.button} style={styles.title}>Screen Record API</Button>
            </a>
          </div>}
        </div>
        
        {/* Displays state of application */}
        <div>
        {this.state.stillSorting &&
          <span className="sort-name">Sorting array...</span>}
        </div>

        <div>
        {!this.state.stillSorting &&
          <span className="sort-name">Waiting...</span>}
        </div>

        <div className="bar-wrapper">
          {this.state.array.map((item, index) => <ArrayElement key={index} size={item} color={this.setColor(this.state.isSelected, index)}/>)}
        </div>
          
        {/* Display the current sorting algorithm chosen */}
        <span className="sort-name">Current sorting algorithm: {this.state.sortName}</span>

        <div className="buttons-wrapper">
          <Button className={classes.button} style={styles.title} onClick={ () => this.randomArray()}>Generate random array</Button>
          <Button className={classes.button} style={{backgroundColor: this.state.stillSorting ? 'red' : classes.button.backgroundColor, textTransform: 'capitalize'}} onClick={ this.state.stillSorting ? this.pauseSort.bind(this) : this.handleSort.bind(this)} > {this.state.stillSorting ? 'Stop Sorting' : 'Start Sorting'}</Button>
           
           <div>
           {this.state.show &&
            <div className="clearfix">
              <div className="buttons-wrapper">
                <Button className={classes.button} style={styles.title} onClick={ this.handleSubmit }>Add to own dataset</Button>
                <TextField
                className="dataset-box"
                variant="outlined"
                margin="normal"
                id="dataset"
                label="Dataset"
                name="dataset"
                color="white"
                onChange={this.handleDataset} />
              </div>
            </div>}
          </div> 
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);