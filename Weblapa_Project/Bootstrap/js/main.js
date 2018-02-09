
$(function() {
  $('a[href*="#"]:not([href="#myCarousel"])').click(function() {
      var target = $(this.hash);

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
  });
});

$(document).ready(function(){

    $('#send-chat-message').click(function(){
        var username = $('#chat-username-input').val();
        // document.querySelector('#chat-username-input').value // <-- vanilla JS
        var comment = $('#chat-message-input').val();
        // document.querySelector('#chat-message-input').value // <-- vanilla JS

        var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        var commentElement = $('<div class="chat-message">' +
            '<h4>' + username + '</br><em>' + date + '</em></h4>' +
            '<p>' +
            comment +
             '</p>' +
         '</div>');
        $('#chat-window').append(commentElement);
        $('#chat-message-input').val('');
    });
});

