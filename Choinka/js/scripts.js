function rysujChoinke(rows) {
 for (var n = 1; n <= rows; n++) {
   var star = '';    
   for (var m = 0; m < n*2-1; m++) {
     star += '*';
   }
   console.log(star);
 }
}

rysujChoinke(8);
