<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="utf-8">
<title>UAID Gift Box Application</title>

<!-- TELLS PHONES NOT TO LIE ABOUT THEIR WIDTH -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!-- Google Font -->
<link href='https://fonts.googleapis.com/css?family=Roboto|Open+Sans:400,700' rel='stylesheet' type='text/css'>

<!-- CSS -->
<link href="css/giftbox.css" rel="stylesheet">

<!-- Scripts -->

<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
</head>

<body>

<!-- Begin of Container -->
<div id="container">

    <!-- Begin Header Wrapper -->
	<div id="headerWrapper">
        <header>
        	<!-- Begin Navigation -->
            <?php include 'includes/navigation.php';?>
            <!-- End Navigation -->
        	
        </header>            
	</div>
    <!-- End of Header Wrapper -->


	
    
    <!-- Begin Content -->
    <div class="wrapper">
    	<h1>Applicant Information</h1>
        
        <form action="" method="" class="form" name="ApplicantInfo" enctype="multipart/form-data">
        	<fieldset>
            	<legend>Recipient Information</legend>
                <label>
                	<span>First Name:</span> 
                    <input type="text" name="firstName" value="" placeholder="First Name" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Last Name:</span>
                    <input type="text" name="lastName" value="" placeholder="Last Name" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label><span>Age:</span>
                	<input type="text" name="age" value="" placeholder="Age" pattern="{0-9} {1,3}"  required>
                </label>
            	<label>
                	<span>Intellectual Age:</span>
                	<input type="text" name="intellectualAge" value="" placeholder="Intellectual Age" pattern="{0-9} {1,3}"  required>
                    </label>
                <legend>Ethnicity/Race(Check One):</legend>
                
                    <div class="form-checkbox"><input type="checkbox" name="ethnicity" value="Caucasian" />Caucasian</div>
                    <div class="form-checkbox"><input type="checkbox" name="ethnicity" value="Native American" />Native American</div>
                    <div class="form-checkbox"><input type="checkbox" name="ethnicity" value="Black/African-American" />Black/African-American</div>
                    <div class="form-checkbox"><input type="checkbox" name="ethnicity" value="Asian/Pacic Islander" />Asian/Pacific Islander</div>
                    <div class="form-checkbox"><input type="checkbox" name="ethnicity" value="Hispanic/Latino" />Hispanic/Latino</div>
                
            </fieldset>
            
            <fieldset>
            	<legend>Person Submitting Application:</legend>
                <label>
                	<span>Primary Contact:</span>
                    <input type="text" name="primaryContactName" value="" placeholder="Primary Contact" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Primary Contact Phone:</span>
                    <input type="text" name="primaryContactPhone" value="" placeholder="801-575-7777" pattern="{0-9()-} {10,20}"  required>
                </label>
                <label>
                	<span>Primary E-mail:</span>
                    <input type="text" name="email" value="" placeholder="JohnSmith@gmail.com" pattern="{^\S+@\S+$} {3,99}"  required>
                </label>
                <label>
                	<span>Relationship to Applicant:</span>
                	<input type="text" name="relationship" value="" placeholder="Relationship to Applicant" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Secondary Contact Phone:</span>
                	<input type="text" name="secondaryContactPhone" value="" placeholder="801-575-7777" pattern="{0-9().-} {10,20}"  required>
                </label>
                <label>
                	<span>Relationship to Applicant:</span>
                    <input type="text" name="secondaryRelationship" value="" placeholder="Relationship to Applicant" pattern="{a-zA-Z -._} {3,99}"  required>
                </label>
                <label>
                	<span>Agency Name:</span>
                    <input type="text" name="agencyName" value="" placeholder="Agency Name" required>
                </label>
                <label>
                	<span>Agency Location:</span>
                	<input type="text" name="agencyLocation" value="" placeholder="Agency Location" required>
                </label>
                <label>
                	<span>Agency Contact Phone Number:</span>
                	<input type="text" name="primaryContactPhone" value="" placeholder="801-575-7777" pattern="{0-9()-} {10,20}"  required>
                </label>
            </fieldset>
            <button type="submit">Submit Form</button>
            
            <p>** Applicant agrees to allow their picture and rst name to be placed on materials which can be given to individuals or corporate sponsors. All other personal
information will be kept condential. Please attach 2 wallet sized(2x3) color photographs to be placed on ornaments. Each donor will buy approximately $75
in gifts. Please indicate below which items are needed by following the guidelines for each box. Please call (801) 654-8449 if you have questions. **</p>
            </form>
            
    </div>
    <!-- End Content -->
    
    <!-- Begin Footer -->
    <?php include 'includes/footer.php';?>
    <!-- End Footer -->
</div>
<!-- End of Container -->
</body>
</html>
