const somaAteIndice = (): number => {
  let INDICE = 13,
    SOMA = 0,
    K = 0;

  while (K < INDICE) {
    K++;
    SOMA += K;
  }

  return SOMA;
};

console.log(somaAteIndice()); // 91
console.log("\n");

const isFibonacci = (number: number): boolean => {
  let prev = 0;
  let current = 1;

  if (number === prev || number === current) {
    return true;
  }

  while (current <= number) {
    if (current === number) {
      return true;
    }

    [prev, current] = [current, prev + current];
  }

  return false;
};

console.log(isFibonacci(144)); // true
console.log("\n");

const printFaturamentos = () => {
  const faturamentos = [800, 0, 0, 700, 1200, 500, 1800];

  const faturamentosComValor = faturamentos.filter((valor) => valor > 0);
  const menor = Math.min(...faturamentosComValor);
  const maior = Math.max(...faturamentosComValor);
  const media =
    faturamentosComValor.reduce((acc, val) => acc + val, 0) /
    faturamentosComValor.length;
  const diasAcimaMedia = faturamentosComValor.filter(
    (valor) => valor > media
  ).length;

  return { menor, maior, diasAcimaMedia };
};

const data = printFaturamentos();
console.log("Menor faturamento:", data.menor); // 500
console.log("Maior faturamento:", data.maior); // 1800
console.log("Dias acima da média:", data.diasAcimaMedia); // 2
console.log("\n");

const getPercentualFaturamento = () => {
  const result = {};

  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    result[estado] = percentual;
  }

  return result;
};

const result = getPercentualFaturamento();

for (const estado in result) {
  console.log(`${estado}: ${result[estado].toFixed(3)}%`);
}

// SP: 37.528%
// RJ: 20.291%
// MG: 16.171%
// ES: 15.028%
// Outros: 10.981%
console.log("\n");

const reverse = (str: string) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverse("Daniel Ramos"));
