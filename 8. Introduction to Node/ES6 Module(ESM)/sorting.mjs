// ESM exporting syntax

// named export

export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currElement) {
            arr[j + 1] = arr[j]; // shifting the element to the right index
            j--;
        }
        arr[j + 1] = currElement;
    }
}

// default export

export default function bubbleSort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent element
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest element
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped == false) break;
    }
}