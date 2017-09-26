// Mark wish when click on wish list
$('ul').on('click','li',function(){
  $(this).toggleClass('strike_trough');
});

// fade out wishlist and remove element from HTML
$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){ // parent stop for bubbeling
    $(this).remove();
  });
  event.stopPropagation();
});

// add wishlist to list
$('input[type="text"').keypress(function(event){

  if (event.which===13 && $(this).val()!=''){
    $('ul').append('<li><span><i class="fa fa-trash-o"></i></span> '+$(this).val()+'</li>');
    $(this).val('');
  }
});

$('.fa-plus').click(function(){
  $('input[type="text"').fadeToggle();
})
