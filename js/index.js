/*
    Vấn đề đặt ra: Cần lưu trữ 5 thông tin là tên học viên (Nam,Hằng,Minh,Long,Khải)
*/
// var name1='Nam';
// var name2='Hằng';
// var name3='Minh';
// var name4='Long';
// var name5='Khải';

//Khai báo mảng
var arrName = ['Nam', 'Hằng', 'Minh', 'Long', 'Khải'];
{
    //Lấy ra 1 giá trị trong mảng
    console.log(arrName[2]);
    console.log(arrName[3]);
    document.getElementById('hoTen').innerHTML = arrName[4];
    arrName[1] = 'Sang';
    console.log(arrName);

    //Lấy ra chiều dài (số lượng phần tử của mảng)
    //option + esc | ctrl + space
    console.log('chiều dài', arrName.length);

    var content = '';
    //Duyệt mảng : In ra màn hình console của browser
    for (var index = 0; index < arrName.length; index++) {

        // console.log(arrName[index]);
        content += '<p class="badge badge-success">' + arrName[index] + '</p>';
    }

    document.getElementById('content-array').innerHTML = content;
}

// ----------------- hàm thêm dữ liệu vào mảng ---------------
//push(): Hàm thêm 1 hoặc nhiều giá trị vào cuối mảng
arrName.push('Uyên', 'Linh');
// console.log(arrName);
// //unshift(): Thêm 1 hoặc nhiều giá trị vào đầu mảng (làm thay đổi chỉ số index nên ít sử dụng)
// arrName.unshift('Bảo','Minh Anh');
// console.log(arrName);

// ------------------ hàm xoá giá trị ra khỏi mảng ----------------
//splice(): Xoá 1 hoặc nhiều giá trị trong mảng. => Thay đổi index cũng như length của mảng
arrName.splice(2, 1);
console.log(arrName);

//shift(): Lấy ra 1 phần tử ở đầu mảng và xoá ra khỏi mảng , pop(): Lấy ra 1 phần tử ở cuối mảng và xoá đi phần đó.

//Lấy ra và xoá ở đầu
var hoTen1 = arrName.shift();
console.log('hoTen', hoTen1);
console.log(arrName);
//Lấy ra và xoá ở cuối
var hoTen2 = arrName.pop();
console.log('hoTen', hoTen2);
console.log(arrName);
//---------------------- Dom qua tag name -------------

var arrTagSection = document.getElementsByTagName('section');


arrTagSection[1].innerHTML = 'Hello cyberosft';
arrTagSection[1].style.color = 'yellow';

// console.log('arrTagSection',arrTagSection)
//arrTagSection = [section,section,section]
for (var index = 0; index < arrTagSection.length; index++) {

    arrTagSection[index].className = 'badge badge-danger m-2';

}

//---------------------- Dom qua class name -------------
var arrTagClass = document.getElementsByClassName('txt');
console.log('arrTagClass', arrTagClass);

for (var index = 0; index < arrTagClass.length; index++) {
    //Mỗi lần duyệt lấy ra 1 tag
    var tag = arrTagClass[index];// 0 1 2 3 
    tag.className = 'txt alert alert-danger';
    tag.innerHTML = 'Hello cybersoft';
}
//---------------------- Dom qua  name -------------
var arrTagName = document.getElementsByName('text-demo');
console.log('arrTagName',arrTagName);
arrTagName[0].style.color='pink';
for (var index = 0; index < arrTagName.length; index++) {
    //Mỗi lần duyệt lấy ra 1 tag
    var tag = arrTagName[index];// 0 1 2 3 
    tag.className = 'txt alert alert-danger';
    tag.innerHTML = 'Hello cybersoft';
}

/*
    .querySelector(selector): Khi dom đến dựa vào querySelector thì kết quả trả về là 1 thẻ đầu tiên khớp với selector đó (Dù có nhiều thẻ có selector giống nhau). Nếu không có thẻ nào khớp selector đó thì kết quả trả về là undefine
*/
document.querySelector('#btnSubmit').onclick = function (){
    // alert(123);
    var pText1 = document.querySelector('.demo-selector .p-text:nth-of-type(2) ').innerHTML;

    console.log(first)
    alert(pText1);

}

/*
    .querySelectorAll(selector): Khi dom đến dựa vào querySelectorAll thì kết quả trả về là 1 mảng. Lưu ý: Nếu như chỉ có 1 thẻ khớp với selector thì nó vẫn trả về 1 mảng và mảng đó có 1 phần tử. Nếu không khớp phần tử nào thì kết quả là []
*/

document.querySelector('#btnDangNhap').onclick = function (event){ 
    event.preventDefault(); //Hàm này để chặn sự kiện reload mặc định của browser khi submit

    var arrTagInput = document.querySelectorAll(' #form input');
    console.log('taiKhoan',arrTagInput[0].value);
    console.log('matKhau',arrTagInput[1].value);

    // console.log('abc',arrTagInput)

}
