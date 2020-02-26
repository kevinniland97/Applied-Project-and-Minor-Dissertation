export default class BogoSort {
    static bogoSort(array, sortHistory, highlightHistory) {
        this.clearArray(sortHistory);
        this.clearArray(highlightHistory);

        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                return false;
            }
        }

        return true;
    }

    static shuffle(array) {
        var count = array.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = array[count];
            array[count] = array[index];
            array[index] = temp;
        }

        return array;
    }
}