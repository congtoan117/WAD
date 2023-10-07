function validateForm() {
    // Lấy giá trị từ các trường input
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var email = document.getElementById("email").value;

    // Kiểm tra điều kiện
    if (password.length < 8) {
      alert("Password phải có ít nhất 8 ký tự.");
      return false;
    }

    if (password !== repassword) {
      alert("Password và Repassword phải trùng khớp.");
      return false;
    }

    if (email.indexOf("@") === -1) {
      alert("Email phải chứa ký tự '@'.");
      return false;
    }

    // Nếu tất cả điều kiện đều thỏa mãn, bạn có thể thực hiện hành động khác ở đây
    // Ví dụ: Gửi biểu mẫu lên máy chủ

    return true;
  }