<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="utf-8">
<title>UAID Gift Box Event</title>

<!-- TELLS PHONES NOT TO LIE ABOUT THEIR WIDTH -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- Jquery -->
<script async src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>

<!-- Google Font -->
<link href='https://fonts.googleapis.com/css?family=Roboto|Open+Sans:400,700' rel='stylesheet' type='text/css'>

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="css/giftbox.css">
<link rel="stylesheet" type="text/css" href="css/flexslider.css" type="text/css">
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

<!-- FlexSlider -->
<script src="scripts/jquery.flexslider.js"></script>

<script type="text/javascript" charset="utf-8">
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
</script>
<!-- End Slider -->
  

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
    	
        <!-- Flex Slider -->
        <div class="flexslider">
          <ul class="slides">
            <li>
              <img src="images/image1.jpg" />
            </li>
            <li>
              <img src="images/image2.jpg" />
            </li>
            <li>
              <img src="images/image3.jpg" />
            </li>
            <li>
              <img src="images/image4.jpg" />
            </li>
          </ul>
        </div>
        <!-- End Slider Div -->
        
        <p>Volunteering at UAID is the perfect way to afford opportunities to those with intellectual disabilities. There are many benefits to volunteering with UAID. This organization was founded by volunteers and is driven by volunteers. Volunteers are needed to continue to support us as we grow and develop new and innovative programs . We are looking for the next generation of volunteers to help us take our mission, purpose, and services to the next level.</p><br>
        
        <button class="button">Volunteer</button>
        
    	<h1>Holiday Gift Box</h1>
        
        <p>This program is a year long project resulting in holiday gifts for individuals with intellectual disabilities who are low income, live in group homes, and receive meager benefits from SSI. It brings joy to many who are otherwise overlooked during the holidays.</p>
        
        <p>A man with an intellectual disability may be physically 64 years of age, yet have an intellectual age of around 6. He expects and anxiously awaits the magic of the Holiday season. Yet, he does not have much in the way of family, nor does enough money to shop for himself. That is where UAID steps in with the Holiday Gift Box program.</p>
 
        <p>As the largest program offered by UAID, Holiday Gift Box impacts the lives of nearly 1,400 people with intellectual disabilities each year from all corners of the state. The program provides basic need resources like shoes, coats, sheets, disposable undergarments, and personal hygiene items. Simliar in design to programs like Angel Tree or Sub for Santa, Holiday Gift Box is the only program that supports both adults and children with disabilities. Many of the children that are accepted into Holiday Gift Box program are refered to UAID by the Angel Tree program or Sub for Santa because they have exhausted their resources and cannot serve these individuals.</p>
         
        <p>The program follows a very intentional timeline to stage the project each year. In early August, UAID works with local realtors to find a donated space to house the staging of the event for two and half months. During this time, UAID works closely with service providers, support service coordinators, and independent living centers to refer and identify low income, intellectually or developmentally disabled individuals in need of resources. Outreach includes individuals with disabilities from rural communities and Native American reservations. The faces of children and adults with a list of their individual wishes are created in the form of a holiday ornament. Ornaments are adopted by individuals, groups and organizations who supply the requested items either through direct purchase or cash contributions.</p>
         
        <p>In late October, hundreds of volunteers come to move, unpack, and begin staging the event, while other volunteers begin creating ornaments. Through a mix of individual donors and local business, nearly half of the individuals are sponsored. Yet each year, UAID fulfills the wishes of the remaining unsponsored individuals; if an application is accepted, no person will be turned away.</p>
        
        <!-- Begin Display Profiles -->
        <div class="displayProfile">
        <h2>Adopt Us!</h2>
        	<!-- Begin Persona Wrapper -->
            <div class="personaWrapper">
                <!--Begin Personal Profile-->
                <div class="profile">
                    <h3>Person 1</h3>
                    <img src="images/profile1.jpg" alt="" />
                    <span><strong>Age: </strong>20</span> <span><strong>Intellectual Age: </strong>7</span>
                    <ul>
                        <li>Items Needed 12</li>
                        <li>Items Needed 2</li>
                        <li>Items Needed 3</li>
                        <li>Items Needed 4</li>
                    </ul>
                    <a href="personInformation_template.php"><button>Adopt Me</button></a>
                </div>
                <!--End Personal Profile-->
                
                <!--Begin Personal Profile-->
                <div class="profile">
                    <h3>Person 2</h3>
                    <img src="images/profile1.jpg" alt="" />
                    <span><strong>Age: </strong>24</span> <span><strong>Intellectual Age: </strong>9</span>
                    <ul>
                        <li>Items Needed 1</li>
                        <li>Items Needed 2</li>
                        <li>Items Needed 3</li>
                        <li>Items Needed 4</li>
                    </ul>
                    <a href="personInformation_template.php"><button>Adopt Me</button></a>
                </div>
                <!--End Personal Profile-->
                
                <!--Begin Personal Profile-->
                <div class="profile">
                    <h3>Person 3</h3>
                    <img src="images/profile1.jpg" alt="" />
                    <span><strong>Age: </strong>50</span> <span><strong>Intellectual Age: </strong>17</span>
                    <ul>
                        <li>Items Needed 1</li>
                        <li>Items Needed 2</li>
                        <li>Items Needed 3</li>
                        <li>Items Needed 4</li>
                    </ul>
                    <a href="personInformation_template.php"><button>Adopt Me</button></a>
                </div>
                <!--End Personal Profile-->
                
                <!--Begin Personal Profile-->
                <div class="profile">
                    <h3>Person 4</h3>
                    <img src="images/profile1.jpg" alt="" />
                    <span><strong>Age: </strong>32</span> <span><strong>Intellectual Age: </strong>12</span>
                    <ul>
                        <li>Items Needed 1</li>
                        <li>Items Needed 2</li>
                        <li>Items Needed 3</li>
                        <li>Items Needed 4</li>
                    </ul>
                    <a href="personInformation_template.php"><button>Adopt Me</button></a>
                </div>
                <!--End Personal Profile-->
                <button type="button">See More</button>
                <div class="clear"></div>
            </div>
        
        <!-- End Display Profiles -->
        
        
		</div>
        <!-- End Persona Wrapper -->
    </div>
    <!-- End Content -->
</div>
<!-- End of Container -->
<!-- Begin Footer -->
<?php include 'includes/footer.php';?>
<!-- End Footer -->
</body>
</html>