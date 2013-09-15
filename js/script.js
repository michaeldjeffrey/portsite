$(document).on('ready', function() {

  /* Edit skills data here */

  var skills_data = [
    {
      label : "Bootstrap/ Foundation",
      percent: 90,
      bar_color: "#194F79"
    },
    {
      label : "Node",
      percent: 50,
      bar_color: "#0E6442"
    },
    {
      label : "Backbone",
      percent: 60,
      bar_color: "#96517A"
    },
    {
      label : "Django",
      percent: 70,
      bar_color: "#a6a1aA"
    }

  ];

  // Initialize Skill chart plugin
  skillChart.init({
    data : skills_data,
    event_div_id: 'aboutme',
    skills_container_id: 'skill-chart'
  });

  // Navigation
  $('#nav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      end: function(newCurrent) {
        if (newCurrent == '#aboutme')
          skillChart.show();
        else
          skillChart.hide();
      },
      scrollChange: function(current){
        var current = current.find('a').attr('href');
        if (current == '#aboutme')
          skillChart.show();
        else
          skillChart.hide();
      }
  });

});
