var txt = ('Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.'),
    txt2 = ('Zielone słonie');
var txt2Up = txt2.toUpperCase();
console.log(txt2Up);
var txtRep = txt.replace('Papugi', txt2Up);
console.log(txtRep);
var txtRep2 = txtRep.substr(0, txtRep.length/2);
console.log(txtRep2);
