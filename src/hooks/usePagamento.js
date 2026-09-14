import { useEffect, useRef, useState } from "react";
import { possuiDigitosIguais } from "../utils/pagamento.js";

/* Controla o processamento e descarta resultados após sair da página. */
export function usePagamento() {
    const [processando, setProcessando] = useState(false);
    const envioEmAndamento = useRef(false);
    const paginaAtiva = useRef(false);

    /* Registra quando a página está montada e quando é removida. */
    useEffect(() => {
        paginaAtiva.current = true;

        return () => {
            paginaAtiva.current = false;
        };
    }, []);

    async function processarPagamento(numero) {
        if (envioEmAndamento.current || !paginaAtiva.current) {
            return null;
        }

        envioEmAndamento.current = true;
        setProcessando(true);

        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 1500);
            });

            /* Ao sair do pagamento, o resultado não deve provocar navegação. */
            if (!paginaAtiva.current) {
                return null;
            }

            return possuiDigitosIguais(numero) ? "falha" : "sucesso";
        } finally {
            envioEmAndamento.current = false;

            if (paginaAtiva.current) {
                setProcessando(false);
            }
        }
    }

    return { processando, processarPagamento };
}