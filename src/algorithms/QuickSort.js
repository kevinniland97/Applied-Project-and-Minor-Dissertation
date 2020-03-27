export default class QuickSort {
    /**
     * Performs the quick sort algorithm
     * 
     * Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given 
     * array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. This implementation 
     * of quick sort is a recursive implementation of quick sort
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
     * 
     * @param {*} array - Array to be sorted
     * @param {*} l 
     * @param {*} h 
     * @param {*} sortHistory - Elements that have been sorted 
     * @param {*} selectedHistory - Elements that have been previously selected for sorting  
     */
    static quickSortIterative(array, l, h, sortHistory, selectedHistory) {
        let stack = [];

        let top = -1;

        stack[++top] = l;
        stack[++top] = h;

        while (top >= 0) {
            h = stack[top--];
            l = stack[top--];

            let p = this.partition(array, l, h, sortHistory, selectedHistory);

            if (p - 1 > l) {
                stack[++top] = l;
                stack[++top] = p - 1;
            }

            if (p + 1 < h) {
                stack[++top] = p + 1;
                stack[++top] = h;
            }
        }
    }

    /**
     * 
     * @param {*} array - Array to be sorted
     * @param {*} l 
     * @param {*} h 
     * @param {*} sortHistory - Elements that have been sorted 
     * @param {*} selectedHistory - Elements that have been previously selected for sorting  
     */
    static partition(array, l, h, sortHistory, selectedHistory) {
        let x = array[h];
        let i = (l - 1);

        for (let j = l; j <= h - 1; j++) {
            sortHistory.push(array.slice());
            selectedHistory.push([j, l, h]);

            if (array[j] <= x) {
                i++;

                this.swap(array, i, j);
            }
        }

        this.swap(array, i + 1, h);

        return (i + 1);
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