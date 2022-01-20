class SortAlgorithms {

    /**
     * realisation of merge sorting algorithm
     * @param {Array} array 
     * @returns Array
     */
    static mergeSort(array) {
        if (array.length > 1) {
            return this.#merge(
                this.mergeSort(array.slice(0, Math.floor(array.length/2))),
                this.mergeSort(array.slice(Math.floor(array.length/2)))
            );
        }
        else return array;
    }

    /**
     * merge two ordered arrays in one
     * @param {Array} arr1 
     * @param {Array} arr2 
     * @returns Array
     */
    static #merge(arr1, arr2) {
        let result = [];
        while (arr1.length || arr2.length) {
            if (!arr1.length) {
                result.push(arr2.shift());
                continue;
            }
            if (!arr2.length) {
                result.push(arr1.shift());
                continue;
            }
            result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
        }
        return result;
    }
}

