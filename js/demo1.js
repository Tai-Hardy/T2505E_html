// ** bien
// k quan tam kieu du lieu
//null number string boolean array function 
var x=10;
x = "T2505E";

// **dieu kien
var a = 10;
var b = "20";
var c = 'abcdef'
//n+n=n
//n+s=s
//s+s=s
console.log(a + a); //20
console.log(a + b); //1020
console.log(b + a); //2010
console.log(b + c); //20abcdef
var t = false;

// ** vong lap
if(a>5){
    console.log("A");
}else if(a>10){
    console.log("B");
}elsei if(a>15){
    console.log("C");
}else{
    console.log("D");
}

for(var i=0; i<10; i++){
    console.log("i = " + i);
}

// ** mang array
var arr = [];//day la 1 mang array mang rong
// arr[0] = 9;
// arr[5] = 12;
// arr[2] = 182;
arr.push(9);//0
arr.push(12);//1
arr.push(182);//2
// arr.push("hello");
// arr.push(true);
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//duyet mang--map
arr.map(e=>{
    console.log(e);
});
arr.map((e,i)=>{
    console.log(e);
})

// sap xep mang
arr.sort();
//tim kiem trong mang
arr.includes(9); //truse /false
if(arr.indexOf(9){

})
//
var pi ="3.14159";
pi = parseFloat(pi);//chuyen thanh so
pi = parseInt(pi);

// ** ham
function tinh_tong(a,b){
    var c = a + b;
    return c;
}
tinh_tong(5,4)
const phep_tru = function(a,b){
    var c = a - b;
    return c;
}
phep_tru(5,2);
const phep_nhan = (a,b) =>{
    var c = a * b;
    console.log(c);
    // return c;
}
phep_nhan(7,3);

//mot so ham hay dung 
alert("ban chua du tuoi di tu");//return void
confirm("ban da duoc phep di tu");//return boolean
if(confirm("hoan nghenh vao khung sat")){
    var s = prompt(" bao cao ten"); //return string
    var t = prompt(" bao cao tuoi"); // string
    alert("hoan hi " + s);
}else{
    alert("cho doi them de vao");
}
var r = Math.random(); //tra ve so thuc ngau nhien tu 0->1 vd:0,12647
r = r *100;//12.647
r = parseInt(r);//12
//lucky number
//tao 1 so ngau nhien tu 1->99(1<=r<=99)
//cho nguoi dung nhap vao so doan
//va nhap so dau tu
//doi chieu thong bao ket qua trung hay xit
