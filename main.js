$(function () {
    //constant values for generating the password
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+=[]";


    $(".minVal").text($("#customRange1").attr("min"))
    $(".maxVal").text($("#customRange1").attr("max"))

    let length = $("#customRange1").val(); //custom value of the length of the password 

    $(".output").text("password length is: " + length);
    $("#customRange1").on("input", function () {
        length = $(this).val(); //changes length values dynamically from range slider
        $(".output").text("password length is: " + length);
    });

    /**
     * defines and changes the input "checked" attribute after click on switch buttons
     */
    $(".form-check-input").click(function (e) {
        $(this).is(":checked") ? $(this).attr('checked', true) : $(this).attr('checked', false);
    });


    /**
      * function gets the parameters 
      * @param length : password length, as a number
      * @param uppercase : boolean value, if password should contain uppercase letters
      * @param lowercase : boolean value, if password should contain lowercase letters
      * @param numbers : boolean value, if password should contain numbers
      * @param symbols : boolean value, if password should contain symbols
      */
    function generatePassword(length, uppercase, lowercase, numbers, symbols) {
        let result = ""
        result += uppercase ? upperCase : "";
        result += lowercase ? lowerCase : "";
        result += numbers ? number : "";
        result += symbols ? symbol : "";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += result.charAt(Math.floor(Math.random() * result.length));
        }
        return (password)
    }

    /**
     * this click event is responsible for calling password generating function and passes as parameters length of the 
     * password and the states of switch buttons.
     */
    $(".generate").click(function () {
        $(".generated-password").val(generatePassword(length, $("#uppercase").is(":checked"), $("#lowercase").is(":checked"), $("#numbers").is(":checked"), $("#symbols").is(":checked")));
    });

});
