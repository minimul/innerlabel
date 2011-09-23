/*  innerlabel jquery plugin is written by Christian Pelczarski
 *  and is freely distributable under the terms of an MIT-style license.
/*--------------------------------------------------------------------------*/
(function($){
  $.fn.innerlabel = function(options){
    var defaults = { labelColor: 'gray', focusColor: 'black' };
    var settings = $.extend(defaults,options);
    var labelText = this.attr('data-label');
    if(!this.val() || labelText == this.val()){
      this.val(labelText); 
      this.css({ color: settings.labelColor });
    }
    var el = this;
    this.bind({
      focus: function(){
        if(labelText == el.val()){
          el.val('');
          el.css({ color: settings.focusColor });
        }
      },
      blur: function(){
        if(!el.val()){
          el.val(labelText);
          el.css({ color: settings.labelColor });
        }
      }
    });
    return this; 
  };
})(jQuery);

