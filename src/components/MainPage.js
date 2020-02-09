import React, { Component } from 'react';
import { Button, Slider } from '@material-ui/core';
import '../styling/MainPage.css';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Styles from '../components/Styles';
import BubbleSort from '../algorithms/BubbleSort.js';
import InsertionSort from '../algorithms/InsertionSort.js';
import SelectionSort from '../algorithms/SelectionSort.js';
import MainToolbar from './MainToolbar';
import TextField from "@material-ui/core/TextField";

const defaultSize = 40;
const defaultSpeed = 150;
const maxSize = 200;
const maxSpeed = 200;
const highlightColors = ['red', 'purple', 'yellow', 'gray'];
const styles = Styles;

/**
 * 
 */
class MainPage extends Component {
  state = { dataset: "" };
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    
    this.state = {
      array: [],
      isHighlighted: [],
      stillSorting: false,
      sortName: 'Bubble Sort'
    };

    /**
     * 
     */
    this.sortHistory = [];
    this.highlightHistory = [];
    this.sortHistoryIndex = 0;
    this.interval = null;
    this.sortSize = defaultSize;
    this.sortSpeed = defaultSpeed;

    this.props.history.listen((location, action) => {
      this.generateRandomArray();
      // this.generateUserArray();

      let path = location.pathname;
      switch (path) {
        case '/bubble-sort':
          this.setState({ sortName: 'Bubble Sort' });
          break;
        case '/insertion-sort':
          this.setState({ sortName: 'Insertion Sort' });
          break;
        case '/selection-sort':
          this.setState({ sortName: 'Selection Sort' });
          break;
        default:
            this.setState({sortName: 'Bubble Sort'});
      }
    });
  }

  /**
   * https://reactjs.org/docs/react-component.html#componentdidmount
   * 
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
   */
  componentDidMount() {
    this.generateRandomArray();
    // this.generateUserArray();
  }

  /**
   * 
   */
  generateRandomArray() {
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
    for (let i = 0; i < this.sortSize; i++) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }

    this.setState({array: array, isHighlighted: -1});
  }

  /**
   * 
   */
  handleDataset = ({ target }) => {
    console.log(target.value);
    this.setState({ dataset: target.value });
  };

  /**
   * 
   */
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { dataset } = this.state;

    this.generateUserArray(dataset);
  };

  /**
   * 
   * @param {*} dataset 
   */
  generateUserArray(dataset) {
    if (this.interval) {
      clearInterval(this.interval);

      this.interval = null;
      this.setState({ stillSorting: false });
    }

    console.log(dataset);

    this.sortHistoryIndex = 0;
    this.sortHistory = [];
    this.highlightHistory = [];

    let array = [];

    /**
     * 
     */
    // for (let i = 0; i < this.dataset.size; i++) {
    //   array.push(dataset);
    // }

    for (let i = 0; i < dataset.length; i++) {
      array = dataset.split("");
    }

    console.log(array);

    this.setState({array: array, isHighlighted: -1});
  }

  sortAsHighlighted(array, sortHistory, highlightHistory) {
    let path = this.props.location.pathname;

    switch (path) {
      case '/bubble-sort':
        BubbleSort.bubbleSort(array.slice(), sortHistory, highlightHistory);
        break;
      case '/insertion-sort':
        InsertionSort.insertionSort(array.slice(), sortHistory, highlightHistory);
        break;
      case '/selection-sort':
        SelectionSort.selectionSort(array.slice(), sortHistory, highlightHistory);
        break;
      default:
        BubbleSort.bubbleSort(array.slice(), sortHistory, highlightHistory);
    }
  }

  /**
   * 
   */
  handleSort() {
    if (this.interval) {
      return;
    }

    if (this.sortHistory.length !== 0 && this.sortHistoryIndex === this.sortHistory.length) {
      return;
    }

    if (this.sortHistoryIndex === 0) {
      this.sortAsHighlighted(this.state.array.slice(), this.sortHistory, this.highlightHistory);
      this.sortHistoryIndex = 0;

      if (this.sortHistory.length === 1) {
        return;
      }
    }
    
    this.setState({ stillSorting: true });

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      if (this.sortHistoryIndex >= this.sortHistory.length - 1) {
        clearInterval(this.interval);

        this.interval = null;
        this.setState({ stillSorting: false });
      }

      this.setState({ array: this.sortHistory[this.sortHistoryIndex], isHighlighted: this.highlightHistory[this.sortHistoryIndex]});
      this.sortHistoryIndex++;
    }, maxSpeed - this.sortSpeed);
  }

  /**
   * 
   */
  stopSort() {
    if (this.interval) {
      clearInterval(this.interval);

      this.interval = null;
      this.setState({ stillSorting: false });
    }
  }

  /**
   * 
   * @param {*} isHighlighted 
   * @param {*} index 
   */
  determineBarColor(isHighlighted, index) {
    for (let i = 0; i < isHighlighted.length; i++) {
      if (isHighlighted[i] === index) {
        return highlightColors[i];
      }
    }

    // DOCUMENT
    return 'snow';
  }

  /**
   * 
   */
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <MainToolbar history={ this.props.history } />
        <span className="sort-name"> { this.state.sortName }</span>
        <div className="bar-wrapper">
          {this.state.array.map((item, index) => <Bar key={index} size={item} color={this.determineBarColor(this.state.isHighlighted, index)}/>)}
        </div>
        <div className="buttons-wrapper">
          <Button className={classes.button} onClick={ () => this.generateRandomArray()}>Generate random array</Button>
          <Button className={classes.button} onClick={ this.handleSubmit }>Generate own dataset</Button>
          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="dataset"
          label="Dataset"
          name="dataset"
          color="white"
          onChange={this.handleDataset}/>
          <Button className={classes.button} style={{backgroundColor: this.state.stillSorting ? 'red' : classes.button.backgroundColor}} onClick={ this.state.stillSorting ? this.stopSort.bind(this) : this.handleSort.bind(this)} > {this.state.stillSorting ? 'STOP' : 'SORT'}</Button>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * 
 * @param {*} props 
 */
function Bar(props) {
  return (
    <div className='bar' style={{ height: props.size * 10, backgroundColor: props.color }}>
    </div>
  );
}

export default withStyles(styles)(MainPage);