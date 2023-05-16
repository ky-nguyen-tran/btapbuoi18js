let mang = [];
function nhapSoNguyen(){
    let nhapSo = document.getElementById("nhapSo");
    let hienSo = Number(nhapSo.value);
    mang.push(hienSo);
    document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";
}


function soNhoNhat(){
    let min = Infinity;
    for(let i = 0; i<mang.length ; i++){
        if(mang[i] > 0 && mang[i] < min){
            min = mang[i]
        }

    }
    if(min === Infinity){
        document.getElementById("inKetQua").innerHTML = "không có số dương nào trong mảng";
        
    }
    else{
        document.getElementById("inKetQua").innerHTML = min;
    }
  
    
}
 