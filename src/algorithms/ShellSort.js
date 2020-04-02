export default class ShellSort {
    static shellSort(array, sortHistory, selectedHistory) {
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);

        for (let h = array.length; h > 0; h = parseInt(h / 2, 10)) {
            for (let i = h; i < array.length; i++) {
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
        while (array.length) {
            array.pop();
        }
    }
}