function searchTargetI (N, arr, X){
    let start = 0
     let end = N - 1
     let mid
    let ans = -1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > X){
            end = mid - 1;
        }
        else if (arr[mid] < X){
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid-1;
        }
    }
    return ans;
}

// this function ( search ) returns the leftmost found index of X inside the array N
