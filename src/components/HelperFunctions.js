import React, { Component } from 'react';
import BubbleSort from './algorithms/BubbleSort.js';
import InsertionSort from './algorithms/InsertionSort.js';
import SelectionSort from './algorithms/SelectionSort.js';
import QuickSort from './algorithms/QuickSort.js';
import BogoSort from './algorithms/BogoSort.js';
import MergeSort from './algorithms/MergeSort.js';
import HeapSort from './algorithms/HeapSort.js';
import ShellSort from './algorithms/ShellSort.js';

class HelperFunctions extends Component {
    /**
   * Performs sorting based on chosen sorting algorithm
   * 
   * @param {*} array - Array to be sorted
   * @param {*} sortedElements - Elements that have been sorted
   * @param {*} selectedElements - Elements that have been selected for sorting
   */
  sortArray(array, sortedElements, selectedElements) {
    switch (this.props.location.pathname) {
      case '/bogo-sort':
        BogoSort.bogoSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/bubble-sort':
        BubbleSort.bubbleSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/heap-sort':
        HeapSort.heapSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/insertion-sort':
        InsertionSort.insertionSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/merge-sort':
        MergeSort.mergeSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/quick-sort':
        QuickSort.quickSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/selection-sort':
        SelectionSort.selectionSort(array.slice(), sortedElements, selectedElements);
        break;
      case '/shell-sort':
        ShellSort.shellSort(array.slice(), sortedElements, selectedElements);
        break;           
      default:
        BubbleSort.bubbleSort(array.slice(), sortedElements, selectedElements);
      }
    }
}

export default (HelperFunctions);