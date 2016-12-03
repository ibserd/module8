var a = prompt('wpisz pierwszą liczbę')
var b = prompt('wpisz drugą liczbę')
var wynik = a*a + 2*a*b + b*b
if (wynik>0)
  {
  console.log('wynik jest dodatni i wynosi=' + wynik)
  }
else if (wynik<0)
  {
  console.log('wynik jest ujemny i wynosi=' + wynik)
  }
else
  {
   console.log('wynik jest równy 0')
  }
  
