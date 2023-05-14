const linearSearch = function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return undefined;
}

const binarySearch = function search(arr, x) {
    let li = 0, hi = arr.length - 1;
    while (li <= hi) {
        let mid = li + Math.floor((hi - li) / 2);
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) {
            hi = mid - 1;
        } else {
            li = mid + 1;
        }
    }

    return undefined;
}


// CJS exporting syntax

// We can export objects with key: value pairs using the global module. This object is going to get exposed to the outer world and in any other files
module.exports = {
    // if key and value are same just write same name once
    linearSearch,
    binarySearch
}