export default class ShellSort {
    /**
     * Performs shell sort algorithm. 
     * 
     * Shell sort is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) 
     * or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then 
     * progressively reducing the gap between elements to be compared. The running time of Shellsort is heavily dependent on the 
     * gap sequence it uses. This algorithm is not suitable for large data sets as its average and worst case complexities 
     * are of Ο(n2), where n is the number of items.
     * 
     * @param {*} array - Array to be sorted
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting
     */
    static shellSort(array, sortHistory, selectedHistory) {
        // Clear sortHistory and selectedHistory
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);

        for (let h = array.length; h > 0; h = parseInt(h / 2, 10)) {
            for (let i = h; i < array.length; i++) {
                /**
                 * The slice() method returns a shallow copy of a portion of an array into a 
                 * new array object selected from begin to end (end not included) where begin and 
                 * end represent the index of items in that array. The original array will not be 
                 * modified. Push this portion into sortHistory
                 */
                sortHistory.push(array.slice());
                selectedHistory.push([i + 1, i]);

                let k = array[i];

                for (var j = i; j >= h && k < array[j - h]; j -= h)
                array[j] = array[j - h];
                array[j] = k;
            }
        }
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