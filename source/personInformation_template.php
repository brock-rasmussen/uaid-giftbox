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
        <span style="display: block;"><a href="index.php"><button>Back</button></a></span>
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
        <hr>

		<form action="" method="" class="form" name="contactInfo" enctype="multipart/form-data" style="padding-top:10px;">
        	<fieldset>
            	<legend>Contact Information</legend>
                <label>
                	<span>First Name:</span> 
                    <input type="text" name="firstName" value="" placeholder="First Name" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Last Name:</span>
                    <input type="text" name="lastName" value="" placeholder="Last Name" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Contact Phone:</span>
                    <input type="text" name="primaryContactPhone" value="" placeholder="801-575-7777" pattern="{0-9()-} {10,20}"  required>
                </label>
                <label>
                	<span>Contact E-mail:</span>
                    <input type="text" name="email" value="" placeholder="JohnSmith@gmail.com" pattern="{^\S+@\S+$} {3,99}"  required>
                </label>
                
            </fieldset>
            
            <button type="submit">Submit Form</button>
            
            <p>** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non leo nec tortor malesuada molestie. Maecenas sed eros eu neque tristique porta eget id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In porta consectetur odio, vitae malesuada ex molestie eget. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam enim tortor, aliquam at tincidunt quis, pellentesque id turpis. Nulla consequat aliquam fringilla. Ut a massa ut ante auctor rhoncus sed eget ex. Quisque convallis turpis sit amet justo euismod ultrices. Ut fermentum cursus tortor, in rhoncus dui placerat vitae. Ut vel magna sit amet tellus feugiat sollicitudin eget non orci. Aenean porttitor hendrerit faucibus. Pellentesque ut neque augue. **</p>
        </form>




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