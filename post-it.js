var Board = function( selector ) {
  // Your board related code goes here
  
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );
  
  function initialize() {
    $elem.on('click', function(){
      new PostIt($elem);
    });
    // What needs to happen when this object is created?
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
  // This code will run when the DOM has finished loading
  new Board('#board');
});
