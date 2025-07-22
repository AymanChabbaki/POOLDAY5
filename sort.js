function bubbleSort(arr) {
    let swapped;
    do{
        swapped=false;
        for (let i=0; i<arr.length-1;i++){
            if (arr[i]>arr[i+1]){
                let tmp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=tmp;
                swapped=true;
            }
        }
    }while(swapped);
    return arr;
}
console.log(bubbleSort([5/*j*/, 3/*i*/, 8, 4, 2]));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key;
    }
    return arr;


}
console.log(insertionSort([5/*j*/, 3/*i*/, 8, 4, 2]));

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([5/*j*/, 3/*i*/, 8, 4, 2]));