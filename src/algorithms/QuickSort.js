export default class QuickSort {
    static quickSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        this.quickSortIterative(array, 0, array.length - 1, sortHistory, highlightHistory);
    }

    static quickSortIterative(array, l, h, sortHistory, highlightHistory) {
        // Create an auxiliary stack 
        let stack = [];
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