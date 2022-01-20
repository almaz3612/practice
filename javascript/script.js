document.querySelector('.btn1').onclick = add;
document.querySelector('.btn2').onclick = delclick;

function myclick1(){
    let text1 = document.querySelector('.ina').value;
    console.log(text1);
    document.querySelector(".out").innerHTML = text1;
}

function delclick(){
    document.querySelector('.out').innerHTML = " "
    document.querySelector(".i-1").value = " я же сказал не тыкай сюда!"
}
function add(){
    var na = document.querySelector('.ina').value;
    var au = document.querySelector('.iau').value;
    var ty = document.querySelector('.ity').value;
    var qu = document.querySelector('.iqu').value;
    if (na && au && ty && qu)
    {
        var tr = document.createElement("tr")
    }
}






const b = {
    1: "kot",
    2: "lisa",
    3: "volk",
    four: "love"
}
function a1() {
console.table(b);
}
function a2() {
    console.warn ("я буду сильно скучать по ней в армии");
}
console.group("Test task");
a2();
a1();
console.groupEnd();
//  alert("Катя, я тебя очень сильно люблю!")