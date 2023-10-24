<title>Pham Cong Toan</title>
    <style>
        html {
            background-color: bisque;
            background-color: rgb(229, 226, 222);
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
            document.querySelectorAll('.color-change').forEach(function(button) {
                button.onclick = function() {
                    document.querySelector('#hello').style.color = button.dataset.color;
                };
            });
        });
    </script>
</head>

<body>
    <h1 id="hello">Pham Cong Toan</h1>
    <button id="red">Red</button>
    <button id="blue">Blue</button>
    <button id="green">Green</button>
    <button class="color-change" data-color="red">Red</button>
    <button class="color-change" data-color="blue">Blue</button>
    <button class="color-change" data-color="green">Green</button>

</body>