export default class BubbleSort {
    /**
     * Performs the bubble sort algorithm
     * 
     * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly 
     * steps through the list, compares adjacent elements and swaps them if they are in the wrong order. 
     * The pass through the list is repeated until the list is sorted. This algorithm is not suitable for large data 
     * sets as its average and worst case complexities are of Ο(n2), where n is the number of items.
     * 
     * @param {*} array - Array of items to be sorted
     * @param {*} sortHistory - Previous items that have been sorted 
     * @param {*} highlightHistory - Previous items that have been...
     */
    static bubbleSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        let counter = 0;

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - (i + 1); j++) {
                sortHistory.push(array.slice());
                highlightHistory.push([j + 1, j]);

                counter++;

                // If index j in the array is larger than index j + 1 in the array, swap them
                if (array[j] > array[j + 1]) {
                    this.swap(array, j, j + 1);
                }
            }
        }
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