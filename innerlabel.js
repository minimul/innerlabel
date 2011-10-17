/*  innerlabel jquery plugin is written by Christian Pelczarski
 *  and is freely distributable under the terms of an MIT-style license.
/*--------------------------------------------------------------------------*/
(function($){

  var methods = {
    init: function(options) { 
      this.data('innerlabel', $.extend({ labelColor: 'gray', focusColor: 'black' },options)); 
      var settings = this.data('innerlabel');
      return this.each(function(){
        var $this = $(this);
        var labelText = $this.attr('data-label');
        if(!$this.val() || labelText == $this.val()){
          $this.val(labelText); 
          $this.css({ color: settings.labelColor });
        }
        $this.bind({ focus: methods.focus, blur: methods.blur });
      });
    },
    focus: function(){
      var $this = $(this);
      var settings = $this.data('innerlabel');
      if($this.attr('data-label') == $this.val()){
        $this.val('');
        $this.css({ color: settings.focusColor });
      }
    },
    blur: function(){
      var $this = $(this);
      var settings = $this.data('innerlabel');
      if(!$this.val()){
        $this.val($this.attr('data-label'));
        $this.css({ color: settings.labelColor });
      }
    }
  };

  $.fn.innerlabel = function(method){
    // Method calling logic
    if(methods[method]){
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if(typeof method === 'object' || ! method){
      return methods.init.apply(this, arguments);
    }else{
      $.error( 'Method ' +  method + ' does not exist on jQuery.innerlabel' );
    }    
  };
 
})(jQuery);

