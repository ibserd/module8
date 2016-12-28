$(function() {
  
  console.log('DOM załadowany');
  
  var carouselList = $("#carousel ul");
  
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
  
  function changeSlide() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  };

  changeSlide();
  
  setInterval(changeSlide, 3000);
  
});


