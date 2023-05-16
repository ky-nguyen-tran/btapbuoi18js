let mang = []; 
function nhapSoNguyen(){
    let nhapSo = document.getElementById("nhapSo");
    let nhapCacSo = nhapSo.value * 1;
    mang.push(nhapCacSo);
    document.getElementById("cacSoNhap").innerHTML = mang;
    nhapSo.value = "";
}


function sapXep(){
    mang.sort(function(a,b){
        return a-b;

    }
    )
    document.getElementById("inKetQua").innerHTML = mang
}

