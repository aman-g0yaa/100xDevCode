function sum(a,b, fun){
    let ans = a+b;
    fun(ans);
}

function display(a){
    console.log("Yo :" + a);
}

function display2(b){
    console.log("honey :" + b);
}

sum(1,2,display);
console.log("hello");