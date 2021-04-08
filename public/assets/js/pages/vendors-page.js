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

        // [ Initialize validation ]
        $('#validation-form-vendors').validate({

            ignore: '.ignore, .select2-input',
            focusInvalid: true,
            rules: {
                'first-name': {
                    required: true
                },
                'last-name': {
                    required: true
                },
                'address': {
                    required: true
                },
                'landmark': {
                    required: true
                },
                'email': {
                    required: true,
                    email: true
                },
                'phone': {
                    required: true
                },
                'website': {
                    required: true
                },
                'salesperson': {
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
            },
        });
    });

    $(function () {
        $('#dynamic div').find('input').each(function () {
            $(this).rules("add", {
                required: true,
            });
        });
        $('#dynamic-amenity div').find('input').each(function () {
            $(this).rules("add", {
                required: true,
            });
        });
    });
});
