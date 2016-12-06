var a = prompt('wpisz wartość dla a ='),
   h = prompt('wpisz wartość dla h =');

var result = getTriangleArea(a, h);

if (result === -1) {
 console.log('Wystąpił błąd');
}


function getTriangleArea(a, h) {
 var triangleArea = -1;
   
 if ( (a > 0) && (h > 0) ) {
   triangleArea = a*h/2
 }
   
 return triangleArea;
}
