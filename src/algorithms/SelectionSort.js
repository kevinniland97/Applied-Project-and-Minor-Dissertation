export default class SelectionSort {
    /**
     * Performs the selection sort algorithm
     * 
     * Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based 
     * algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted 
     * part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The 
     * smallest element is selected from the unsorted array and swapped with the leftmost element, and that element 
     * becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to 
     * the right. This algorithm is not suitable for large data sets as its average and worst case complexities 
     * are of Ο(n2), where n is the number of items.
     * 
     * @param {*} array - Array to be sorted
     * @param {*} sortedElements - Elements that have been sorted
     * @param {*} selectedElements - Elements that have been previously selected for sorting
     */
    static selectionSort(array, sortedElements, selectedElements) {
        // Clear sortedElements and selectedElements
        this.clearArray(sortedElements);
        this.clearArray(selectedElements);

        let leftCol = -1;
    
        /**
         * Iterate through the array
         */
        for (let i = 0; i < array.length; i++) {
            let min = i;
            leftCol = min;

            // Iterate through the array, starting at the index immediately after index i
            for (let j = i + 1; j < array.length; j++) {

                // If array index j is less than the minimum, j is the new minimum
                if (array[j] < array[min]) {
                    min = j;
                }

                /**
                 * The slice() method returns a shallow copy of a portion of an array into a 
                 * new array object selected from begin to end (end not included) where begin and 
                 * end represent the index of items in that array. The original array will not be 
                 * modified. Push this portion into sortedElements
                 * 
                 * Push j, leftCol, and min into selecedHistory
                 */
                sortedElements.push(array.slice());
                selectedElements.push([j, leftCol, min]);
            }

            // If i doesn't equal the minimum, swap i and min
            if (i !== min) {
                this.swap(array, i, min);
            }
        }

        sortedElements.push(array.slice());
        selectedElements.push([-1, array.length - 1]);
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