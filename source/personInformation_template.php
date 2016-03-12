<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="utf-8">
<title>UAID Persona Description</title>

<!-- TELLS PHONES NOT TO LIE ABOUT THEIR WIDTH -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- Jquery -->
<script async src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>

<!-- Google Font -->
<link href='https://fonts.googleapis.com/css?family=Roboto|Open+Sans:400,700' rel='stylesheet' type='text/css'>

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="css/giftbox.css">
<link rel="stylesheet" type="text/css" href="css/mobilemenu.css">

<!-- Scripts -->

<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->

<!-- Mobile Menu -->
    <script>
        $(document).ready(function(){
            $(".nav-button").click(function () {
            $(".nav-button,.primary-nav").toggleClass("open");
            });    
        });
    </script>
<!-- End Mobile Menu -->  
  

</head>

<body>
    <!-- Begin Header Wrapper -->
        <header>
            <!-- Begin Navigation -->
            <?php include 'includes/navigation.php';?>
            <!-- End Navigation -->
        </header>            
    <!-- End of Header Wrapper -->


<!-- Begin of Container -->
<div id="container">    

    <!-- Begin Content -->
    <div class="wrapper">
        <a href="index.php" style="display: block;"><button>Back</button></a>
        <div id="leftcolumn">
            <img src="images/image4.jpg" class="fullSizeImage">
        </div>

        <div id="rightcolumn">
            <h1 style="margin: 0;">UAID Gift Box Recipient</h1>
            <h2>Name</h2>
            <hr>
            <p style="padding:0;">Age: 32</p>
            <p style="padding:0;">Intellectual Age: 11</p>
            <hr>
            <p>Wish List:</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <a href="#"><button type="button">Adopt Me</button></a>
        </div>
        <span class="clear"></span>
    </div>
    <!-- End Content -->
</div>
<!-- End of Container -->
<!-- Begin Footer -->
<?php include 'includes/footer.php';?>
<!-- End Footer -->
</body>
</html>