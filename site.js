
$('#user').on("submit", function (e){

    var email = $('#email').val();
    var validfilter =/.+@.+/;

    e.preventDefault();

    if (!validfilter.test(email))
    {
      console.log('not valid email');
      $('#emailneeded').remove();
      $('#user').append('<li id="emailneeded">You need to enter a vaild email</li>');

      return false;
    }
    else
    {
      $(this).remove();
    }
  }
);

$('#user').on("submit", function (e){

    var phonenumber = $('#phone').val();
    var phonefilter = /\d{3}.+\d{3}.+\d{4}/;

    e.preventDefault();

    if (!phonefilter.test(phone))
    {
      console.log('not valid phone number');
      $('#phonenumberneeded').remove();
      $('#user').append('<li id="phonenumberneeded">You need to enter a vaild phone number</li>');

      return false;
    }
    else
    {
      $(this).remove();
    }
  }
);
