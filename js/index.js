

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

document.getElementById('btnInTheDiv').onclick = function (){

    //input: number
    var input = Number(document.getElementById('iSo').value);
    //output: string
    var output = '';
    //Xử lý
    //b1
    var dem = 1;
    //b2
    while(dem <= 10)// Còn đúng thì còn làm
    {
        //b3
        var div = '<div class="alert alert-success mt-2">hello cybersoft</div>';
        // output = output + div;
        output += div;
        //b4
        dem ++;
    } 

    document.getElementById('ketQua1').innerHTML = output;

}