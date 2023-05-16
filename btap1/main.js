let daySo = [];
let tong = 0;
function themSoDaNhap(){
    let nhapSo = document.getElementById("nhapSo");
    const soDaNhap = Number(nhapSo.value)
    if (soDaNhap >= 0){
        daySo.push(soDaNhap);

    }
    else{
        nhapSo.value = "";
        return;
    }
    
    nhapSo.value = "";
    let mangMoi = [...daySo]
    let cacSoNhap = document.getElementById("cacSoNhap");
    cacSoNhap.innerHTML = mangMoi.join(",")
    
}
function inKetQua(){

    for(let i = 0; i<daySo.length; i++){
        tong = tong + daySo[i]
    }

    const inKetQua = document.getElementById("inKetQua");
    inKetQua.innerHTML = tong;
    daySo = []
}
