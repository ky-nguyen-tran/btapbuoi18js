let mang = [];
function nhapSoNguyen(){
let nhapSo = document.getElementById("nhapSo");
let soDaNhap = Number(nhapSo.value);
mang.push(soDaNhap)
document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";

}
 function soNhoNhat(){
    let min = mang[0];
    for(let i = 1; i < mang.length ; i++){
        if(mang[i] < min){
            min = mang[i]
        }
    }
    document.getElementById("inKetQua").innerHTML = min
 }

