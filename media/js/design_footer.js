var html = [];
html.push('<title>Вова Игры Chips</title>');
html.push('<html style="background: linear-gradient(#E0FFFF, #FFFFFF) fixed;">');
html.push('<LINK href="../styles.css" rel="stylesheet" type="text/css">');
html.push('a');
var target = document.getElementById('uniqueTargetID');
target.innerHTML = html.join('');
target.style.display = 'block';