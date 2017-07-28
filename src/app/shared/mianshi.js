
for (let i = 1; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
    console.log("fuck" + i);
}







var arr = [2, 3, 4, 5, 6];

for(var i = 0; i < arr.length; i++ ){
    arr.forEach(a=>{
        return a + i;
    });
}


function paraent(){
    var x = 1;
    function child(){
        x++;
        console.log(x);
    }
    return child;
}

var funcBack = paraent();
funcBack();
funcBack();



function sperate(str) {
    return str.split('').join('dong');
}

sperate('qingke');

String.prototype.sperate = function () {
    this.split().join(' ');
}





function myFunc() {
    a = 1;
    this.getData = function () {
        console.log(this.a);
    }
}

var myObj = new myFunc();
myObj.getData();

var obj = {
    a: 1,
    getData() {
        console.log(this.a);
    }
};


obj.getData();

var obj1 = new obj();
obj.getData();


