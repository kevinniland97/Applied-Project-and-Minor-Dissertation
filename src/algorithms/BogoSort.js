export default class BogoSort {
    static bogoSort(array) {
        while (!this.isSorted(array)) {
            this.shuffle(array);
        }
    }
   
    static isSorted(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1])
                return false;
        }

        return true;
    }
   
    static shuffle(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);
        
        for (let i = array.length - 1; i > 0; i--) {
            sortHistory.push(array.slice());
            highlightHistory.push([i + 1, i]);

            this.swapKeys(array, i, (Math.random() * (i + 1)));
        }
    }
   
    static swapKeys(array, i, j) {
        let temp;

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /**
     * Clear the array i.e. pop an item off the array
     * 
     * @param {*} array - The array of items
     */
    static clearArray(array) {
        // while (array.length) {
        //     array.pop();
        // }
    }
}