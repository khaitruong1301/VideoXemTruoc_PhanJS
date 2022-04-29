

// while (true) {
//     console.log('hello cybersoft');
//     //Xử lý dừng 
// }
/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy



*/

document.getElementById('btnInTheDiv').onclick = function () {

    //input: number
    var input = Number(document.getElementById('iSo').value);
    //output: string
    var output = '';
    //Xử lý
    //b1
    var dem = 1;
    //b2
    while (dem <= 10)// Còn đúng thì còn làm
    {
        //b3
        var div = '<div class="alert alert-success mt-2">hello cybersoft</div>';
        // output = output + div;
        output += div;
        //b4
        dem++;
    }

    document.getElementById('ketQua1').innerHTML = output;

}

/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/

document.getElementById('btnTinhGiaiThua').onclick = function () {
    //input: number
    var nhapSo = Number(document.getElementById('nhapSo').value);
    //output: giaiThua = 1;
    var giaiThua = 1;
    //B1: Xác định yếu tố thay đổi khởi tạo nó
    var giaTri = 1;
    //B2: Thiết lập điều kiện lặp
    while (giaTri <= nhapSo) { //Điều kiện lặp
        //giaiThua = giaiThua * giaTri;
        //Bước 3: Xử lý
        giaiThua *= giaTri;
        //Bước 4: Thay đổi điều kiện lặp
        giaTri++;
    }
    document.getElementById('ketQua2').innerHTML = giaiThua;
}


/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/

document.getElementById('btnTinhTong').onclick = function () {

    //input: number
    var number = Number(document.getElementById('nhapSo_3').value);
    //output:number
    var tong = 0;
    //Xử lý:
    //B1:
    var soHang = 1;
    //B2:
    while (soHang <= number) {// 1 2 3 ... 7
        //B3:
        tong += soHang;
        //B4:
        soHang++;
    }
    document.getElementById('ketQua3').innerHTML = tong;
}

/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/

document.getElementById('btnTinhTongSoChan').onclick = function () {
    //input: number
    var number = Number(document.getElementById('nhapSo_4').value);
    //output:number
    var tong = 0;
    //Xử lý:
    var soHang = 1;
    while (soHang <= number) {
        if (soHang % 2 === 0) {
            tong += soHang;
        }
        soHang++;
    }
    document.getElementById('ketQua4').innerHTML = tong;
}

/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/


document.getElementById('btnKiemTraSo').onclick = function () {
    //input: number
    var number = Number(document.getElementById('nhapSo_5').value);
    //ouput: string
    var ketQua = '';
    //b1: khai báo giá trị thay đổi
    var soHang = 1;
    var dem = 0;
    //b2: xác định điều kiện lặp
    while (soHang <= number) {
        //Bước 3: Xử lý
        if (number % soHang === 0) {
            //Nếu chia hết
            dem++;

        }
        //Bước 4: thay đổi giá trị bước nhảy
        soHang++;
    }
    //Kiểm tra biến đếm
    if (dem == 2) {
        ketQua = number + ' là số nguyên tố!';
    } else {
        ketQua = number + ' không phải là số nguyên tố';
    }
    document.getElementById('ketQua5').innerHTML = ketQua;

}


/*
    Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/


document.getElementById('btnKiemTraSo').onclick = function () {
    //input: number
    var number = Number(document.getElementById('nhapSo_5').value);
    //ouput: string
    var ketQua = '';
    //Đặt 1 biến mặc định (biến cờ hiệu)
    var checkSNT = true;
    //B1: Yếu tố thay đổi
    var soHang = 2;
    //b2: xác định điều kiện lặp
    while (soHang <= Math.sqrt (number)) {
        //Nếu chia hết cho thêm 1 số nào khác nữa => (ước >2)
        //Bước 3: 
        if (number % soHang === 0) {
            //Nếu chia hết
            checkSNT = false;
            break;

        }
        //Bước 4: thay đổi giá trị bước nhảy
        soHang++;
    }
    //Kiểm tra biến đếm
    if (checkSNT) {
        ketQua = number + ' là số nguyên tố!';
    } else {
        ketQua = number + ' không phải là số nguyên tố!';
    }
    document.getElementById('ketQua5').innerHTML = ketQua;

}