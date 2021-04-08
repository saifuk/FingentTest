'use strict';
$(document).ready(function () {
    $(function () {
        // [ Add phone validator ]
        $.validator.addMethod(
            'phone_format',
            function (value, element) {
                return this.optional(element) || /^\(\d{3}\)[ ]\d{3}\-\d{4}$/.test(value);
            },
            'Invalid phone number.'
        );
        $.validator.addMethod("requiredIfChecked", function (val, ele, arg) {
                if ($(".menu").is(":checked") && ($.trim(val) == '')) {
                    return false;
                }
                return true;
            },
            $.validator.messages.my_custom_method
        );
        // [ Initialize validation ]
        $('#validation-form-users').validate({

            ignore: '.ignore, .select2-input',
            focusInvalid: false,
            rules: {
                'name': {
                    required: true
                },
                'email': {
                    required: true,
                    email: true,
                },
                'password': {
                    required: true
                },
                'role': {
                    required: true
                },

            },

            // Errors //

            errorPlacement: function errorPlacement(error, element) {
                var $parent = $(element).parents('.form-group');

                // Do not duplicate errors
                if ($parent.find('.jquery-validation-error').length) {
                    return;
                }

                $parent.append(
                    error.addClass('jquery-validation-error small form-text invalid-feedback')
                );
            },
            highlight: function (element) {
                var $el = $(element);
                var $parent = $el.parents('.form-group');

                $el.addClass('is-invalid');

                // Select2 and Tagsinput
                if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                    $el.parent().addClass('is-invalid');
                }
            },
            unhighlight: function (element) {
                $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
            }
        });
    });
    $(function () {
        $('input[name="menu"]').on('click', function () {
            if ($(this).is(":checked")) {
                $('#menu-data').show();
            } else {
                $('#menu-data').hide();
            }
        })
    });
    $(function () {
        if($('input[name="menu"]').is(":checked"))
            $("#menu-data").show();
        else
            $("#menu-data").hide();

    });
});
