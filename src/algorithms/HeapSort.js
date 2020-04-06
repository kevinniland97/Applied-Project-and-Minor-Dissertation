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
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);
    
        for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
            sortHistory.push(array.slice());
            selectedHistory.push([i]);

            this.heap_root(array, i);
          }
    
        for (let i = array.length - 1; i > 0; i--) {
            sortHistory.push(array.slice());
            selectedHistory.push([i]);

            this.swap(array, 0, i);
            // array.length--;
          
            this.heap_root(array, 0);
        }
    }

    /**
     * 
     * @param {*} array - Array to be sorted
     * @param {*} i 
     */
    static heap_root(array, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;
    
        if (left < array.length && array[left] > array[max]) {
            max = left;
        }
    
        if (right < array.length && array[right] > array[max])     {
            max = right;
        }
    
        if (max !== i) {
            this.swap(array, i, max);
            this.heap_root(array, max);
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
        while (array.length) {
            array.pop();
        }
    }
}