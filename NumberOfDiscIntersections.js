//Codility - NumberOfDiscIntersections 100% Success
//Sorting
/*
https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
*/

function solution(A) {
    //check input
    if(!A.length){
        return 0;
    }
    
    let count = 0;
    let startPoints = [];
    let endPoints = [];

    for(let i = 0; i < A.length; i++){
        startPoints.push(i - A[i]);
        endPoints.push(i + A[i]);
    }

    //sort
    startPoints.sort((a, b) => (a - b));
    endPoints.sort((a, b) => (a - b));

    for(let i = 0; i < A.length; i++){
        for(let j = i + 1; j < A.length; j++){
            if(startPoints[j] > endPoints[i]){
                break;
            }

            count++;
            //check count
            if(count > 10000000){
                return -1;
            }    
        } 
    }

    return count;
}

