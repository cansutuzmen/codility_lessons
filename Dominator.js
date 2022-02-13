//Codility - dominator 100% Success
/*
https://app.codility.com/programmers/lessons/8-leader/dominator/
*/

function solution(A) {
    if(A.length > 100000){
        return -1;
    }
    
    const threshold = Math.floor(A.length / 2);
    let map = {};

    for(let i = 0; i < A.length; i++){
        if(A[i] in map){
            map[A[i]]++;
        }else{
            map[A[i]] = 1;
        }

        if(map[A[i]] > threshold){
            return i;
        }
    }

    return -1;
}


