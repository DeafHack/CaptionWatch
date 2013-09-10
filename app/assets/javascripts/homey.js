$( document ).ready(function() {
  
  required = ["company_name", "product_name"];

  email = $("#email");
  errornotice = $("#error");

  emptyerror = "Please fill out this field.";

  $("#new_complaint").on("submit", function(){
    alert(1);
    return false;
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("needsfilled");
				input.val(emptyerror);
				errornotice.fadeIn(750);
			} else {
				input.removeClass("needsfilled");
			}
		}

		if ($(":input").hasClass("needsfilled")) {
			return false;
		} else {
			errornotice.hide();
			return true;
		}    
  });
});

// $('document').ready(function() {
//   if($('#main').length){
//     console.log("element exists");
//   }
// });
