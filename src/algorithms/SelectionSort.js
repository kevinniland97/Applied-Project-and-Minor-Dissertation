// 
export default class SelectionSort {
    /**
     * Performs the selection sort algorithm
     * 
     * @param {*} array 
     * @param {*} sortHistory 
     * @param {*} highlightHistory 
     */
    static selectionSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        let leftColumn = -1;
    
        /**
         * 
         */
        for (let i = 0; i < array.length; i++) {
            let minimum = i;
            leftColumn = min;

            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minimum]) {
                    minimum = j;
                }

                sortHistory.push(array.slice());
                highlightHistory.push([j, leftColumn, minimum]);
            }

            if (i !== minimum) {
                this.swap(array, i, minimum);
            }
        }

        sortHistory.push(array.slice());
        highlightHistory.push([-1, array.length - 1]);
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