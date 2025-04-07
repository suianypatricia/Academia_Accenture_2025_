#utf-8
#language: pt

Funcionalidade: Teste de cotacao de seguro automotivo
    Cenario: Preenchimento do formulario com dados validos 
        Dado que o usuário esteja na pagina inicial do Tricentis 
        Quando clica na opção Automobile
        E preenche a aba Enter Vehicle Data
        E preenche a aba Enter Insurant Data
        E preenche a aba Enter Product Data
        E seleciona uma opcao em Select Price Option
        E envia a cotacao em Send Quote
        Entao exibira mensagem de sucesso


