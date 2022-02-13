//Codility - Flags 100% Score
//Prime and composite numbers
/*
https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
*/

function solution(A) {
   let peaks = [];

    for(let i = 1; i< A.length; i++){
       if(A[i] > A[i-1] && A[i] > A[i+1]){
            peaks.push(i) 
       }
    }

    if(peaks.length < 2){
       return peaks.length;
    }

    const possibleMaxFlagNumber = Math.floor(Math.sqrt(peaks[peaks.length-1] - peaks[0]));

    for(let i = possibleMaxFlagNumber + 1; i > 0; i--){
        let totalDistance = 0;
        let numberOfFlags = 1;

        for(let j = 0; j < peaks.length - 1; j++){
            const difference = Math.abs(peaks[j + 1] - peaks[j]);
            if(difference + totalDist >= i){
                numberOfFlags++;
                totalDistance = 0;
            }else{
                totalDistance+= difference;
            }

            if(numberOfFlags === i){
                return i;
            }
        } 
    }
}



