//function that creates the first 100 terms of the Fibonacci's Sequence and the, with the fiboprox(a) function, 
//it tells between which numbers of the sequence the number a is located.


let k = 1;
let j = 1;

let fibonacci = [1 , 1];

for (i= 0 ; i < 100 ; i++) {
    k = k + j;
    j = k - j;
    fibonacci.push(k);
}

function fiboprox(a) {
    for (i = 0 ; i < fibonacci.length ; i++) {
       if (a >= fibonacci[i] && a <= fibonacci[i+1]) {
        console.log("The closest numbers are" +" " + fibonacci[i] +" and "+ fibonacci[i+1]);
        break
       }
       
    }

}

