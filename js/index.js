/*
    Viết chương trình cho phép người dùng nhập vào 1 số => tính tổng các kí số của số đó
    Ví dụ: 585 => 5 + 8 + 5 = 18
*/

//input
var so = 585;

//output: string ? boolean ? number ?
var tongKySo = 0;

//progress: Xử lý
var hangTram = Math.floor(so / 100);
var hangChuc = Math.floor(so % 100 / 10); //585 % 100 => 85 / 10 => 8.5 => làm tròn xuống Math.floor(8.5)=>8
var hangDonVi = so % 10; // 585 % 10 = 58 dư 5

tongKySo = hangTram + hangChuc + hangDonVi;

console.log('tổng ký số', tongKySo);