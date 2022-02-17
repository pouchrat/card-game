
function test() {
    $(".someclass").css("color","blue");
    $("<p>Hewwo....</p>").appendTo($(".someclass").parent());
}

$(document).ready(function(){test()});

