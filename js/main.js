// Tạo đối tượng danh sách nhân viên từ lớp đối tượng DanhSanhNhanVien
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

// Lấy dữ liệu từ local storage;
getLocalStorage();

// DOM
function getEle(id) {
  return document.getElementById(id);
}

// Tạo đối tượng từ lớp đối tượng NhanVien
function layThongTinNV(isAdded) {
  var taiKhoanNV = getEle("tknv").value;
  var tenNV = getEle("name").value;
  var emailNV = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucVu").value;
  var gioLam = getEle("gioLam").value;

  // Cờ
  var isValid = true;

  // Tài khoản
  if (isAdded) {
    isValid &=
      validation.kiemTraRong(
        taiKhoanNV,
        "errorTaiKhoan",
        "(*) Vui lòng nhập tài khoản"
      ) &&
      validation.kiemTraDoDaiVaDinhDang(
        taiKhoanNV,
        /^\w{4,6}$/,
        "errorTaiKhoan",
        "(*) Vui lòng nhập tài khoản 4-6 kí tự"
      ) &&
      validation.kiemTraTrungTaiKhoan(
        taiKhoanNV,
        "errorTaiKhoan",
        "(*) Tài khoản này đã tồn tại"
      );
  }

  // Họ tên
  isValid &=
    validation.kiemTraRong(tenNV, "errorName", "(*) Vui lòng nhập họ tên") &&
    validation.kiemTraDoDaiVaDinhDang(
      tenNV,
      /[A-Za-z]/,
      "errorName",
      "(*) Vui lòng nhập họ tên đúng định dạng"
    );

  // Email
  isValid &=
    validation.kiemTraRong(emailNV, "errorEmail", "(*) Vui lòng nhập email") &&
    validation.kiemTraDoDaiVaDinhDang(
      emailNV,
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "errorEmail",
      "(*) Vui lòng nhập email đúng định dạng"
    );

  // Mật khẩu
  isValid &=
    validation.kiemTraRong(
      matKhau,
      "errorPass",
      "(*) Vui lòng nhập mật khẩu"
    ) &&
    validation.kiemTraDoDaiVaDinhDang(
      matKhau,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/,
      "errorPass",
      "(*) Vui lòng nhập mật khẩu dài 6-10 ký tự chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt"
    );

  // Ngày làm
  isValid &=
    validation.kiemTraRong(
      ngayLam,
      "errorNgayLam",
      "(*) Vui lòng chọn ngày làm"
    ) &&
    validation.kiemTraDoDaiVaDinhDang(
      ngayLam,
      /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
      "errorNgayLam",
      "(*) Vui lòng nhập ngày làm đúng định dạng"
    );

  // Lương cơ bản
  isValid &=
    validation.kiemTraRong(
      luongCoBan,
      "errorLuongCB",
      "(*) Vui lòng nhập lương cơ bản"
    ) &&
    validation.kiemTraDoDaiVaDinhDang(
      luongCoBan,
      /^([1-9]([0-9]{6})|[1]([0-9]{7})|2(0{7}))$/,
      "errorLuongCB",
      "(*) Vui lòng nhập lương cơ bản từ 1.000.000-20.000.000"
    );

  // Chức vụ
  isValid &= validation.kiemTraChonChucVu(
    "chucVu",
    "errorChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  // Giờ làm
  isValid &=
    validation.kiemTraRong(
      gioLam,
      "errorGioLam",
      "(*) Vui lòng nhập giờ làm"
    ) &&
    validation.kiemTraDoDaiVaDinhDang(
      gioLam,
      /^([8-9][0-9]|[1][0-9][0-9]|20[0-0])$/,
      "errorGioLam",
      "(*) Vui lòng nhập giờ làm trong tháng từ 80-200 giờ"
    );

  if (!isValid) return;
  var nv = new NhanVien(
    taiKhoanNV,
    tenNV,
    emailNV,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );

  // Tính tổng lương
  nv.tinhTongLuong();

  // Xếp loại nhân viên
  nv.xepLoaiNhanVien();

  return nv;
}

// Hiện thêm người dùng btn
function hienThemNguoiDungBtn() {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;
  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucVu").value = "Chọn chức vụ";
  getEle("gioLam").value = "";
  getEle("btnThemNV").style.display = "inline-block";
  getEle("btnCapNhat").style.display = "none";
  getEle("errorTaiKhoan").style.display = "none";
  getEle("errorTaiKhoan").innerHTML = "";
  getEle("errorName").style.display = "none";
  getEle("errorName").innerHTML = "";
  getEle("errorEmail").style.display = "none";
  getEle("errorEmail").innerHTML = "";
  getEle("errorPass").style.display = "none";
  getEle("errorPass").innerHTML = "";
  getEle("errorNgayLam").style.display = "none";
  getEle("errorNgayLam").innerHTML = "";
  getEle("errorLuongCB").style.display = "none";
  getEle("errorLuongCB").innerHTML = "";
  getEle("errorChucVu").style.display = "none";
  getEle("errorChucVu").innerHTML = "";
  getEle("errorGioLam").style.display = "none";
  getEle("errorGioLam").innerHTML = "";
}

// Thêm nhân viên
getEle("btnThemNV").onclick = function () {
  var nv = layThongTinNV();
  if (nv) {
    dsnv.themNV(nv);
    renderTable(dsnv.dsnv);
    setLocalStorage();
  }
};

// Tạo bảng in ra danh sách nhân viên
// <td>${nv.tongLuong()}</td>
// <td>${nv.loaiNhanVien()}</td>
function renderTable(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNV}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xoá</button>
        <button class="mt-2 btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="suaNV('${nv.taiKhoan}')">Sửa</button>
        </td>
        </tr>
        `;
  }

  return (getEle("tableDanhSach").innerHTML = content);
}

// Xoá nhân viên
function xoaNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);
  renderTable(dsnv.dsnv);
  setLocalStorage();
}

// Sửa nhân viên
function suaNV(taiKhoan) {
  var nv = dsnv.layChiTietNV(taiKhoan);
  getEle("errorTaiKhoan").style.display = "none";
  getEle("errorTaiKhoan").innerHTML = "";
  getEle("errorName").style.display = "none";
  getEle("errorName").innerHTML = "";
  getEle("errorEmail").style.display = "none";
  getEle("errorEmail").innerHTML = "";
  getEle("errorPass").style.display = "none";
  getEle("errorPass").innerHTML = "";
  getEle("errorNgayLam").style.display = "none";
  getEle("errorNgayLam").innerHTML = "";
  getEle("errorLuongCB").style.display = "none";
  getEle("errorLuongCB").innerHTML = "";
  getEle("errorChucVu").style.display = "none";
  getEle("errorChucVu").innerHTML = "";
  getEle("errorGioLam").style.display = "none";
  getEle("errorGioLam").innerHTML = "";
  getEle("tknv").value = nv.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nv.hoTen;
  getEle("email").value = nv.email;
  getEle("password").value = nv.matKhau;
  getEle("datepicker").value = nv.ngayLam;
  getEle("luongCB").value = nv.luongCoBan;
  getEle("chucVu").value = nv.chucVu;
  getEle("gioLam").value = nv.gioLam;
  getEle("btnCapNhat").style.display = "inline-block";
  getEle("btnThemNV").style.display = "none";
}

// Cập nhật nhân viên
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = layThongTinNV(false);
  dsnv.capNhatNV(nv);
  renderTable(dsnv.dsnv);
  setLocalStorage();
});

// Tim kiếm loại nhân viên
getEle("searchName").addEventListener("keyup", function () {
  var keyWord = getEle("searchName").value;
  renderTable(dsnv.timKiemNV(keyWord));
});

// Set dữ liệu cho local storage
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.dsnv);
  localStorage.setItem("DSNV", dataString);
}

// Get dữ liệu cho local storage
function getLocalStorage() {
  if (localStorage.getItem("DSNV") != undefined) {
    var dataString = localStorage.getItem("DSNV");
    dsnv.dsnv = JSON.parse(dataString);
    renderTable(dsnv.dsnv);
  }
}
