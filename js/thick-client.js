var homeIcon = document.getElementsByClassName('icon-moda-home')[0];
var overviewIcon = document.getElementsByClassName('icon-moda-overview')[0];
homeIcon.addEventListener('click', function() {
  Reveal.slide(0,0,0);
});
overviewIcon.addEventListener('click', function() {
  Reveal.toggleOverview();
});

