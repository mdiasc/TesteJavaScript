var anos=parseInt(prompt("Digite sua idade:"));

var meses=parseInt(prompt("Digite a quantidade de meses que passou do seu aniversário"));

var dias=parseInt(prompt("Digite a quanidade de dias que passaram desde seu último aniversário"));

var dias_total=parseFloat(anos * 365 + meses *30 + dias);

alert("Você completou" + dias_total + "dias de vida")
