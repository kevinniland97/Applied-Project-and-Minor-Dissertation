export default class HeapSort {
    /**
     * Performs the heap sort algorithm
     * 
     * Heap sort is a comparison-based sorting algorithm. Heap sort can be thought of as an improved selection sort: like selection 
     * sort, heap sort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by 
     * extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heap sort does not waste 
     * time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure 
     * to more quickly find the largest element in each step. This algorithm is not suitable for large data sets as its average and worst 
     * case complexities are of Ο(n log n), where n is the number of items.
     * 
     * @param {*} array - Array to be sorted
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting
     */
    static heapSort(array, sortHistory, selectedHistory) {
        // Clear sortHistory and selectedHistory
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);
    
        for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
            /**
             * The slice() method returns a shallow copy of a portion of an array into a 
             * new array object selected from begin to end (end not included) where begin and 
             * end represent the index of items in that array. The original array will not be 
             * modified. Push this portion into sortHistory
             * 
             * Push index i on to selectedHistory
             */
            sortHistory.push(array.slice());
            selectedHistory.push([i]);

            this.heapRoot(array, i);
          }
    
        for (let i = array.length - 1; i > 0; i--) {
            sortHistory.push(array.slice());
            selectedHistory.push([i]);

            this.swap(array, 0, i);
            // array.length--;
          
            this.heapRoot(array, 0);
        }
    }

    /**
     * 
     * @param {*} array - Array to be sorted
     * @param {*} i 
     */
    static heapRoot(array, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var index = i;
    
        if (left < array.length && array[left] > array[index]) {
            index = left;
        }
    
        if (right < array.length && array[right] > array[index])     {
            index = right;
        }
    
        if (index !== i) {
            this.swap(array, i, index);
            this.heapRoot(array, index);
        }
    }
    
    /**
     * Swaps items in the array
     * 
     * @param {*} array - Array of items
     * @param {*} indexA - Index A
     * @param {*} indexB - Index B
     */
    static swap(array, indexA, indexB) {
        var temp = array[indexA];
    
        array[indexA] = array[indexB];
        array[indexB] = temp;
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