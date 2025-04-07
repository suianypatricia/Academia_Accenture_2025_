<p align="center">
  <img src="cypress/fixtures/imagem.jpg" alt="Imagem do Projeto" width="300"/>
</p>
<div align="center">

# 👩🏾‍💻 Projeto de Testes Automatizados - Tricentis Sample App  
**Cypress + BDD + Page Objects**

🚀 *Desenvolvido durante o treinamento da Academia QA da Accenture 2025*

</div>

---

## 📌 Visão Geral

Este projeto tem como objetivo a **automação completa do fluxo de cotação para carros** no site [Tricentis Sample App](https://sampleapp.tricentis.com/), aplicando **boas práticas de QA**, com foco em organização, clareza e padronização dos testes.

O trabalho foi realizado como parte do meu processo de capacitação técnica na **Academia QA da Accenture**. É um projeto em evolução — com planos de melhorias, cenários negativos e refatorações planejadas.

---

## 📌 Tecnologias e Ferramentas

| Ferramenta      | Descrição                                 |
|-----------------|-------------------------------------------|
| **Cypress**     | Framework de testes E2E moderno e eficiente |
| **Cucumber (Gherkin)** | Escrita de cenários BDD |
| **JavaScript**  | Linguagem base para comandos e testes     |
| **.env (Cypress)** | Armazenamento de dados sensíveis        |
| **VS Code**     | Editor de código                          |

---

## 🔄 Funcionalidades Automatizadas

✔️ Preenchimento completo do fluxo positivo:  
- `Enter Vehicle Data`  
- `Enter Insurant Data`  
- `Enter Product Data`  
- `Select Price Option`  
- `Send Quote`

✔️ Validações visuais e de conteúdo  
✔️ Navegação entre abas com assertivas  
✔️ Uso de comandos customizados e reaproveitáveis

---

## 📌 Estrutura do Projeto

```bash
meu-projeto-cypress/
├── cypress/
│   ├── e2e/
│   │   └── step-definitions/     # Arquivos BDD com Gherkin
│   ├── support/
│   │   ├── pages/                # Page Objects com comandos
│   │   └── commands.js           # Carregamento dos comandos
│   ├── fixtures/
│   │   └── imagem.jpg            # Imagem usada no teste
├── cypress.config.js
├── cypress.env.json              # Dados sensíveis (e-mail, senha)
├── package.json
└── README.md
```

---

## 📌 Boas Práticas Aplicadas

✅ Organização com Page Objects  
✅ Separação de responsabilidades  
✅ Escrita em linguagem natural com Gherkin  
✅ Dados sensíveis armazenados com segurança no `cypress.env.json`  
✅ Logs visuais com `cy.log()` para melhor leitura  
✅ Estrutura limpa e escalável para cenários futuros

---

## 💡 Melhorias Futuras

- Adição de testes negativos (ex: campos vazios, dados inválidos)  
- Validações específicas por campo  
- Integração com biblioteca **Faker** para gerar dados dinâmicos  
- Organização de massa de dados em `fixtures`  
- Relatórios visuais de execução
- Validação de conteúdo gerado em PDF (ex: e-mail de cotação)
- Download e leitura do arquivo PDF com Cypress 
- Verificação se o arquivo foi salvo corretamente e está legível
- 

---

## ▶️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/suianypatricia/Academia_Accenture2025.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o Cypress:
```bash
npx cypress open

```



[![LinkedIn](https://img.shields.io/badge/LinkedIn-Suiany_Patricia-blue?logo=linkedin)](https://linkedin.com/in/Suiany_Patricia)

---

> *Projeto desenvolvido durante o treinamento da Academia QA da Accenture - 2025*

