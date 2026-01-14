import { cnpjError } from "../errors/cnpjError.js";

export default function validateCNPJ(cnpj: string): string {
  const cleanCNPJ = cnpj.replace(/\D/gm, "");
  checkSize(cleanCNPJ);
  checkSameDigits(cleanCNPJ);
  checkSum(cleanCNPJ);
  return cleanCNPJ;
}

function checkSize(cnpj: string) {
  if (cnpj.length !== 14) {
    throw new cnpjError("Tamanho inválido");
  }
}

function checkSameDigits(cnpj: string) {
  if (/^(\d)\1+$/.test(cnpj)) {
    throw new cnpjError("CNPJ Inválido, digitos repetidos.");
  }
}

function checkSum(cnpj: string) {
  let digits: number[] = [];
  for (let i = 0; i <= 11; i++) {
    digits[i] = Number(cnpj[i]);
  }
  const verificationDigit1 = calcDV(digits, firstWeight);
  let updatedDigits = digits;
  updatedDigits.push(verificationDigit1);
  const verificationDigit2 = calcDV(updatedDigits, secondWeight);
  if (
    Number(cnpj[12]) !== verificationDigit1 ||
    Number(cnpj[13]) !== verificationDigit2
  ) {
    throw new cnpjError("Erro ao validar número do CNPJ");
  }
}

function calcDV(digits: number[], weightArray: number[]): number {
  let accumulator = 0;
  for (let i = 0; digits.length > i; i++) {
    const weight = weightArray[i];
    const digit = digits[i];
    if (weight !== undefined && digit !== undefined) {
      accumulator = accumulator + weight * digit;
    }
  }
  return accumulator % 11 < 2 ? 0 : 11 - (accumulator % 11);
}

const firstWeight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const secondWeight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
