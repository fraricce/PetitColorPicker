/*
 * petitPicker.js - JQuery plugin 
 * a minimalist color picker
 * MIT Licensed 
 * Francesco Ricceri (fraricce@gmail.com)
 *
 */

(function( $ ) {
  
  $.fn.petitPicker = function(callBack) {

    var colors = { 'black': '#000',
      'red' : '#f00', 
      'yellow' : '#ff0',
      'green' : '#0f0',
      'blue' : '#00f',
      'magenta' : '#f0f',
      'cyan' : '#0ff' };
      
      $(this).html('');
      $(this).append("<a id='btnToggle'>Color..</a>");
      
      var anchor = $(this).find('#btnToggle');
      var fatherId = $(this).attr('id');
      anchor.live('click', function() { $('#' + fatherId + ' .ptCell').toggle('fast'); })     
      
      var id;
      
      for (var i in colors) {
        id = i;                
        $(this).append("<div class='ptCell ptFont ptCtr ' id='" + id + "'  style='background-color: " + colors[i] + "'>" + i +  "</div>");
          
        (function(i){
          $('#' + id).click(function() {
            callBack(i, colors);
            $(' .ptCell').hide();
          });
          
        })(i);      
      }
  };
  
})(jQuery);