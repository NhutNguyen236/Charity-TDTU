$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    var form = $('#myForm'); // contact form
    var submit = $('.submit-btn'); // submit button
    var alert = $('.alert-msg'); // alert div for show alert message
    
    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "⚠️ Vui lòng hãy nhập tên của bạn",
                    minlength: "⚠️ Tên của bạn phải có ít nhất 2 kí tự"
                },
                subject: {
                    required: "⚠️ Vui lòng hãy nhập tiêu đề tin nhắn",
                    minlength: "⚠️ Tiêu đề phải có ít nhất 4 kí tự"
                },
                number: {
                    required: "⚠️ Vui lòng hãy nhập số điện thoại",
                    minlength: "⚠️ Số điện thoại phải có ít nhất 5 kí tự"
                },
                email: {
                    required: "⚠️ Vui lòng hãy nhập email của bạn"
                },
                message: {
                    required: "⚠️ Vui lòng hãy nhập nội dung tin nhắn",
                    minlength: "😘 Hãy nói cho chúng tôi nhiều hơn đi..."
                }
            },
            
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"/sendMail",
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})