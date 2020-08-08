$('#language').click(function () {
  if ($(this).attr('#lanugage') == 'selected') {
    $(this).removeClasss('selected').next('.language-list').slideUp('fact');
  } else {
    $('#language').removeClass('selected');
    $(',language-list').hide();
    $(this).addClass('selected'), next('.language-list').slideDown('fast');
  }
});
