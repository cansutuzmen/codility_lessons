//Codility - Max Slice Sum 100% Success
/*
https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
*/

function solution(A) {
    if(A.length === 1){
        return A[0];
    }

    let min = Number.MIN_SAFE_INTEGER;
    let maxSlice = Number.MIN_SAFE_INTEGER;
    let maxSum = 0;

    for(let i = 0; i < A.length; i++){
        maxSum = Math.max(A[i], maxSum + A[i], min);
        maxSlice = Math.max(maxSum, maxSlice);

    }

    return maxSlice;
}


