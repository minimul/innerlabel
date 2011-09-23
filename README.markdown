# Jquery plugin innerlabel

### Demo page <a href="http://minimul.com/jquery-plugin-innerlabel.html" target="_blank">here</a>.

### Better way to do innerlabel

This innerlabel plugin uses the data-* attribute, which I would argue is a good use case for it; although, <a href="http://danwebb.net/2010/1/27/put-that-data-attribute-away-son-you-might-hurt-someone" target="_blank">this guy may not</a>.

### HTML
<pre class="brush:html;">

&lt;input type="text" value="" data-label="click me" class="self-label" /&gt;

</pre>


### JS
<pre class="brush:jscript;">

$('.self-label').innerlabel();

// Two options: labelColor and focusColor i.e.
$('.self-label').innerlabel({ labelColor: '#ccc', focusColor: 'red' });

</pre>

