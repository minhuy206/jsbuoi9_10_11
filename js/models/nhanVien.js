function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = ""
  this.loaiNV = "";

  // method
  this.tinhTongLuong = function () {
    var tongLuong;
    if (this.chucVu === "Giám đốc") {
      tongLuong = parseFloat(this.luongCoBan) * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      tongLuong = parseFloat(this.luongCoBan) * 2;
    } else if (this.chucVu === "Nhân viên") {
      tongLuong = parseFloat(this.luongCoBan);
    }
    return this.tongLuong = tongLuong;
  };
  this.xepLoaiNhanVien = function () {
    var xepLoaiNV = "";
    if (this.gioLam >= 192) {
      xepLoaiNV += "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      xepLoaiNV += "Nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      xepLoaiNV += "Nhân viên khá";
    } else if (this.gioLam < 160) {
      xepLoaiNV += "Nhân viên trung bình";
    }
    return this.loaiNV = xepLoaiNV;
  };
}
