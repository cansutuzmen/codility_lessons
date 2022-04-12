//Codility - CountSemiprimes 100% success
//Sieve of Eratosthenes
/*
https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
*/

function solution(N, P, Q) {
    let primeFactors = new Array(N + 1).fill(0);
    let semiPrimes = new Array(N + 1).fill(0);
    let result = [];
    let count = 0;

    //find prime factors
    for(let i = 2; i * i <= N; i++){
        if(primeFactors[i] === 0){
            for(let j = i * i; j <= N; j+=i){
                if(primeFactors[j] === 0){
                    primeFactors[j] = i;
                }
            }
        }
    }

    //count semiprimes
    for(let i = 1; i <= N; i++){
        if(primeFactors[i] !== 0){
            const factor = i / primeFactors[i];
            //if factor has no prime factor
            if(primeFactors[factor] === 0){
                count++;
            }   
        }
        semiPrimes[i] = count;
    }


    for(let i = 0; i < P.length; i++){
        //the difference is the number of semiprimes
        result.push(semiPrimes[Q[i]] - semiPrimes[P[i] - 1]) 
    }
    
    return result;
}


