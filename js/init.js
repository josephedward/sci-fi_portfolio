$(document).ready(function() {
// reset();
// addSlidesToCarosel();
// addProjectDropdown();
// bindBreakPointEvents();

bindClickEvents();

});  

function reset(){
    $("html").reset("all","unset");
}


// function bindBreakPointEvents(){

// $(window).on('lessThan-md', function() {
//     // outputListenExecuteHide($outputListenExecute);
//     // $outputListenExecute.find('.output--listen-execute__sm').show();
//     $(".blackSpace").hide();
// });

// $(window).bind('breakpoint-change', function(e) {
//     var $outputListening = $('#output-listening');
//     $outputListening.find('#output-listening--current').html(e.to);
//     $outputListening.find('#output-listening--previous').html(e.from);
//     console.log("breakpoint change");
//   });

//   $(window).breakpoints('inside', 'sm', function() {
//     outputListenExecuteHide($outputListenExecute);
//     $outputListenExecute.find('.output--listen-execute__sm').show();
//   });

// }