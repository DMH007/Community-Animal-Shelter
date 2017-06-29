/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
<script>
    function check_info(){
        var firstname = document.getElementById(firstname).value;
        var lastname = document.getElementById(lastname).value;
        var email = document.getElementById(email).value;
        var message = document.getElementById(message).value;
    }
    
        if(firstname=="" || lastnae=="" || email="" || message=""){
            alert("Please fill in all fields");
            return false;
        }
        else{
            return true;
        }
    </script>
    
    
}