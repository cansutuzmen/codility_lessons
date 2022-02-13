//Codility - EquiLeader Problem 100% Success 
/*
https://app.codility.com/programmers/lessons/8-leader/equi_leader/
*/

function solution(A) {
    if(A.length === 1){
        return 0;
    }

    let map = {};
    let max = -1;
    let leader = null;

    for(let i = 0; i < A.length; i++){
        if(A[i] in map){
            map[A[i]]++;
            if(map[A[i]] > Math.floor(A.length / 2)){
                max = map[A[i]];
                leader = A[i];
            }
        }else{
            map[A[i]] = 1;
        }
    }

    if(max === -1){
        return 0;
    }

    let leaderCount = 0;
    let equiLeader = 0;

    for(let i = 0; i < A.length -1; i++){
        if((leaderCount > Math.floor(i / 2)) && (max - leaderCount > Math.floor((A.length - i) / 2))){
            equiLeader++;
        }

        if(A[i] === leader){
            leaderCount++;
        }
    }

    return equiLeader;
}





