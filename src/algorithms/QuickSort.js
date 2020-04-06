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
     * @param {*} sortHistory - Elements that have been sorted
     * @param {*} selectedHistory - Elements that have been previously selected for sorting 
     */
    static quickSort(array, sortHistory, selectedHistory) {
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);

        this.quickSortIterative(array, 0, array.length - 1, sortHistory, selectedHistory);
    }

    /**
     * Quick sort iterative 
     * 
     * @param {*} array - Array to be sorted
     * @param {*} i - Element i
     * @param {*} j - Element j
     * @param {*} sortHistory - Elements that have been sorted 
     * @param {*} selectedHistory - Elements that have been previously selected for sorting  
     */
    static quickSortIterative(array, i, j, sortHistory, selectedHistory) {
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
            let partition = this.partition(array, i, j, sortHistory, selectedHistory);

            if (partition - 1 > i) {
                stack[++top] = i;
                stack[++top] = partition - 1;
            }

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
     * @param {*} sortHistory - Elements that have been sorted 
     * @param {*} selectedHistory - Elements that have been previously selected for sorting  
     */
    static partition(array, i, j, sortHistory, selectedHistory) {
        let x = array[j];
        let y = (i - 1);

        for (let k = i; k <= j - 1; k++) {
            sortHistory.push(array.slice());
            selectedHistory.push([k, i, j]);

            // If array index k is less than or equal to x, increment y, and call the swap function
            if (array[k] <= x) {
                y++;

                // Swap elements
                this.swap(array, y, k);
            }
        }

        this.swap(array, y + 1, j);

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
        while (array.length) {
            array.pop();
        }
    }
}