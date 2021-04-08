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
        $('#validation-form-amenities').validate({

            ignore: '.ignore, .select2-input',
            focusInvalid: true,
            rules: {
                'validation-name': {
                    required: true
                },
                'validation-radios': {
                    required: true
                },
                'text-field-label': {
                    required: true
                },
                'text-field-name': {
                    required: true
                },
                'text-field-id': {
                    required: true
                },
                'label-name': {
                    required: true
                },
                'check-name': {
                    required: true
                },
                'check-value': {
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
        $('input[name="validation-radios"]').on('click', function () {
            if ($(this).val() == 'text') {
                $('#textbox').show();
                $('#checkboxes').hide();
            } else if ($(this).val() == 'checkbox') {
                $('#textbox').hide();
                $('#checkboxes').show();
                $(".add_form_checkbox").click(function (e) {
                    var counter = parseInt($('#counter').val());
                    e.preventDefault();
                    $("#checkboxes").append('<div><div class="row">\n' +
                        '                            <div class="col-md-12">\n' +
                        '                                <div class="form-group">\n' +
                        '                                    <label class="form-label">Label Name</label>\n' +
                        '                                    <input type="text" class="label-name form-control" name="label-name_' + counter + '" id="label-name_' + counter + '" placeholder="Label Name">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="col-md-12">\n' +
                        '                                <div class="form-group">\n' +
                        '                                    <label class="form-label">Radio Button Name</label>\n' +
                        '                                    <input type="text" class="check-name form-control" name="check-name_' + counter + '" id="check-name_' + counter + '" placeholder="Checkbox Name">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="col-md-12">\n' +
                        '                                <div class="form-group">\n' +
                        '                                    <label class="form-label">Radio Box Value</label>\n' +
                        '                                    <input type="text" class="check-value form-control" name="check-value_' + counter + '" id="check-value_' + counter + '" placeholder="Checkbox Value">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div><a href="#" class="delete">Delete</a></div>'); //add input box

                    $('.label-name').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('.check-name').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('.check-value').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('#counter').val(counter + 1);
                });
                $("#checkboxes").on("click", ".delete", function (e) {
                    e.preventDefault();
                    $(this).parent('div').remove();
                })
            } else {
                $('#textbox').hide();
                $('#checkboxes').hide();
            }
        });

        $(function () {
            var values = [];
            var label_names = "";
            var check_names = "";
            var check_values = "";
            var action = "Add";
            var id = document.getElementById('validation-id').value;
            $("#submit").on("click", function () {
                var radio = $('input[name="validation-radios"]:checked').val();
                if (radio == "text") {
                    var type = radio;
                    var name = $("#validation-name").val();
                    var text_label = document.getElementById('text-field-label').value;
                    var text_name = document.getElementById('text-field-name').value;
                    var text_id = document.getElementById('text-field-id').value;
                    values.push({
                        id: id,
                        action: action,
                        type: type,
                        name: name,
                        textboxLabel: text_label,
                        textboxName: text_name,
                        textboxId: text_id
                    });
                    var values_new = (JSON.stringify(values));
                } else if (radio == "checkbox") {
                    var type = checkbox;
                    var name = $("#validation-name").val();
                    $('.label-name').each(function () {
                        var label_name = $(this).val();
                        label_names += $(this).val() + "\n";
                    });
                    $('.check-name').each(function () {
                        var check_name = $(this).val();
                        check_names += $(this).val() + "\n";
                    });
                    $('.check-value').each(function () {
                        var check_value = $(this).val();
                        check_values += $(this).val() + "\n";
                    });
                    values.push({
                        id: id,
                        action: action,
                        type: type,
                        name: name,
                        checkboxLabels: label_names,
                        checkboxNames: check_names,
                        checkboxValues: check_values
                    });
                    var values_new = (JSON.stringify(values));
                    label_names = "";
                    check_names = "";
                    check_values = "";
                } else {

                }
                var token = document.querySelector('meta[name="csrf-token"]').content;
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: 'POST',
                    url: '/amenity-management',
                    data: {formvalues: values_new, _token: token},
                    dataType: 'JSON',
                    success: function (data) {
                        console.log(data)
                        window.location.href = "/amenity-management";
                    },
                    error: function () {
                        console.log("error")
                    }
                });

            });
        });
    });
});
