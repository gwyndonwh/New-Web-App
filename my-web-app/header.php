<h1>SECRET AGENT IDENTITY CARDS</h1>

<nav id="topNav">
    <ul>

    </ul>
</nav>

<script>
    var path = window.location.pathname;
    var page = path.split("/").pop();

    var pages = [
        'home.php',
        'about.php',
        'application.php',
        'contact.php'
	'sweetmonkeymeat.php'
    ]

    for (i = 0; i < pages.length; i++) {
        var item = document.createElement('li');
        if (pages[i] == page) {
            item.innerHTML = '<a id="currentPage" href="#">'+ pages[i].slice(0, -4) +'</a';
        }
        else {
            item.innerHTML = '<a href="'+ pages[i] +'">'+ pages[i].slice(0, -4) +'</a';
        }
        document.querySelector('#topNav ul').appendChild(item);
    }
</script>
