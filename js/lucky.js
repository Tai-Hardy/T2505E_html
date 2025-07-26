var r = (Math.random())*100; 
r = parseInt(r);
console.log(r); 

 var s = prompt(" nhap so du doan"); 
var t = prompt(" nhap so tien chs"); 


if(s == r){
    alert("ban da trung thuong :" + t*70);
} else{
    alert("ban da xit");
}