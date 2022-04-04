var tagH3 = document.getElementById('title');

//.innerHTML: Phần nội dung ở giữa 2 thẻ html đóng mở 
tagH3.innerHTML = 'Cybersoft.edu.vn';

//.value: phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById('txt');

tagInput.value = 'Hello khải cybersoft';

//Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById('number');
console.log(tagInputNumber.value);
// alert(tagInputNumber.value);

//.src: là nội dung hình ảnh của thẻ img 

var tagImg = document.getElementById('hinhAnh');

tagImg.src = './image/hinh2.jpeg';



/*
    Định nghĩa hàm: Dùng để thực thi 1 loạt hành động sau khi chúng ta gọi
*/

function sayHello() { //scope
    alert('chào mọi người !');
}

// //Lệnh gọi hàm
// sayHello();

/*
    Ví dụ 1: Viết chương trình yêu cầu người dùng nhập vào 1 giá trị và khi người dùng bấm hiển thị thì giá trị đó sẽ in ra tại thẻ span#ketQuaHienThi
*/
//handleEvent: Xử lý sự kiện
function hienThiThongTin() {
    //Lấy giá trị nhập khi gọi hàm hiển thị thông tin
    //input: luôn là string
    var input = document.getElementById('giaTriNhap');
    // console.log(input.value);
    //output: string
    var output = input.value;;
    // //progress: 
    // output = input.value;
    //Xử lý kết quả hiển thị lên giao diện
    var tagSpanKetQua = document.getElementById('ketQuaHienThi');
    tagSpanKetQua.innerHTML = output;
}


/*
    Ví dụ 2: Nhập vào số tiền lương(1h) và số giờ làm In ra tổng lương bằng số giờ nhân tiền lương
*/

function tinhTongLuong() {

    //input: tienLuong1h:number, soGioLam:number
    var tienLuong = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
    // //Kiểm tra input
    // console.log('tienLuong',tienLuong);
    // console.log('soGioLam',soGioLam);
    //output: tongLuong: number
    var tongLuong = 0;
    //progress: 
    tongLuong = tienLuong * soGioLam;

    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
 
}

/*
    Ví dụ 3:  Xây dựng form thông báo đăng nhập
*/

// function xuLyDangNhap () {
//     alert(123);
// }

var btnDangNhap = document.getElementById('btnDangNhap');
btnDangNhap.onclick = function () { //anonymous function
    //input: taiKhoan: string, matKhau: string
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau = document.getElementById('matKhau').value;
    //output: thongBao: string
    let thongBao = '';
    //progress: 
    thongBao = 'Tài khoản: ' + taiKhoan + ' - Mật khẩu: ' + matKhau;
    //alt + z hoặc option + z => xuống dòng

    var tagKetQua = document.getElementById('ketQuaDangNhap');
    tagKetQua.innerHTML = thongBao;
    //Thay đổi màu sắc (style)
    // tagKetQua.style.backgroundColor = 'green';
    // tagKetQua.style.padding = '15px';
    // tagKetQua.style.color = '#FFF';
    // tagKetQua.style.margin = '15px';
    tagKetQua.className = 'bg-success p-2 m-2 text-white';
};

//Ví dụ 4: Tính tiền típ

document.getElementById('btnTinhTienTip').onclick = function(){
    /* 
        input: 
            + tongTienThanhToan : number
            + phanTramTip: number
            + soNguoiTip: number
        progress:
            + Lấy thông tin người dùng nhập từ giao diện
            + Sử dụng công thức tính phần trăm tip quy ra tiền và chia cho số người 
        output: 
            + tienTipTrenNguoi : number
    */
    var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
    var phanTramTip = document.getElementById('phanTramTip').value;
    var soNguoiTip = document.getElementById('soNguoiTip').value;
    var tienTipTrenNguoi = 0;

    tienTipTrenNguoi = (tongTienThanhToan * phanTramTip / 100) /soNguoiTip;

    document.getElementById('tienTipTrenNguoi').innerHTML = tienTipTrenNguoi +' $';

}

