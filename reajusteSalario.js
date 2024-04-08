var salario=parseFloat(prompt("digite o salário atual"));

var reajuste=parseFloat(prompt("digite o reajuste"));

var _reajusteSalario=( salario * reajuste / 100);

var novo_salario=(salario + _reajusteSalario);

alert("O salário atual é:"+ novo_salario + "R$");