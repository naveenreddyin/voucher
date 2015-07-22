/**
 * Created by naveenkumarvasudevan on 7/20/15.
 */

// We define a function that takes one parameter named $.
(function ($) {
    // Use jQuery with the shortcut:
    $(document).ready(function() {

        $('#copy-code').click(function(){
            $("body").append("<input type='text' id='temp' style='position:absolute;opacity:0;'>");
            $("#temp").val($(this).parent().parent().text()).select();
            document.execCommand("copy");
            $("#temp").remove();
        });

    });

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));