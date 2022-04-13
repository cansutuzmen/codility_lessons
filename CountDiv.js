//Codility - CountDiv 100% Success
//Prefix sums
/*
https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
*/

function solution(A, B, K) {
    //check inputs
    if(A > B){
        return -1;
    }

    if(A === 0 && B === 0){
        return 1;
    }

    if(B < K){
        return  0;
    }

    return Math.floor(B / K) - Math.floor(A / K) + (A % K == 0 ? 1 : 0);
}



