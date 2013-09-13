/*!
 * Simple Bar Chart
 * Author: Arturo Bermejo - abermejo.cs@gmail.com
 */

var skillChart = {};

(function(){
  // Private variables / properties
  var data = null;
  var event_div  = null;
  var skills_container = null;
  var skill_bars = null;
 
  // Public Method
  this.init = function( obj ){
    data = obj.data
    event_div = $('#'+obj.event_div_id);
    skills_container = $('#'+obj.skills_container_id);
    skills_container.append('<div class="sc-skill-bars"><ul></ul></div>');
    skill_bars = $('.sc-skill-bars ul');
    createBars();
  };

  function createBars() {
    $.each(data, function(i, s){
      var bar = '<li class="sc-skill"> \
                  <span class="sc-skill-label">'+s.label+'</span> \
                  <div style="width:'+0+'%; background-color:'+s.bar_color+'"" data-percent="'+(s.percent-25)+'"\
                    class="sc-skill-bar"> \
                    <span class="sc-skill-percent">'+s.percent+'%</span> \
                  </div> \
                </li>'
      skill_bars.append(bar);
    });
  }

  this.show = function(){
    $('.sc-skill-bar').each(function(i, v){
      $(v).animate({
        width: $(this).attr('data-percent') + '%'
      })
    })
  }

  this.hide = function(){
    $('.sc-skill-bar').each(function(i, v){
      $(v).animate({
        width: '0%'
      })
    })
  }
 
}).apply( skillChart );