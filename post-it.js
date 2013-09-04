var Board = function( selector ) {

  var $elem = $( selector );
  
  function initialize() {
    $elem.on('click', function(){
      new PostIt($elem);
    });
  };

  initialize();
};

var PostIt = function(element) {

  function initialize() {
    var postItDivs = '<div class="post-it"><a href="#" >X</a><p contenteditable="true" class="header">header</p><p contenteditable="true" class="content">content</p></div>'
    $(element).append(postItDivs);
      makeDraggable();
  }

  makeDraggable = function() {
    $('.post-it').draggable();
  }

  initialize();

  $('a').on('click', function(event){
    event.stopPropagation();
    $(this).closest('.post-it').remove();
  })

  $(".header").on("mousedown", function(event) {
    event.stopPropagation();
  });

  $(".content").on("mousedown", function(event) {
    event.stopPropagation();
  });
};

$(document).ready(function(){
  new Board('#board');
});