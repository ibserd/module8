var imionaOne = ['Ola', 'Magda', 'Kasia', 'Ania'],
    imionaOni = ['Michal', 'Zygmunt', 'Krzysztof'],
    wszystkie = imionaOne.concat(imionaOni);

console.log(wszystkie);

var wpiszImie = prompt('dodaj imie do zbioru wyświetlonego w konsoli: '),
    dodajImie = wszystkie.push(wpiszImie);

if (wszystkie.indexOf(wpiszImie) < 7) {
  wszystkie.splice(7, 1);
  console.log('Błąd: dodane imie powtarza się. Zbiór pozostaje niezmienny');
  console.log(wszystkie);
}

else {
  console.log(wszystkie);
}
