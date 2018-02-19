
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
});

$('#user').on("submit", function (e){

  var phone = $('#phone').val();
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
});

$('#user').on("submit", function (e){

  var today = new Date();
  var nowyear = today.getFullYear();
  var nowmonth = today.getMonth();
  var nowday = today.getDate();

  var birthday = $('#birthday').val();

  var birth = {
    raw: birthday.split('/' || '-')
  };

  var birthyear = Number(birth.raw[0]);
  var birthmonth = Number(birth.raw[0]) + 1;
  var birthdayday = Number(birth.raw[1]);

  var age = nowyear - birthyear;
  var age_month = nowmonth - birthmonth;
  var age_day = nowday - birthdayday;

  var birthcheck = ((age === 18 && age_month <= 0 && age_day <= 0) || age < 18);

  e.preventDefault();

  if (!birthcheck)
  {
    console.log('not valid birthday');
    $('#notoldenough').remove();
    $('#user').append('<li id="notoldenough">You need to be 18 years or old to volunteer, sorry ): </li>');
    return false;
  }
  else
  {
    $(this).remove();
  }
});

$('#user').on("submit", function (e){

  var purpose = document.getElementById("purpose");
  var purposefilter = purpose.value.length <= 50
  var purposefilter2 = purpose.value.length >= 10;

  e.preventDefault();

  if (purposefilter)
  {
    console.log('not enough charaters');
    $('#purposeneeded').remove();
    $('#user').append('<li id="purposeneeded">Its a minimum of 10 charaters</li>');

    return false;
  }
  else if (purposefilter2)
  {
    console.log('too many enough charaters');
    $('#purposeneeded').remove();
    $('#user').append('<li id="purposeneeded">Its a maximum of 50 charaters</li>');

    return false;
  }
  else
  {
    $(this).remove();
  }
});
