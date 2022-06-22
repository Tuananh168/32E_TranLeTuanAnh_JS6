// Bài Tập 1 : Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000

document.getElementById('btnTimSo').onclick = function() {
    // output : soHang : number
    var soHang = 0;
    var tongSoHang = 0;
    // progress
    while (tongSoHang < 10000) {
        soHang++
        tongSoHang = tongSoHang + soHang;
    }
    // Xuất ra màn hình
    document.getElementById('ketQua_b1').innerHTML = 'Số nguyên dương nhỏ nhất : ' + soHang;
}

// Bài Tập 2 :Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)

document.getElementById('btntinhTong').onclick = function() {
    // input : x , n : number

    var soX = Number(document.getElementById('nhapSo_x').value);
    var soN = Number(document.getElementById('nhapSo_n').value);
    // output : tong số hạng : number
    var tongSoHang = 0;
    var soHang = 1;
    // progress :
    while (soHang <= soN) {
        tongSoHang = tongSoHang + soX ** soHang;
        soHang++
    }
    // Xuất ra màn hình :
    document.getElementById('ketQua_b2').innerHTML = 'Tổng : ' + tongSoHang;
}

// Bài tập 3 : Nhập vào n. Tính giai thừa 1*2*...n

document.getElementById('btnTinhLuyThua').onclick = function() {
    // input : số n : number
    var soN = Number(document.getElementById('nhapSo_3').value);
    // output : tong : number
    var Tong = 1;
    var dem = 1;
    // progress :
    while (dem <= soN) {
        Tong = Tong * dem;
        dem++;
    }

    // Xuất ra màn hình
    document.getElementById('ketQua_b3').innerHTML = 'Giai thừa : ' + Tong;
}

// Bài tập 4 : Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.

document.getElementById('btnTaoThe').onclick = function() {
    // Output : htmlstring : string;

    var div = '';
    var dem = 1;
    var html = '';
    // progress
    while (dem <= 10) {
        if (dem % 2 == 0) {
            div = '<div class="bg-danger text-white p-2">số chẵn</div>';
            html += div;

        } else {
            div = '<div class="bg-primary text-white p-2">số lẻ</div>';
            html += div;
        }
        dem++;

    }
    // Xuất ra màn hình :
    document.getElementById('ketQua_b4').innerHTML = html;
}