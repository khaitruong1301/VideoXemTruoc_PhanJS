
//Cách 1 xử lý DOM dựa trên id giao diện
// document.getElementById('pThongTin').innerHTML = 'Hello cybersoft';
// document.getElementById('sThongTin').innerHTML = 'Hello BootCampXX';

// document.getElementById('aThongTin').innerHTML = 'Chào bạn !';

/*
    Hàm dùng để tái sử dụng logic code lặp lại nhiều lần
*/

function inNoiDung(id, noiDung) {//input: tham số

    document.getElementById(id).innerHTML = noiDung
    document.getElementById(id).style.fontSize = '30px';
    //output
} //=> Khai báo hàm : (Chưa được gọi)

//Gọi hàm
inNoiDung('pThongTin', 'Hello cybersoft');
inNoiDung('sThongTin', 'Hello BCXXX');
inNoiDung('aThongTin', 'Hello cyberlearn');


/*
    Hàm có giá trị trả về function return 
*/



// var soGioLam = 5;
// var tienLuongTrenGio = 100;

// var tienLuong = soGioLam * tienLuongTrenGio;


function tinhLuong(soGioLam, tienLuongTrenGio) { //5 100

    //Xử lý
    var tienLuong = soGioLam * tienLuongTrenGio;

    //output
    return tienLuong; //500
}


var tien = tinhLuong(5, 100);
tien += 100;
console.log('tienLuong', tien);
//Xử lý thêm 

/*
    Ví dụ 2: Viết chương trình tính điểm 2 khối thi đại học A, C 
*/

document.getElementById('btnTinhDiem').onclick = function () {

    //Tính điểm khối A 
    //input: DiemToan diemLy diemHoa
    //Lưu ý: Dữ liệu người dùng nhập từ giao diện mặc định sẽ là chuỗi
    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);
    //output: number
    var diemTBKA = tinhDiemTB(diemToan,diemLy,diemHoa);//7 8 9
    //Hiển thị ra giao diện
    document.getElementById('diemTBKA').value = diemTBKA;
    //Tính điểm trung bình khối c
    var diemVan = Number(document.getElementById('diemVan').value);
    var diemSu = Number(document.getElementById('diemSu').value);
    var diemDia = Number(document.getElementById('diemDia').value);

    //var diemTrungBinhKhoiC 
    var diemTBKC = tinhDiemTB(diemVan,diemSu,diemDia);

    document.getElementById('diemTBKC').value = diemTBKC;
}


function tinhDiemTB (diem1,diem2,diem3) {//input : 7 8 9
    var dtb = 0;
    dtb = (diem1 * 2 + diem2 + diem3) / 4;
    //ouput: diemTrungBinh 
    return dtb; //8
    // console.log(123) sau lệnh return chương trình sẽ dựng
}


/*
    Bài tập 1: Xây dựng chức năng zoomin zoomout cho 2 button bên dưới

*/

document.getElementById('btnZoomInHome').onclick = function () {
    zoomFontSize(5,'home');
}
document.getElementById('btnZoomOutHome').onclick = function () {
    zoomFontSize(-5,'home');
}
document.getElementById('btnZoomInText').onclick = function () {
    zoomFontSize(1,'txtContent');
}
document.getElementById('btnZoomOutText').onclick = function () {
    zoomFontSize(-1,'txtContent');
}
