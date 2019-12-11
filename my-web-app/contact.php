<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Final Home</title>
        <meta charset="utf-8">
        <link href="styles.css" rel="stylesheet">
    </head>

    <body>
        <header>
            <?php include ('header.php') ?>
        </header>

        <main>
            
            <form id="contact">
                <label for="title">What are you contacing us about?</label>
                <input type="text" id="title" name="title">

                <br><br>
                <label for="name">Your name: </label>
                <input type="text" id="name" name="name">

                <br><br>
                <label for="email">Your email: </label>
                <input type="email" id="email" name="email">

                <br><br>
                <label for="message">Your message: </label><br>
                <textarea id="message" name="message" cols="40" rows="10"></textarea>

            </form>



            
        </main>

        <footer>
            <?php include ('footer.php') ?>
        </footer>
    </body>
    <script src="scripts/site.js"></script>
</html>