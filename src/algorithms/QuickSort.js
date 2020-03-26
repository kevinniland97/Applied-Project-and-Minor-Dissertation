export default class QuickSort {
    /**
     * 
     * @param {*} array 
     * @param {*} sortHistory 
     * @param {*} highlightHistory 
     */
    static quickSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        this.quickSortIterative(array, 0, array.length - 1, sortHistory, highlightHistory);
    }

    /**
     * 
     * @param {*} array 
     * @param {*} l 
     * @param {*} h 
     * @param {*} sortHistory 
     * @param {*} highlightHistory 
     */
    static quickSortIterative(array, l, h, sortHistory, highlightHistory) {
        let stack = [];

        let top = -1;

        stack[++top] = l;
        stack[++top] = h;

        while (top >= 0) {
            h = stack[top--];
            l = stack[top--];

            let p = this.partition(array, l, h, sortHistory, highlightHistory);

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
     * @param {*} array 
     * @param {*} l 
     * @param {*} h 
     * @param {*} sortHistory 
     * @param {*} highlightHistory 
     */
    static partition(array, l, h, sortHistory, highlightHistory) {
        let x = array[h];
        let i = (l - 1);

        for (let j = l; j <= h - 1; j++) {
            sortHistory.push(array.slice());
            highlightHistory.push([j, l, h]);

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