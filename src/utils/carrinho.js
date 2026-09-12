/* Converte o preço para centavos e calcula o valor da quantidade escolhida */
export function calcularSubtotalCentavos(produto) {
    const precoCentavos = Math.round(produto.precoUnitario * 100);
    return precoCentavos * produto.quantidade;
}

/* Soma os subtotais dos produtos e retorna o total em centavos */
export function calcularTotalCentavos(produtos) {
    return produtos.reduce((total, produto) => {
        return total + calcularSubtotalCentavos(produto);
    }, 0);
}

/* Converte centavos para reais e formata o valor para exibição */
export function formatarMoeda(valorCentavos) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorCentavos / 100);
}