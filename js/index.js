var a = 5;
var b = 10;
var c = 5;
console.log('a = ', a, 'b = ', b, 'c = ', c);
console.log('Lớn hơn: ', a > b);
console.log('Bé hơn: ', a < b);
console.log('Bằng: ', a == b);
console.log('Khác : ', a != b);
console.log('Lớn hơn hoặc bằng: ', a >= b);
console.log('Bé hơn hoặc bằng: ', a <= b);


console.log('So sánh == a và c', a >= c);


var d = 7; var e = '7'; // typeof d: number, type of e : string

console.log('d == e', d == e);
console.log('d === e', d === e);

console.log('d !== e', d !== e);
console.log('d != e', d != e);


//--------------- Toán tử logic ---------------------- 
var dk1 = false;
var dk2 = true;
var dk3 = false;

console.log('dk1 = ', dk1);
console.log('dk2 = ', dk2);

console.log('dk1 && dk2', dk1 && dk2 && dk3)
console.log('dk1 || dk2', dk1 || dk2 || dk3);

console.log('!dk1', !!!!dk1);

// console.log('dk1 && dk2', dk1 && dk2 && dk3)
// console.log('dk1 && dk2', dk1 && dk2 && dk3)

/*
    1. Cấu trúc rẻ nhánh trong lập trình 
    ----- Cấu trúc if ------
*/

document.getElementById('btnTinhTriTuyetDoi').onclick = function () {
    //input: số : number
    var iSo = document.getElementById('iSo_1').value;

    //output: số: number
    var ketQua = 0;
    //progress: 

    ketQua = iSo; //-5
    if (ketQua < 0) { //true
        ketQua = -iSo; //ketQua = --5
    }

    document.getElementById('ketQuaViDu1').innerHTML = ketQua;

}

/*

    Cấu trúc rẻ nhánh trong lập trình
    ------- if else -------
    + Đúng thì xử lý trường hợp 1
    + Sai thì xử lý trường hợp 2

*/

document.getElementById('btnKiemTraSo').onclick = function () {

    //input: number
    var iSo = document.getElementById('iSo_2').value;
    //output: string
    var ketQua = '';
    //progress
    if (iSo % 2 == 0) { //chia hết cho 2
        ketQua = 'Số chẵn';
    } else {
        ketQua = 'Số lẻ';
    }
    //Hiển thị output ra giao diện
    document.getElementById('ketQuaViDu2').innerHTML = ketQua;

}
/*
    Bài tập 1: Nhập vào điểm trung bình. Nếu lớn hơn hoặc = 5 thì in ra là đậu ngược lại bé hơn 5 in ra rớt
*/

document.getElementById('btnXepLoai').onclick = function () {

    //input: number
    var diemTB = document.getElementById('diemTrungBinh').value;

    //output: string
    var ketQua = '';

    //progress
    if (Number(diemTB) >= 5) {
        ketQua = 'Đậu';
    } else {
        ketQua = 'Rớt';
    }
    //In kết quả lên giao diện
    document.getElementById('ketQuaBai1').innerHTML = 'Kết quả: ' + ketQua;
}


/*
   Bài 2: Cho người dùng nhập vào 2 số. Tìm số lớn nhất và in ra kết quả
*/

document.getElementById('btnTimSoLonNhat').onclick = function () {
    //input: number? string? boolean ?
    var soThuNhat = Number(document.getElementById('soThuNhat').value);
    var soThuHai = Number(document.getElementById('soThuHai').value);

    //Xử lý: 
    var max = soThuNhat; //'5' 

    if (max < soThuHai) {
        max = soThuHai;
    }

    //output: String? number ?...
    var ketQua = max;
    document.getElementById('ketQuaBai2').innerHTML = 'Số lớn nhất là: ' + ketQua;

}

/*
    Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ làm và tiền công 1 giờ. Yêu cầu: Tính tiền công dựa trên số giờ làm theo công thức sau:

*/

document.getElementById('btnTinhTien').onclick = function () {
    // alert(123);
    //input: number ? string? 
    var soGioLamTrenTuan = Number(document.getElementById('soGioLamTrenTuan').value);
    var tienCongTrenGio = Number(document.getElementById('tienCongTrenGio').value);
    //output: number ?????
    var tienLuong = 0;

    //B1: Xét số giờ nhập vào có lớn hơn 40 hay không
    if (soGioLamTrenTuan > 40) {
        //Số giờ sau ?
        var soGioSau = soGioLamTrenTuan - 40; //90-40 
        var tienTangCa = soGioSau * (tienCongTrenGio * 1.5);
        tienLuong = (tienCongTrenGio * 40) + tienTangCa;
    } else {
        //Ngược lại nhỏ hơn 40 giờ 
        tienLuong = soGioLamTrenTuan * tienCongTrenGio;
    }

    //Hiển thị tiền lương
    document.getElementById('ketQuaBai3').innerHTML = 'Tiền Lương: ' + tienLuong;

}


/*
    Bài 4: Viết chương trình cho phép người dùng nhập vào điểm toán lý hoá. Yêu cầu in ra điểm trung bình và xếp loại
*/ //option + z, alt + z

// document.getElementById('btnTinhDTB').addEventListener('click',function () {
//     alert(123)
// })

document.getElementById('btnTinhDTB').onclick = function () {
    //input: diemToan, diemLy, diemHoa
    var diemToan = document.getElementById('diemToan').value;
    var diemLy = document.getElementById('diemLy').value;
    var diemHoa = document.getElementById('diemHoa').value;
    console.log(diemToan, diemLy, diemHoa);
    //output: string
    var ketQua = '';
    //progress: 
    //B1: Tính điểm trung bình
    var diemTrungBinh = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
    // console.log('diemTrungBinh',diemTrungBinh);
    //B2: Tính xếp loại
    var xepLoai = '';
    if (diemTrungBinh > 0 && diemTrungBinh < 5) { // true && true
        xepLoai = 'Không đạt';
    } else if (diemTrungBinh >= 5 && diemTrungBinh < 8) {
        xepLoai = 'Đạt';
    } else if (diemTrungBinh >= 8 && diemTrungBinh <= 10) {
        xepLoai = 'Giỏi';
    } else {
        xepLoai = 'Dữ liệu không hợp lệ !'
    }

    //In kết quả ra màn hình
    ketQua = 'Điểm TB: ' + diemTrungBinh + ' - Xếp loại: ' + xepLoai;

    document.getElementById('ketQuaBai4').innerHTML = ketQua;
}


/*
    Biểu thức ba ngôi
    if(dk === true) {
        xu_ly = gia_tri; (1)
    }else { 
        xu_ly = gia_tri; (2);
    }

    dk === true ? xu_ly1 : xu_ly2
*/


// var number = 5;
// var output = '';
// if (number % 2 == 0) {
//     output = 'Số chẵn';
// }else {
//     output = 'Số lẻ';
// }

// console.log('output',output);

// var number = 4;
// var output = '';

// output = number % 2 === 0 ? 'Số chẵn' : 'Số lẻ';

// console.log('output',output);


/*
    Bài 5: Viết chương trình đọc các số từ 1 - 4
*/

document.getElementById('btnDocSo').onclick = function(){
    //input
    var soDem = Number(document.getElementById('soDem').value);
    //output: string
    var ketQua = '';
    //Cách 1: Dùng if else if 
    // if(soDem === 1) {
    //     ketQua = 'Số một';
    // }else if (soDem === 2) {
    //     ketQua = 'Số hai';
    // } else if(soDem === 3) {
    //     ketQua = 'Số ba';
    // }else if (soDem === 4) {
    //     ketQua ='Số bốn';
    // } else {
    //     ketQua ='Nhập số từ 1 đến 4 thôi nhé !';
    // }
    //Cách 2 :  Dùng switch case 

    switch(soDem) {
        case 1: {
            ketQua = 'Số một';
        };break;
        case 2: {
            ketQua = 'Số hai';
        };break;
        case 3: {
            ketQua = 'Số ba';
        };break;
        case 4 : {
            ketQua = 'Số bốn';
        };break;
        default : {
            ketQua = 'Nhập số từ 1 đến 4 thôi nhé !';
        }
    }

    document.getElementById('ketQuaBai5').innerHTML = ketQua;


}