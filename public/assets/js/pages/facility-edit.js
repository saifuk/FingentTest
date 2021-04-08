'use strict';
$(document).ready(function () {
    $(function () {
        var radio = $('input[name="validation-radios"]:checked').val();
        if (radio == "text") {
            $('#textbox').show();
            $('#radios').hide();
        } else if (radio == "radio") {
            $('#textbox').hide();
            $('#radios').show();
            $("#add_fields").click(function (e) {
                var counter = parseInt($('#counter').val());
                e.preventDefault();
                $("#radios").append('<div><div class="row">\n' +
                    '                            <div class="col-md-12">\n' +
                    '                                <div class="form-group">\n' +
                    '                                    <label class="form-label">Label Name</label>\n' +
                    '                                    <input type="text" class="label-name form-control" name="label-name_' + counter + '" id="label-name_' + counter + '" placeholder="Label Name">\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                            <div class="col-md-12">\n' +
                    '                                <div class="form-group">\n' +
                    '                                    <label class="form-label">Check Box Name</label>\n' +
                    '                                    <input type="text" class="radio-name form-control" name="radio-name_' + counter + '" id="radio-name_' + counter + '" placeholder="Radio Button Name">\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                            <div class="col-md-12">\n' +
                    '                                <div class="form-group">\n' +
                    '                                    <label class="form-label">Check Box Value</label>\n' +
                    '                                    <input type="text" class="radio-value form-control" name="radio-value_' + counter + '" id="radio-value_' + counter + '" placeholder="Radio Button Value">\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                        </div><a href="#" class="delete">Delete</a></div>'); //add input box

                $('.radio-value').each(function () {
                    $(this).rules("add", {
                        required: true,
                    });
                });
                $('.radio-name').each(function () {
                    $(this).rules("add", {
                        required: true,
                    });
                });
                $('.label-name').each(function () {
                    $(this).rules("add", {
                        required: true,
                    });
                });
                $('#counter').val(counter + 1);
            });
            $("#radios").on("click", ".delete", function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
            })
        } else {
            $('#textbox').hide();
            $('#radios').hide();
        }
    });
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
        $('#validation-form-facilities').validate({

            ignore: '.ignore, .select2-input',
            focusInvalid: false,
            rules: {
                'validation-name': {
                    required: true
                },
                'validation-radios': {
                    required: true
                },
                'validation-name-label': {
                    required: true
                },
                'validation-name-field': {
                    required: true
                },
                'validation-name-id': {
                    required: true
                },
                'label-name': {
                    required: true
                },
                'radio-name': {
                    required: true
                },
                'radio-value': {
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
                $('#radios').hide();
            } else if ($(this).val() == 'radio') {
                $('#textbox').hide();
                $('#radios').show();
                $("#add_fields").click(function (e) {
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
                        '                                    <label class="form-label">Check Box Name</label>\n' +
                        '                                    <input type="text" class="radio-name form-control" name="radio-name_' + counter + '" id="radio-name_' + counter + '" placeholder="Radio Button Name">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                            <div class="col-md-12">\n' +
                        '                                <div class="form-group">\n' +
                        '                                    <label class="form-label">Check Box Value</label>\n' +
                        '                                    <input type="text" class="radio-value form-control" name="radio-value_' + counter + '" id="radio-value_' + counter + '" placeholder="Radio Button Value">\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div><a href="#" class="delete">Delete</a></div>'); //add input box

                    $('.radio-value').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('.radio-name').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('.label-name').each(function () {
                        $(this).rules("add", {
                            required: true,
                        });
                    });
                    $('#counter').val(counter + 1);
                });
                $("#radios").on("click", ".delete", function (e) {
                    e.preventDefault();
                    $(this).parent('div').remove();
                })
            } else {
                $('#textbox').hide();
                $('#radios').hide();
            }
        });
    });
    $(function () {
        var values = [];
        var label_names = "";
        var radio_names = "";
        var radio_values = "";
        var id = document.getElementById('validation-id').value;
        var action = "Edit";
        $("#submit").on("click", function () {
            var radio = $('input[name="validation-radios"]:checked').val();
            if (radio == "text") {
                var type = radio;
                var name = $("#validation-name").val();
                var text_label = document.getElementById('textfield_label').value;
                var text_name = document.getElementById('textfield_name').value;
                var text_id = document.getElementById('textfield_id').value;
                values.push({
                    action: action,
                    id: id,
                    type: type,
                    name: name,
                    textboxLabel: text_label,
                    textboxName: text_name,
                    textboxId: text_id
                });
                var values_new = (JSON.stringify(values));
            } else if (radio == "radio") {
                var type = radio;
                var name = $("#validation-name").val();
                $('.label-name').each(function () {
                    var label_name = $(this).val();
                    label_names += $(this).val() + "\n";
                });
                $('.radio-name').each(function () {
                    var radio_name = $(this).val();
                    radio_names += $(this).val() + "\n";
                });
                $('.radio-value').each(function () {
                    var radio_value = $(this).val();
                    radio_values += $(this).val() + "\n";
                });
                values.push({
                    action: action,
                    id: id,
                    type: type,
                    name: name,
                    checkboxLabels: label_names,
                    checkboxNames: radio_names,
                    checkboxValues: radio_values
                });
                var values_new = (JSON.stringify(values));
                label_names = "";
                radio_names = "";
                radio_values = "";
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
                url: '/facility-management',
                data: {formvalues: values_new, _token: token},
                dataType: 'JSON',
                success: function () {
                    window.location.href = "/facility-management";
                },
                error: function () {
                    console.log("error")
                }
            });

        });
    });
});
