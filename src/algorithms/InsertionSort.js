export default class InsertionSort {
    /**
     * Performs the insertion sort algorithm
     * 
     * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
     * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
     * This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the 
     * number of items.
     * 
     * @param {*} array - Array of items to be sorted
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting 
     */
    static insertionSort(array, sortHistory, selectedHistory) {
        // Clear sortHistory and selectedHistory
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);

        let leftCol = -1;

        // Iterate through entire array
        for (let i = 0; i < array.length; i++) {
            leftCol = i;
            let temp = array[i];
            let j;

            for (j = i - 1; j >= 0 && array[j] > temp; j--) {
                array[j + 1] = array[j];

                /**
                 * The slice() method returns a shallow copy of a portion of an array into a 
                 * new array object selected from begin to end (end not included) where begin and 
                 * end represent the index of items in that array. The original array will not be 
                 * modified. Push this portion into sortHistory
                 */
                sortHistory.push(array.slice());
                selectedHistory.push([j, leftCol]);
            }

            array[j + 1] = temp;
        }

        sortHistory.push(array.slice());
        selectedHistory.push([0, array.length - 1]);
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