/*
    Viết chương trình cho phép người dùng nhập vào 1 số => tính tổng các kí số của số đó
    Ví dụ: 585 => 5 + 8 + 5 = 18
    // 585/100 = 5.85 => Math.floor
    // 585 % 100 = 85 => 85 / 10 = 8.5 => làm tròn 8
*/

//input
var so = 876;

//output: string ? boolean ? number ?
var tongKySo = 0;

//progress: Xử lý
var hangTram = Math.floor(so / 100);
var hangChuc = Math.floor(so % 100 / 10 );
var donVi = so % 100 % 10;

tongKySo = hangTram + hangChuc + donVi;

console.log('Tổng ký số = ', tongKySo);


