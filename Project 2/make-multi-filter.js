'use strict';

function MakeMultiFilter(originalArray) {
    let currentArray = [...originalArray];

    function arrayFilterer(filterCriteria, callback) {
        if (filterCriteria === undefined) {
            return currentArray;
        }

        if (typeof filterCriteria !== 'function') {
            return arrayFilterer;
        }

        currentArray = currentArray.filter(filterCriteria);

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

