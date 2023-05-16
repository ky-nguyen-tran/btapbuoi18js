let mang = [];
function nhapSoNguyen(){
    let nhapSo = document.getElementById("nhapSo");
    let soNguyen = nhapSo.value * 1;
    mang.push(soNguyen);
    document.getElementById("cacSoNhap").innerHTML = mang;
    nhapSo.value = ""
}

function kiemTraSNT(number){
    if (number <= 1) {
        return false;
      }
      
      // Kiểm tra các số từ 2 đến căn bậc hai của number
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false; // Số có ước số khác ngoài 1 và chính nó
        }
      }
      
      return true; // Số là số nguyên tố
}
function timSNT(){
    for( let i = 0; i< mang.length; i++){
        if(kiemTraSNT(mang[i])){
            console.log(mang[i])
            document.getElementById("inKetQua").innerHTML = mang[i]
            return mang[i]
        }
        
    }
    document.getElementById("inKetQua").innerHTML = -1
    return -1
    
}


