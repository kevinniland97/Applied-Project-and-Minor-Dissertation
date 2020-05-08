export default class QuickSort {
    /**
     * Performs the quick sort algorithm
     * 
     * Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given 
     * array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. This implementation 
     * of quick sort is a recursive implementation of quick sort. This algorithm is not suitable for large data sets as its average and 
     * worst case complexities are of Ο(n2), where n is the number of items.
     * 
     * @param {*} array - Array to be sorted
     * @param {*} sortedElements - Elements that have been sorted
     * @param {*} selectedElements - Elements that have been previously selected for sorting 
     */
    static quickSort(array, sortedElements, selectedElements) {
        // Clear sortedElements and selectedElements
        this.clearArray(sortedElements);
        this.clearArray(selectedElements);

        /**
         * Pass in the array, set index i as 0, set index j as the length of the array, sortedElements 
         * and selectedElements
         */ 
        this.quickSortIterative(array, 0, array.length - 1, sortedElements, selectedElements);
    }

    /**
     * Quick sort iterative 
     * 
     * @param {*} array - Array to be sorted
     * @param {*} i - Element i
     * @param {*} j - Element j
     * @param {*} sortedElements - Elements that have been sorted 
     * @param {*} selectedElements - Elements that have been previously selected for sorting  
     */
    static quickSortIterative(array, i, j, sortedElements, selectedElements) {
        // Stack of elements
        let stack = [];

        // Top of stack
        let top = -1;

        stack[++top] = i;
        stack[++top] = j;

        // While top of stack is greater than or equal to 0
        while (top >= 0) {
            j = stack[top--]; // Take item of stack and store in j
            i = stack[top--]; // Take item of stack and store in i

            // Partition array
            let partition = this.partition(array, i, j, sortedElements, selectedElements);

            /**
             * If partition minus 1 is less than i, stack[++top] is equal to i then partition - 1
             */ 
            if (partition - 1 > i) {
                stack[++top] = i;
                stack[++top] = partition - 1;
            }

            /**
             * If partition plus 1 is less than j, stack[++top] is equal to partition + 1 then j
             */ 
            if (partition + 1 < j) {
                stack[++top] = partition + 1;
                stack[++top] = j;
            }
        }
    }

    /**
     * Perfroms a partition
     * 
     * @param {*} array - Array to be sorted
     * @param {*} i - Element i
     * @param {*} j - Element j
     * @param {*} sortedElements - Elements that have been sorted 
     * @param {*} selectedElements - Elements that have been previously selected for sorting  
     */
    static partition(array, i, j, sortedElements, selectedElements) {
        let x = array[j];
        let y = (i - 1);

        for (let k = i; k <= j - 1; k++) {
            /**
             * The slice() method returns a shallow copy of a portion of an array into a 
             * new array object selected from begin to end (end not included) where begin and 
             * end represent the index of items in that array. The original array will not be 
             * modified. Push this portion into sortedElements
             * 
             * Push k, i, and j into selectedElements
             */
            sortedElements.push(array.slice());
            selectedElements.push([k, i, j]);

            // If array index k is less than or equal to x, increment y, and call the swap function
            if (array[k] <= x) {
                y++;

                // Swap elements
                this.swap(array, y, k);
            }
        }

        // Swap elements again when done
        this.swap(array, y + 1, j);

        // Return y + 1
        return (y + 1);
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