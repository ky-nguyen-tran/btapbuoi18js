let mang = [];
let dem = 0;
function nhapCacSo (){
let nhapSo = document.getElementById("nhapSo");
let soDaNhap = Number(nhapSo.value);
mang.push(soDaNhap);
nhapSo.value = "";
document.getElementById("cacSoNhap").innerHTML = mang;
}



function tinh() {
for(let i = 0; i<mang.length ; i++){
    if(mang[i]>=0){
        dem = dem + 1;
    }
}
document.getElementById("inKetQua").innerHTML = dem
}