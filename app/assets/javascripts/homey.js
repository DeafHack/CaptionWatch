$( document ).ready(function() {

  required = ["product_name", "complaint_address", "complaint_custom_blurb"];

  email = $("#complaint_email");
  errornotice = $("#error");

  emptyerror = "Please fill out this field.";
  emailerror = "Please enter a valid email.";

  $("#new_complaint").on("submit", function(){
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("needsfilled");
				input.parent().addClass("input_error");
				input.val(emptyerror);
				errornotice.fadeIn(750);
			} else {
				input.removeClass("needsfilled");
				input.parent().removeClass("input_error");
			}
		}

    if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
			email.addClass("needsfilled");
			email.parent().addClass("input_error");
			email.val(emailerror);
		}

		if ($(":input").hasClass("needsfilled")) {
			return false;
		} else {
			errornotice.hide();
			return true;
		}
  });

	$(":input").focus(function(){
	   if ($(this).hasClass("needsfilled") ) {
			$(this).val("");
			$(this).removeClass("needsfilled");
	   }
	});

	$(":input").keypress(function(){
	   if ($(this).parent().hasClass("input_error") ) {
			$(this).parent().removeClass("input_error");
	   }
	});
});
