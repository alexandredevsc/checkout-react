import { z } from "zod";

/* Remove apenas os separadores permitidos no número do cartão. */
export function normalizarNumeroCartao(numero) {
  return numero.replace(/[\s-]/g, "");
}

/* Valida o formato dos campos antes de executar a compra. */
export const pagamentoSchema = z.object({
  titular: z.string().trim().min(1, "Informe o nome do titular."),

  numero: z
    .string()
    .transform(normalizarNumeroCartao)
    .pipe(
      z.string().regex(/^\d{16}$/, "Informe um cartão com 16 dígitos."),
    ),

  validade: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Informe a validade em MM/AA, com mês entre 01 e 12.",
    ),

  cvv: z.string().regex(/^\d{3}$/, "Informe um CVV com 3 dígitos."),
});

/* Esta regra decide o resultado da compra após validar o formato. */
export function possuiDigitosIguais(numero) {
  const numeroLimpo = normalizarNumeroCartao(numero);

  return /^(\d)\1{15}$/.test(numeroLimpo);
}