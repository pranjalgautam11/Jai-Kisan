(function($) {
    "use strict";
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function() {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });
    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }

        // Phone number validation (change 'phone' to match your phone input field ID or name)
    if ($(input).attr('id') === 'phone' || $(input).attr('name') === 'phone') {
        // Modify this regular expression to match your phone number format
        if (!inputValue.match(/^\+?\d{2,}$/)) {
          return false;
        }
      } else {
        // Other input validation
        if (inputValue === '') {
          return false;
        }
      }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
}
)(jQuery);
