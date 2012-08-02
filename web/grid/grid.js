$(function() {
  var $bg = $('#bg');

  var position = $bg.css('position');
  (position === 'static') && $bg.css('position', 'relative');
  var bgW = $bg.width();
  var bgH = $bg.height();

  var $gridLayer = $('<div />').attr('id', 'grid-layer');
  $gridLayer.appendTo($bg);

  var gridCol = 12;
  var gridW = bgW / gridCol;
  var gridH = gridW;
  var gridRow = bgH * 1.5 / gridH + 1;  // not precise

  for (var row = 0; row < gridRow; row++) {
    for (var col = 0; col < gridCol; col++) {
      var grid = $('<div />')
        .addClass('grid')
        .width(gridW)
        .height(gridH)
        .appendTo($gridLayer);
    }
  }

});