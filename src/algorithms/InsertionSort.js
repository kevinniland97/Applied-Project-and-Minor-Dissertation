export default class InsertionSort {
    /**
     * Performs the insertion sort algorithm
     * 
     * @param {*} array - Array of items to be sorted
     * @param {*} sortHistory - Previous items that have been sorted 
     * @param {*} highlightHistory - Previous items that have been... 
     */
    static insertionSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        let leftColumn = -1;

        for (let i = 0; i < array.length; i++) {
            leftColumn = i;
            let temp = array[i];

            for (let j = i - 1; j >= 0 && array[j] > temp; j--) {
                array[j + 1] = array[j];

                sortHistory.push(array.slice());
                highlightHistory.push([j, leftColumn]);
            }

            array[j + 1] = temp;
        }

        sortHistory.push(array.slice());
        highlightHistory.push([0, array.length - 1]);
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