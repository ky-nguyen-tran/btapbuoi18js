
let mang = [];

function nhapSoNguyen() {
    let nhapSo = document.getElementById("nhapSo");
    let soDaNhap = nhapSo.value * 1;
mang.push(soDaNhap);
document.getElementById("cacSoNhap").innerHTML = mang;
nhapSo.value = "";
}



function doiViTri(){
    let viTriMot = document.getElementById("viTriMot");
    let viTriHai = document.getElementById("viTriHai");
    let soViTri1 = viTriMot.value * 1;
    let soViTri2 = viTriHai.value * 1;
    [mang[soViTri1],mang[soViTri2]] = [mang[soViTri2],mang[soViTri1]];
    document.getElementById("inKetQua").innerHTML = mang
}
// console.log(mang)