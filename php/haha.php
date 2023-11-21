<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <section>


        <h2>Nhập thông tin sinh viên</h2>
        <form method="post" class="form_SV">
            <div>
                <p for="ho_dem">Họ đệm:</p>
                <input type="text" name="ho_dem" required><br>
            </div>

            <div>
                <p for="ten">Tên:</p>
                <input type="text" name="ten" required><br>
            </div>

            <div>
                <p for="nam_sinh">Năm sinh:</p>
                <input type="number" name="nam_sinh" pattern="[0-9]{4}" required><br>
            </div>

            <div>
                <p for="gioi_tinh">Giới tính:</p>
                <input type="radio" name="gioi_tinh" value="Nam" required> Nam
                <input type="radio" name="gioi_tinh" value="Nữ" required> Nữ<br>
            </div>

            <input type="submit" name="them_sinh_vien" value="Thêm sinh viên">
        </form>


        <?php

        if (isset($_POST['them_sinh_vien'])) {
            $ho_dem = $_POST['ho_dem'];
            $ten = $_POST['ten'];
            $nam_sinh = intval($_POST['nam_sinh']);
            $gioi_tinh = $_POST['gioi_tinh'];

            $sinh_vien = new SinhVien($ho_dem, $ten, $nam_sinh, $gioi_tinh);
            them_sinh_vien($sinh_vien); // Gọi hàm thêm sinh viên từ mã PHP
        }

        $danh_sach_sinh_vien = lay_danh_sach_sinh_vien(); // Lấy danh sách sinh viên từ mã PHP

        if (!empty($danh_sach_sinh_vien)) {
            echo '<h2>Danh sách sinh viên</h2>';
            echo '<table class="table">';
            echo '<tr>';
            echo '<th>Họ đệm</th>';
            echo '<th>Tên</th>';
            echo '<th>Năm sinh</th>';
            echo '<th>Giới tính</th>';
            echo '<th>Tuổi</th>';
            echo '</tr>';

            foreach ($danh_sach_sinh_vien as $sinh_vien) {
                echo '<tr>';
                echo '<td>' . $sinh_vien->ho_dem . '</td>';
                echo '<td>' . $sinh_vien->ten . '</td>';
                echo '<td>' . $sinh_vien->nam_sinh . '</td>';
                echo '<td>' . $sinh_vien->gioi_tinh . '</td>';
                echo '<td>' . tinh_tuoi($sinh_vien->nam_sinh) . '</td>';

                echo '</tr>';
            }

            echo '</table>';
        }
        echo "Danh sách sinh viên trước khi sắp xếp:\n";
        in_danh_sach_sinh_vien($danh_sach_sinh_vien);

        sap_xep_sv_theo_nam_sinh($danh_sach_sinh_vien);
        echo "\nDanh sách sinh viên sau khi sắp xếp theo năm sinh giảm dần:\n";
        in_danh_sach_sinh_vien($danh_sach_sinh_vien);
        $danh_sach_sinh_vien = nhap_danh_sach_sinh_vien();

        class SinhVien
        {
            public $ho_dem;
            public $ten;
            public $nam_sinh;
            public $gioi_tinh;

            public function __construct($ho_dem, $ten, $nam_sinh, $gioi_tinh)
            {
                $this->ho_dem = $ho_dem;
                $this->ten = $ten;
                $this->nam_sinh = $nam_sinh;
                $this->gioi_tinh = $gioi_tinh;
            }
        }

        function tinh_tuoi($nam_sinh)
        {
            $tuoi = date("Y") - $nam_sinh;
            return $tuoi;
        }
        // Hàm để thêm sinh viên vào danh sách
        function them_sinh_vien($sinh_vien)
        {
            $danh_sach_sinh_vien = lay_danh_sach_sinh_vien();
            $danh_sach_sinh_vien[] = $sinh_vien;
            file_put_contents('danh_sach_sinh_vien.json', json_encode($danh_sach_sinh_vien));
        }

        // Hàm để lấy danh sách sinh viên từ tệp JSON
        function lay_danh_sach_sinh_vien()
        {
            if (file_exists('danh_sach_sinh_vien.json')) {
                $danh_sach_sinh_vien = json_decode(file_get_contents('danh_sach_sinh_vien.json'));
                return $danh_sach_sinh_vien;
            }
            return array();
        }
        // Hàm để sắp xếp danh sách sinh viên theo thứ tự giảm dần của năm sinh
        function sap_xep_sv_theo_nam_sinh($sinh_vien_list)
        {
            usort($sinh_vien_list, function ($a, $b) {
                return $b->nam_sinh - $a->nam_sinh;
            });
        }

        // Hàm để nhập danh sách sinh viên
        function nhap_danh_sach_sinh_vien()
        {
            $n = (int) readline("Nhập số lượng sinh viên: ");
            $sinh_vien_list = [];

            for ($i = 0; $i < $n; $i++) {
                echo "Nhập thông tin sinh viên thứ " . ($i + 1) . ":\n";
                $ho_dem = readline("Họ đệm: ");
                $ten = readline("Tên: ");
                $nam_sinh = (int) readline("Năm sinh: ");
                $gioi_tinh = readline("Giới tính: ");

                $sinh_vien = new SinhVien($ho_dem, $ten, $nam_sinh, $gioi_tinh);
                $sinh_vien_list[] = $sinh_vien;
            }

            return $sinh_vien_list;
        }

        // Hàm để in danh sách sinh viên
        function in_danh_sach_sinh_vien($sinh_vien_list)
        {
            foreach ($sinh_vien_list as $i => $sinh_vien) {

                echo '<table class="table"><tr>';
                echo '<td>' . $sinh_vien->ho_dem . '</td>';
                echo '<td>' . $sinh_vien->ten . '</td>';
                echo '<td>' . $sinh_vien->nam_sinh . '</td>';
                echo '<td>' . $sinh_vien->gioi_tinh . '</td>';
                echo '<td>' . tinh_tuoi($sinh_vien->nam_sinh) . '</td>';
                echo '</tr></table>';
            }
        }

        ?>
    </section>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        section {
            width: 80%;
        }

        .form_SV {
            border: 1px solid black;
        }

        .form_SV p {
            width: 100px;
        }

        .form_SV div {
            display: flex;
            margin: 5px;
            align-items: center;

        }

        input {
            padding: 5px 20px;

        }

        .table {
            margin: 20px;
        }

        .table,
        tr,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            width: 100px;
            text-align: center;
        }
    </style>

</body>

</html>
