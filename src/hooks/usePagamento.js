import { useRef, useState } from "react";
import { possuiDigitosIguais } from "../utils/pagamento.js";

/* Controla a espera da simulação e impede processamentos simultâneos. */
export function usePagamento() {
  const [processando, setProcessando] = useState(false);
  const envioEmAndamento = useRef(false);

  async function processarPagamento(numero) {
    if (envioEmAndamento.current) {
      return null;
    }

    envioEmAndamento.current = true;
    setProcessando(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      return possuiDigitosIguais(numero) ? "falha" : "sucesso";
    } finally {
      envioEmAndamento.current = false;
      setProcessando(false);
    }
  }

  return { processando, processarPagamento };
}