function DanhSachNhanVien() {
  this.dsnv = [];

  // method
  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.dsnv.length; i++) {
      var nv = this.dsnv[i];
      if (nv.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.layChiTietNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);
    return this.dsnv[index];
  };

  this.themNV = function (nv) {
    this.dsnv.push(nv);
  };

  this.xoaNV = function (taiKhoan) {
    this.dsnv.splice(this.timViTriNV(taiKhoan), 1);
  };

  this.capNhatNV = function (nv) {
    var index = this.timViTriNV(nv.taiKhoan);
    this.dsnv[index] = nv;
  };

  this.timKiemNV = function (keyWord) {
    mangTimKiem = [];
    for (var i = 0; i < this.dsnv.length; i++) {
      var nv = this.dsnv[i];
      var tenSVLowerCase = nv.loaiNV.toLowerCase();
      tenSVLowerCase = tenSVLowerCase
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      var keyWordLowerCase = keyWord.toLowerCase();
      keyWordLowerCase = keyWordLowerCase
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (tenSVLowerCase.indexOf(keyWordLowerCase) !== -1) {
        mangTimKiem.push(this.dsnv[i]);
      }
    }
    return mangTimKiem;
  };
}
