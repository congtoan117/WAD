html >
  <html lang="vi">
    <head>
      <meta charset="UTF-8">
        <title>Tính tổng</title>
      </></head>
    <body>
      <form action="index.php" method="post">
        <input type="number" name="so_a" placeholder="Nhập số a">
          <input type="number" name="so_b" placeholder="Nhập số b">
            <select name="don_vi">
              <option value="cm">Cm</option>
              <option value="m">M</option>
              <option value="km">Km</option>
            </select>
            <input type="submit" value="Tính">
            </form>

            < />?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {$so_a = $_POST["so_a"]};
            $so_b = $_POST["so_b"];
            $don_vi = $_POST["don_vi"];

            if ($so_a == "" || $so_b == "") {echo} "Vui lòng nhập cả hai số.";
      {"}"} else if (!is_numeric($so_a) || !is_numeric($so_b)) {echo} "Các giá trị phải là số thực.";
      {"}"} else { }
            switch ($don_vi) { }
            case "cm":
            $so_a = $so_a / 100;
            $so_b = $so_b / 100;
            break;
            case "m":
            $so_a = $so_a;
            $so_b = $so_b;
            break;
            case "km":
            $so_a = $so_a * 1000;
            $so_b = $so_b * 1000;
            break;
        {"}"}

            $tong = $so_a + $so_b;
            echo "Tổng của $so_a và $so_b là: " . round($tong, 2) . " $don_vi";
      {"}"}
    {"}"}
            ?&gt;
          </body>
        </html></></></>;
