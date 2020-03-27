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
            let left = 0;

            while (left + step < array.length) {
                this.mergeBottomUp(array, left, step, sortHistory, selectedHistory);

                left += step * 2;
            }

            step *= 2;
        }
    }

    /**
     * Performs merge sort on remaining half of array
     * 
     * @param {*} array - Array to be sorted
     * @param {*} left - Starting index
     * @param {*} step - Amount to step forward in array
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting
     */
    static mergeBottomUp(array, left, step, sortHistory, selectedHistory) {
        let right = left + step;
        let end = Math.min(left + step * 2 - 1, array.length - 1);
        let stepLeft = left;
        let stepRight = right;
        let temp = [];

        for (let i = left; i <= end; i++) {
            if ((array[stepLeft] <= array[stepRight] || stepRight > end) && stepLeft < right) {
                temp[i] = array[stepLeft];

                stepLeft++;
            } else {
                temp[i] = array[stepRight];

                stepRight++;
            }
        }

        for (let j = left; j <= end; j++) {
            array[j] = temp[j];
        }

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
        while (array.length) {
            array.pop();
        }
    }
}