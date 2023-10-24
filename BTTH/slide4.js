<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <title>Pham Cong Toan</title>
    <style>
        html {
            background-color: bisque;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector('#red').onclick = function(){
                document.querySelector('#hello').style.color = 'red';
            };
            document.querySelector('#blue').onclick = function(){
                document.querySelector('#hello').style.color = 'blue';
            };
            document.querySelector('#green').onclick = function(){
                document.querySelector('#hello').style.color = 'green';
            };
        });
    </script>
</head>

<body>
    <form>
        <div style="width: 500px;height:500px;border: 1px solid black;background-color: rgb(112, 197, 197);border-radius: 15px;margin:0 auto;">
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Họ Tên(*)</label>
                <input type="text" name="hoten" id="hoten" required/>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Tên Đăng Nhập(*)</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Password(*)</label>
                <input type="password" name="password" minlength="8" id="pw" required/>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label> Nhập lại Password(*)</label>
                <input type="password" name="password" minlength="8" id="rpw" required/>
                <p id="remote" style="margin-top: 0px;"></p>
            </div>
            <div style="margin-left: 15px;margin-top: 0px;">
                <label>Quốc tịch(*)</label>
                <select id="national">
          <option value="option1">Việt Nam</option>
          <option value="option2">Trung Quốc</option>
          <option value="option3">Nga</option>
          <option value="option4">Hoa Kì</option>
          <option value="option5">Nhật Bản</option>
        </select>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Email(*)</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Số điện thoại(*)</label>
                <input type="text" name="phone_number" id="sdt" required/>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label> Câu hỏi bảo mật</label>
                <select>
          <option value="option1">Cấp 1 bạn học trường nào?</option>
          <option value="option2">Mẹ của bạn tên gì?</option>
          <option value="option3">Phim bạn thích xem là gì?</option>
          <option value="option4">Bạn kiếm được bao nhiêu 1 tháng?</option>
        </select>
            </div>
            <div style="margin-left: 15px;margin-top: 20px;">
                <label>Trả lời(*)</label>
                <input type="text" name="answer" id="answer" required/>
            </div>
            <div style="margin-left: 10px; margin-top: 10px;">
                <button> Kiểm tra </button>
                <button type="submit" onclick="check()">Đăng Kí</button>
            </div>
        </div>
    </form>
    <script>
            var password = document.getElementById('pw');
        var confirmPassword = document.getElementById('rpw');
        var remote = document.getElementById('remote');
        var pw1 = password.value;
        var pw2 = confirmPassword.value;

        function confirmpw() {
            var pw1 = password.value;
            var pw2 = confirmPassword.value;

            if (pw1 === pw2) {
                remote.innerHTML = 'Mật Khẩu Giống Nhau!';
                remote.style = 'color :green';
            } else {
                remote.innerHTML = 'Mật Khẩu Không Khớp!';
                remote.style = 'color :red';
            }
        }
        confirmPassword.addEventListener('input', confirmpw)

        function check() {
            var password = document.getElementById('pw');
            var hoten = document.getElementById('hoten').value;
            var username = document.getElementById('username').value;
            var emeo = document.getElementById('email').value;
            var sdt = document.getElementById('sdt').value;
            var traloi = document.getElementById('answer').value;

            if (password.value === '' || hoten === '' || username === '' || emeo === '' || sdt === '' || traloi === '') {
                alert('Bạn chưa nhập đủ thông tin. Vui lòng kiểm tra lại trường đang thiếu.');
            } else {
                alert('Xin chào bạn ' + hoten + '!');
            }
        }
    </script>
    <h1 id="hello">Pham Cong Toan</h1>
    <button id="red">Red</button>
    <button id="blue">Blue</button>
    <button id="green">Green</button>

</body>