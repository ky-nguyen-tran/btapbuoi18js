let mang = [];
function cacSoNhap(){
let nhapSo = document.getElementById("nhapSo");
let nhapCacSo = nhapSo.value * 1;
mang.push(nhapCacSo);
document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";
}
 function soSanh(){
    let demSoDuong = 0;
    let demSoAm = 0;
    for(let i = 0; i <mang.length; i++){
        if(mang[i]>=0){
            demSoDuong++
        }
        else{
            demSoAm++
        }
    }
    if(demSoDuong>demSoAm){
        document.getElementById("inKetQua").innerHTML = "Số lượng số dương nhiều hơn"
    }
    else if(demSoDuong<demSoAm){
        document.getElementById("inKetQua").innerHTML = "Số lượng số âm nhiều hơn"
    }
    else{
        document.getElementById("inKetQua").innerHTML = "Số lượng số âm bằng số lượng số dương"
    }
 }