<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Animal Community Shelter</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<title>Animal Community Center</title>
</head>
<body>
    
    <script>
    
    function check_info(){
        var firstname = document.getElementById(firstname).value;
        var lastname = document.getElementById(lastname).value;
      //var email = document.getElementById(email).value;
      //var message = document.getElementById(message).value;
    }
    
        if(firstname=="" || lastnae==""){
            alert("Please fill in all fields");
            return false;
        }
        else{
            return true;
        }
    </script>  

     <!--Form-->
<h1>Please complete the form if interested in adopting one of our amazing Pets</h1>   
<form action="/page.html" method="post" onsubmit= "return check_info()">
First name:<br>
<input type="text" name="firstname" id="firstname">
<br>
Last name:<br>
<input type="text" name="lastname" id="lastname">
<br><br>
Email:<br>
<input type="email" name="email" placeholder="email" id="email">
<br><br>
Message:<br>
<textarea name="info" name="message" length="200" placeholder="messages" id="messages">
        </textarea><br>
        <input type="submit"> <br><br>     
</body>
</html>