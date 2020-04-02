export default class HeapSort {
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
    
    static swap(array, index_A, index_B) {
        var temp = array[index_A];
    
        array[index_A] = array[index_B];
        array[index_B] = temp;
    }
    
    static heapSort(array, sortHistory, selectedHistory) {
        this.clearArray(sortHistory);
        this.clearArray(selectedHistory);
    
        for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
            sortHistory.push(array.slice());
            selectedHistory.push([array]);

            this.heap_root(array, i);
          }
    
        for (let i = array.length - 1; i > 0; i--) {
            sortHistory.push(array.slice());
            selectedHistory.push([array]);

            this.swap(array, 0, i);
            array.length--;
          
            this.heap_root(array, 0);
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