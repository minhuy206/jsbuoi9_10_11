function Validation() {
  this.printNoti = function (condition, errorId, mess) {
    if (condition) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.kiemTraRong = function (value, errorId, mess) {
    var isValid = this.printNoti(value !== "", errorId, mess);
    return isValid;
  };

  this.kiemTraDoDaiVaDinhDang = function (value, letters, errorId, mess) {
    var letter = letters;
    var isValid = this.printNoti(value.match(letter), errorId, mess);
    return isValid;
  };

  this.kiemTraChonChucVu = function (idSelect, errorId, mess) {
    var isValid = this.printNoti(
      getEle(idSelect).selectedIndex > 0,
      errorId,
      mess
    );
    return isValid;
  };

  this.kiemTraTrungTaiKhoan = function (taiKhoanNV, errorId, mess) {
    var isExist = false;
    for (var i = 0; i < dsnv.dsnv.length; i++) {
      var nv = dsnv.dsnv[i];
      if (taiKhoanNV === nv.taiKhoan) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };
}
