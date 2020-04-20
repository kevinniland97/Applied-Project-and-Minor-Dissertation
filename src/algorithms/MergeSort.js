export default class MergeSort {
    /**
     * Performs the merge sort algorithm on one half of array
     * 
     * Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in 
     * two halves, calls itself for the two halves and then merges the two sorted halves.
     * 
     * @param {*} array - Array to be sorted
     * @param {*} sortHistory - Elements that have been sorted 
     * @param {*} selectedHistory - Elements that have been previously selected for sorting
     */
    static mergeSort(array, sortHistory, selectedHistory) {
        let step = 1;

        // While still able to step through the array
        while (step < array.length) {
            let counter = 0;

            // While
            while (counter + step < array.length) {
                this.mergeBottomUp(array, counter, step, sortHistory, selectedHistory);

                counter += step * 2;
            }

            step *= 2;
        }
    }

    /**
     * Performs merge sort on remaining half of array
     * 
     * @param {*} array - Array to be sorted
     * @param {*} counter - Starting index
     * @param {*} step - Amount to step forward in array
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting
     */
    static mergeBottomUp(array, counter, step, sortHistory, selectedHistory) {
        let right = counter + step;
        let end = Math.min(counter + step * 2 - 1, array.length - 1);
        let stepLeft = counter;
        let stepRight = right;
        let temp = [];


        for (let i = counter; i <= end; i++) {
            /**
             * If index stepLeft is less than or equal to stepRight or stepRight is greater than end and stepLeft is less 
             * than right, store index stepLeft in array in a temp array at index i and increment stepLeft. If not, store 
             * index stepRight in a temp array at index i and increment stepRight
             */ 
            if ((array[stepLeft] <= array[stepRight] || stepRight > end) && stepLeft < right) {
                temp[i] = array[stepLeft];

                stepLeft++;
            } else {
                temp[i] = array[stepRight];

                stepRight++;
            }
        }

        for (let j = counter; j <= end; j++) {
            array[j] = temp[j];
        }

        /**
         * The slice() method returns a shallow copy of a portion of an array into a 
         * new array object selected from begin to end (end not included) where begin and 
         * end represent the index of items in that array. The original array will not be 
         * modified. Push this portion into sortHistory
         */
        sortHistory.push(array.slice());
        selectedHistory.push([-1]);
    }

    /**
     * Swaps items in the array depending on their size
     * 
     * @param {*} array - The array of items to be sorted
     * @param {*} i - Index
     * @param {*} j - Index
     */
    static swap(array, i, j) {
        let temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Clear the array i.e. pop an item off the array
     * 
     * @param {*} array - The array of items
     */
    static clearArray(array) {
        // While there are items in the array, pop an element off
        while (array.length) {
            array.pop();
        }
    }
}