let mang = [];
function cacSoNhap(){
let nhapSo = document.getElementById("nhapSo");
let nhapCacSo = nhapSo.value * 1;
mang.push(nhapCacSo);
document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";
}


function demSoNguyen(){
    let dem = 0;
    for(let i = 0; i<mang.length; i++){
        if(Number.isInteger(mang[i])){
            dem++
        }
    }
    document.getElementById("inKetQua").innerHTML = dem;
    return dem
}






