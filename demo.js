function getRandomColor() {
  var letters = 'ABCDEF'.split('');
  var color = '#';
  for (var i=0;i<6;i++) {
    color += letters[Math.round(Math.random() * 5)];
  }
  return color;
}

function renderChildren(placekitten) {
  // Lets generate some child divs
  var $containers = $(".container");
  $containers.children().remove();
  $containers.each(function() {
    for(i=0;i<15;i++) {
      var $element = $("<div></div>"),
          height = Math.floor(Math.random() * 200) + 100,
          width = 200;
      if(placekitten) {
        var background = 'http://www.placekitten.com/'+width+'/'+height
      } else {
        var background = getRandomColor(),
            $img = $('<img src="http://placehold.it/'+width+'x'+Math.floor(height / 2)+'" />');
        $element.append($img);
      }
      $element.css({ background: background, height: height, width: width });
      $(this).append($element);
    }
  });
}
renderChildren(false);

// And now we can shapeshift!
$(".filter").on("click", function(e) {
  e.preventDefault();

  if($(this).hasClass("no-drag-animate")) {
    $container.shapeshift({animatedOnDrag: false});
  }
  if($(this).hasClass("no-drag")) {
    $container.shapeshift({draggable: false});
  }
  if($(this).hasClass("drag")) {
    $container.shapeshift();
  }
  if($(this).hasClass("hide")) {
    var $objects = $container.children().filter(":visible"),
        random = Math.round(Math.random()*7);
    $objects.eq(random).hide();
    $(".container").shapeshift();
  }
  if($(this).hasClass("show")) {
    var $objects = $container.children().filter(":hidden"),
        random = Math.round(Math.random()*3);
    $objects.eq(random).show();
    $(".container").shapeshift();
  }
  if($(this).hasClass("placekittens")) {
    renderChildren(true);
  }
})
$(".container").shapeshift();