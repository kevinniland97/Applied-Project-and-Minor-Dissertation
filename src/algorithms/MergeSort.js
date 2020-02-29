export default class MergeSort {
    static mergeSort(array, sortHistory, highlightHistory) {
        let step = 1;

        while (step < array.length) {
            let left = 0;

            while (left + step < array.length) {
                this.mergeBottomUp(array, left, step, sortHistory, highlightHistory);

                left += step * 2;
            }

            step *= 2;
        }
    }

    static mergeBottomUp(array, left, step, sortHistory, highlightHistory) {
        let right = left + step;
        let end = Math.min(left + step * 2 - 1, array.length - 1);
        let movingLeft = left;
        let mmovingRight = right;
        let temp = [];

        for (let i = left; i <= end; i++) {
            if ((array[movingLeft] <= array[mmovingRight] || mmovingRight > end) && movingLeft < right) {
                temp[i] = array[movingLeft];

                movingLeft++;
            } else {
                temp[i] = array[mmovingRight];

                mmovingRight++;
            }
        }

        for (let j = left; j <= end; j++) {
            array[j] = temp[j];
        }

        sortHistory.push(array.slice());
        highlightHistory.push([-1]);
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