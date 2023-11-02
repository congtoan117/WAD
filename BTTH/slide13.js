<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pham Cong Toan</title>
</head>

<body>
    <h1> Task</h1>
    <ul id="content">
    </ul>
    <form action="" id="infor">
        <input type="text" id="new-content" placeholder="New Task" autocomplete="off" autofocus>
        <input type="submit" id="submiting">
    </form>


</body>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#submiting').disabled = true;
        document.querySelector('#new-content').onkeyup = function() {
            document.querySelector('#submiting').disabled = false;
        }
        document.querySelector('#infor').onsubmit = function() {
            const li = document.createElement('li');
            li.innerHTML = document.querySelector("#new-content").value;
            document.querySelector('#content').append(li);
            document.querySelector('#new-content').value = "";
            document.querySelector('#submiting').disabled = true;
            return false;
        }
    });
</script>

</html>