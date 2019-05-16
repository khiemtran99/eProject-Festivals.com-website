/************
Payform for book order
************/

$(document).ready(function(){
   $('.error').hide();
   $('.successMessage').hide();
   $('#submitbtn').click(function(){
      $('.error').hide();
      $('.successMessage').hide();
      var name = $('input#fname').val();
      if (!name) {
         $('label#fname_error').show();
         $('input#fname').focus();
         return false;
      }

      var email = $('input#email').val();
      if (!email) {
         $('label#email_error').show();
         $('input#email').focus();
         return false;
      }

      var address = $('input#addr').val();
      if (!address) {
         $('label#add_error').show();
         $('input#addr').focus();
         return false;
      }

      var city = $('input#city').val();
      if (!city) {
         $('label#city_error').show();
         $('input#city').focus();
         return false;
      }

      var state = $('input#state').val();
      if (!state) {
         $('label#state_error').show();
         $('input#state').focus();
         return false;
      }

      var zipcode = $('input#zip').val();
      if (!zipcode) {
         $('label#zip_error').show();
         $('input#zip').focus();
         return false;
      }

      var cardname = $('input#cname').val();
      if (!cardname) {
         $('label#cname_error').show();
         $('input#cname').focus();
         return false;
      }

      var creditCardNumber = $('input#ccnum').val();
      if (!creditCardNumber) {
         $('label#ccnum_error').show();
         $('input#ccnum').focus();
         return false;
      }

      var expiredMonth = $('input#expmonth').val();
      if (!expiredMonth) {
         $('label#expmonth_error').show();
         $('input#expmonth').focus();
         return false;
      }

      var expiredYear = $('input#expyear').val();
      if (!expiredYear) {
         $('label#expyear_error').show();
         $('input#expyear').focus();
         return false;
      }

      var cvvNumber = $('input#cvv').val();
      if (!cvvNumber) {
         $('label#cvv_error').show();
         $('input#cvv').focus();
         return false;
      }

      if (name && email && address && city && state && zipcode && cardname && creditCardNumber && expiredMonth && expiredYear && cvvNumber) {
         $('.successMessage').show();
         return false;
      }
   });
});
