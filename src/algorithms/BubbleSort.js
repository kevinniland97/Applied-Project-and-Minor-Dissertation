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
     * @param {*} selectedHistory - Previous items that have been selected to be sorted
     */
    static bubbleSort(array, sortHistory, selectedHistory) {
        // Clear sortHistory and selectedHistory
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - (i + 1); j++) {
                /**
                 * The slice() method returns a shallow copy of a portion of an array into a 
                 * new array object selected from begin to end (end not included) where begin and 
                 * end represent the index of items in that array. The original array will not be 
                 * modified. Push this portion into sortHistory
                 * 
                 * Push index j + 1 and index j on to selectedHistory
                 */
                sortHistory.push(array.slice());
                selectedHistory.push([j + 1, j]);

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
        // While there are items in the array, pop an element off
        while (array.length) {
            array.pop();
        }
    }
}