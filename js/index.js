

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
    while (soHang <= Math.sqrt(number)) {
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
/*

  Ví dụ 6: Viết chương trình cho phép người dùng nhập vào 1 số in ra số ngôi sao tương ứng
    Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/

document.getElementById('btnInSao').onclick = function () {
    //input: number ?
    var number = Number(document.getElementById('nhapSo_6').value);
    //output: '*****' => string
    var ketQua = '';

    ///Cách 1: Giải theo while
    // //Bước 1: Xác định giá trị thay đổi
    // var soSao = 0;
    // //Bước 2: Xác định điều kiện lặp
    // while(soSao <= number) {
    //     //B3: Xử lý:
    //     ketQua = ketQua + ' * ';
    //     //B4: Thay đổi giá trị bước nhảy
    //     soSao++; 
    // }

    //for(khai báo giá trị bắt đầu; điều kiện lặp; thực hiện bước nhảy);

    for (var soSao = 0; soSao <= number; soSao++) {
        ketQua = ketQua + '<i class="fa fa-star text-info"></i>';
    }


    document.getElementById('ketQua6').innerHTML = ketQua;

}


/*
Ví dụ 7: Viết chương trình cho phép người dùng nhập vào số hàng và số cột in ra các ngôi sao như sao
Bước 1: Xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    Bước 2: Thiết lặp điều kiện lặp
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị của biến bước nhảy
*/

document.getElementById('btnInSoSao').onclick = function () {
    //input: soHang(number),soCot(number)
    var soHang = Number(document.getElementById('soHang').value); //3
    var soCot = Number(document.getElementById('soCot').value); //5
    //output: string
    var ketQua = '';

    for (var i = 1; i <= soHang; i++) {
        //Code để sinh ra 1 hàng
        var htmlHangSao = in1HangSao(soCot);
        ketQua += htmlHangSao + '<br />';
    }
    document.getElementById('ketQua7').innerHTML = ketQua;
    // console.log('số sao',ketQua);
}




/*
    Ví dụ 8: Cho phép người dùng nhập vào 1 số. In ra các số nguyên tố nhỏ hơn hoặc bằng số người dùng nhập
 */

document.getElementById('btnInSo_8').onclick = function () {
    //input: number từ người dùng
    var number = Number(document.getElementById('nhapSo_8').value); //29

    //output: '2, 3, 5, 7, 11, 13, 17, 23, 29'
    var ketQua = '';

    for (var iSo = 2; iSo <= number; iSo++) {
        //Chạy qua từ 2-> n kiểm tra từng số có phải là số nguyên tố hay dựa vào hàm đã xây dựng
        var checkSNT = kiemTraSoNguyenTo(iSo);
        //Nếu true => iSo lúc đó sẽ là số nguyên
        if(checkSNT) {
            ketQua += iSo + ' ';
        }
    }
    document.getElementById('ketQua8').innerHTML = ketQua;

}




