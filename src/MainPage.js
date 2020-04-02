// Imports
import React, { Component } from 'react';
// import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Button } from '@material-ui/core';
import './styling/MainPage.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
// import { Dropdown } from 'react-bootstrap';
// import { ButtonGroup } from '@material-ui/core';
import firebaseConfig from './firebase/firebase-config';
import BubbleSort from './algorithms/BubbleSort.js';
import InsertionSort from './algorithms/InsertionSort.js';
import SelectionSort from './algorithms/SelectionSort.js';
import QuickSort from './algorithms/QuickSort.js';
import BogoSort from './algorithms/BogoSort.js';
import MergeSort from './algorithms/MergeSort.js';
import HeapSort from './algorithms/HeapSort.js';
import Shell from './algorithms/ShellSort.js';
import MainToolbar from './components/MainToolbar';

firebase.initializeApp(firebaseConfig);

// Constants
const defaultDatasetSize = 50;
const defaultSortSpeed = 200;
// const maxSortSize = 200;
const maxSortSpeed = 200;
const highlightColors = ['red', 'purple', 'blue', 'gray'];

// Styling
const styles = {
  button: {
    display: 'inline-block',
    backgroundColor: '#3f51b5',
    color: 'white',
    margin: 10,
    '&:hover': {
      backgroundColor: '#5f71d4',
    }
  }
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
      stillSorting: false, // Determines whether the array of elements is still being sorted
      sortName: 'Bubble Sort', // Default sort name
      dataset: '', // Contains the user dataset
      video: '',
      videoURL: '',
      progress: 0
    }; 

    // this.sortHistory = []; 
    // this.selectedHistory = [];
    this.sortHistoryIndex = 0;
    this.interval = null;
    this.sortSize = defaultDatasetSize;
    this.sortSpeed = defaultSortSpeed;

    this.props.history.listen((location, action) => {
      this.generateRandomArray();
      // this.generateUserArray();

      let path = location.pathname;

      switch (path) {
        case '/bubble-sort':
          this.setState({sortName: 'Bubble Sort'});
          break;
        case '/insertion-sort':
          this.setState({sortName: 'Insertion Sort'});
          break;
        case '/selection-sort':
          this.setState({sortName: 'Selection Sort'});
          break;
        case '/merge-sort':
          this.setState({sortName: 'Merge Sort'});
          break;
        case '/quick-sort':
          this.setState({sortName: 'Quick Sort'});
          break;
        case '/bogo-sort':
          this.setState({sortName: 'Bogo Sort'});
          break;
        case '/heap-sort':
          this.setState({sortName: 'Heap Sort'});
          break;
        case '/shell-sort':
          this.setState({sortName: 'Shell Sort'});
          break;         
        default:
          this.setState({sortName: 'Bubble Sort'});
      }
    });
  }

  /**
   * 
   */
  componentDidMount() {
    this.generateRandomArray();
  }

  /**
   * 
   */
  handleDataset = ({ target }) => {
    console.log(target.value);
    this.setState({ dataset: target.value });
  };

  /**
   * Submits dataset to be sorted
   */
  handleSubmit = () => {
    const { dataset } = this.state;

    console.log(dataset);
    this.generateUserArray(dataset);
  };

  /**
   * Generates an array to be sorted based on user input
   * 
   * @param {*} dataset - Dataset defined by user
   */
  generateUserArray(dataset) {
    if (this.interval) {
      clearInterval(this.interval);

      this.interval = null;
      this.setState({ stillSorting: false });
    }

    this.sortHistoryIndex = 0;
    this.sortHistory = [];
    this.highlightHistory = [];

    let array = [];

    /**
     * 
     */
    for (let i = 0; i < dataset.length; i++) {
      array = dataset.split("");
      dataset = dataset.split(/[ ,]+/).join(',');
      array = dataset.split(',');
    }

    console.log(dataset);
    console.log(array);

    /**
     * Shuffle the user array using the Fisher-Yates Shuffle
     * 
     * Implementation of the Fisher-Yates Shuffle: https://stackoverflow.com/a/2450976/8721358
     */
    var currentIndex = array.length, temp, random;

    /**
     * 
     */
    while (0 !== currentIndex) {
      random = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      // And swap it with the current element.
      temp = array[currentIndex];
      array[currentIndex] = array[random];
      array[random] = temp;
    }

    // 
    this.setState({array: array, isHighlighted: -1});
  }

  /** 
   * Generates a random array of a fixed size
   */ 
  generateRandomArray() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;

      this.setState({stillSorting: false});
    }

    
    this.sortHistoryIndex = 0;
    this.sortHistory = [];
    this.selectedHistory = [];

    let array = [];

    for (let i = 0; i < this.sortSize; i++) {
      array.push(Math.floor( Math.random() * 50) + 1);
    }

    this.setState({array: array, isSelected: -1});
  }

  /**
   * Performs sorting based on chosen sorting algorithm
   * 
   * @param {*} array - Array to be sorted
   * @param {*} sortHistory - Elements that have been sorted
   * @param {*} selectedHistory - Elements that have been selected for sorting
   */
  sortSelected(array, sortHistory, selectedHistory) {
    let path = this.props.location.pathname;

    switch (path) {
      case '/bubble-sort':
        BubbleSort.bubbleSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/insertion-sort':
        InsertionSort.insertionSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/selection-sort':
        SelectionSort.selectionSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/merge-sort':
        MergeSort.mergeSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/quick-sort':
        QuickSort.quickSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/bogo-sort':
        BogoSort.bogoSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/heap-sort':
        HeapSort.heapSort(array.slice(), sortHistory, selectedHistory);
        break;
      case '/shell-sort':
        Shell.shellSort(array.slice(), sortHistory, selectedHistory);
        break;           
      default:
        BubbleSort.bubbleSort(array.slice(), sortHistory, selectedHistory);
    }
  }

  /**
   * Handles sorting
   */
  handleSort() {
    if (this.interval) {
      return;
    }

    if (this.sortHistory.length !== 0 && this.sortHistoryIndex === this.sortHistory.length) {
      return;
    }

    if (this.sortHistoryIndex === 0) {
      this.sortSelected(this.state.array.slice(), this.sortHistory, this.selectedHistory);

      this.sortHistoryIndex = 0;

      if (this.sortHistory.length === 1) {
        return;
      }
    }  

    this.setState({stillSorting: true});

    if (this.interval) {
      clearInterval(this.interval);
    }
    
    this.interval = setInterval( () => {
      if (this.sortHistoryIndex >= this.sortHistory.length - 1) {
        clearInterval(this.interval);
        this.interval = null;

        this.setState({stillSorting: false});
      }

      this.setState({
        array: this.sortHistory[this.sortHistoryIndex], 
        isSelected: this.selectedHistory[this.sortHistoryIndex]
      });

      this.sortHistoryIndex++;
    }, maxSortSpeed - this.sortSpeed);
  }

  /**
   * Stops sorting the array on button click
   */
  stopSort() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;

      this.setState({stillSorting: false});
    }
  }

  /**
   * 
   * @param {*} event 
   * @param {*} newValue 
   */
  handleSizeSlide(event, newValue) {
    let array = this.state.array;

    this.sortHistoryIndex = 0;
    this.sortHistory = [];
    this.selectedHistory = [];

    if (newValue > array.length) {
      for (let i = 0; i < newValue - array.length; i++) {
        array.push(Math.floor( Math.random() * 50) + 1);
      }
    } else {
      for (let i = 0; i < array.length - newValue; i++) {
        array.pop();
      }
    }

    this.sortSize = newValue;
    this.setState({array: array});
  }

  /**
   * 
   * @param {*} event 
   * @param {*} newValue 
   */
  handleSpeedSlide(event, newValue) {
    this.sortSpeed = newValue;
  }

  /**
   * 
   * @param {*} event 
   * @param {*} newValue 
   */
  handleHistorySlide(event, newValue) {
    if (newValue < 0 || newValue > this.sortHistory.length - 1) {
      return;
    }

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;

      this.setState({stillSorting: false});
    }

    this.setState({
      array: this.sortHistory[newValue], isSelected: this.selectedHistory[newValue]
    });

    this.sortHistoryIndex = newValue;
  }

  handleUploadStart = () => {
    this.setState ({
      progress: 0
    })
  }

  handleUploadSuccess = filename => {
    this.setState ({
      video: filename, 
      progress: 100
    })

    firebase.storage().ref('sorts').child(filename).getDownloadURL()
    .then(url => this.setState ({
      videoURL: url
    }))
  }

  /**
   * Determines the color of each bar during the sorting process
   * @param {*} isSelected 
   * @param {*} index 
   */
  determineBarColor(isSelected, index) {
    for (let i = 0; i < isSelected.length; i++) {
      if (isSelected[i] === index) {
        return highlightColors[i];
      }
    }

    // Determines the color of the bars when not being sorted
    return 'aqua';
  }

  // Renders the page
  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <div className="App">
        <MainToolbar history={this.props.history} />

        <span className="sort-name"> {this.state.sortName}</span>

        {/* <div>
          <a href="https://jmperezperez.com/screenflow/">Screen Record API</a>
        </div> */}
        <div className="record-wrapper">
          <a href="https://jmperezperez.com/screenflow/" target="_blank" rel="noopener noreferrer">
            <Button className={classes.button}>Screen Record API</Button>
          </a>
          {/* <Dropdown as={ButtonGroup}>
            <Button variant="success" variant="h6" color="white" style={styles.title}>Sorting</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="/screenRecord">Record</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>

        <div className="bar-wrapper">
          {this.state.array.map((item, index) => <Bar key={index} size={item} color={this.determineBarColor(this.state.isSelected, index)}/>)}
        </div>

        <div className="buttons-wrapper">
          <Button className={classes.button} onClick={ () => this.generateRandomArray()}>Generate random array</Button>
          <Button className={classes.button} style={{backgroundColor: this.state.stillSorting ? 'red' : classes.button.backgroundColor}} onClick={ this.state.stillSorting ? this.stopSort.bind(this) : this.handleSort.bind(this)} > {this.state.stillSorting ? 'Stop Sorting' : 'Start Sorting'}</Button>
          <FileUploader 
          // accept="video/*"
          name="video"
          storageRef={firebase.storage().ref('sorts')} 
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSucess}
          />
          <div className="clearfix">
            <div className="buttons-wrapper">
              <Button className={classes.button} onClick={ this.handleSubmit }>Add to own dataset</Button>
              <TextField
              variant="outlined"
              margin="normal"
              id="dataset"
              label="Dataset"
              name="dataset"
              color="white"
              onChange={this.handleDataset} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 
MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * Renders a bar - these bars are for visualisation and will be sorted based on heigh/value
 * @param {*} props 
 */
function Bar(props) {
  const barStyling = {
    bar: {
      color: 'green',
      display: 'inline-block',
      width: 20,
      margin: 3,
      height: props.size * 8, 
      backgroundColor: props.color
    },
    text: {
      display: 'inline-block',
    }
  }

  // Renders a bar for element in the array
  return (
    <div className='bar' style={barStyling.bar}>
      <h7 style={barStyling.text}>{ barStyling.bar.height / 8}</h7>
    </div>
  );
}

export default withStyles(styles)(MainPage);