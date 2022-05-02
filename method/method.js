function kiemTraSoNguyenTo(number) { //input: number
    //output: true ? false 
    var checkSNT = true;
    for(var i = 2; i<= Math.sqrt(number);i++) {
        if(number % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
} 


function in1HangSao(soSao) {//input: 5
    //output: string  * * * * * 
    var ketQua = '';
    for (var i = 1; i <= soSao; i++) {
        ketQua += ' <i class="fa fa-star text-info"></i> ';
    }

    return ketQua;//output
}
