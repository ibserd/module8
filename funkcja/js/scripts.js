var triangle1Area = getTriangleArea(3, 6),
    triangle2Area = getTriangleArea(2, 5),
    triangle3Area = getTriangleArea(8, 4);

function getTriangleArea(a, h) {

var triangle1Area = -1,
    triangle2Area = -1,
    triangle3Area = -1;
  
 if ( (a > 0) && (h > 0) ) {
   triangle1Area = a*h/2;
   triangle2Area = a*h/2;
   triangle3Area = a*h/2;
 } 
 return triangle1Area, 
   triangle2Area, 
   triangle3Area;
}

if (triangle1Area, 
   triangle2Area, 
   triangle3Area === -1) {
  
 console.log('Wystąpił błąd - niepoprawne dane');
  
}
else {
 console.log('Pola trójkątów wynoszą =' + triangle1Area + ', ' 
   + triangle2Area + ' oraz '
   + triangle3Area)
}

