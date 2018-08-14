//baby running up stairs problem 

// 1 to 3 steps left
// passing down saved cache 
// add posibilities to previous steps
//111 12 21 3 
//1111 121 112 13 22 211 31  (7)
//11111 1112 122 1211 113 131 2111 221 212 23 311 32 1121 (13)
function tripleStep(n, cache) {
    if (!cache){cache = {0:0, 1:1, 2:2, 3:4};}
    if (n < 0){ return 0;}
    if (n < 4) { return cache[n];}
    cache[n] = tripleStep(n - 1, cache) + tripleStep(n -2, cache) + tripleStep(n - 3, cache);
    return cache[n];
}

//unique string no additional data structures 

function myUnique(string) {
    for (let i = 0; i < string.length; i++){
        if (string.slice(0,i).includes(string[i]) || string.slice(i + 1, -1).includes(string[i])){return false;}
    }
    return true;
}