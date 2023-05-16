
let mang = [];
function cacSoNhap(){
let nhapSo = document.getElementById("nhapSo");
let nhapCacSo = nhapSo.value * 1;
mang.push(nhapCacSo);
document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";
}


function timSoChan(){
for(let i = mang.length - 1; i >= 0; i--){
    if(mang[i]%2 === 0){
        document.getElementById("inKetQua").innerHTML = mang[i];
        return mang[i]


    }
   
}
document.getElementById("inKetQua").innerHTML = -1
return -1
}



