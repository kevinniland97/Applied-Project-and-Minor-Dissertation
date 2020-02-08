export default class SelectionSort {
    static selectionSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        let leftColumn = -1;

        for (let i = 0; i < array.length; i++) {
            let minimum = i;
            leftColumn = min;

            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minimum]) {
                    minimum = j;
                }

                sortHistory.push(array.slice());
                highlightHistory.push([j, leftColumn, minimum]);
            }

            if (i !== minimum) {
                this.swap(array, i, minimum);
            }
        }

        sortHistory.push(array.slice());
        highlightHistory.push([-1, array.length - 1]);
    }
}