```markdown
# Guia de Estilos e Padrões de Design da Plataforma

## Resumo da Tarefa

Esta documentação tem como objetivo padronizar e aprimorar a experiência visual da plataforma, garantindo uma interface visualmente atraente, consistente com a identidade da marca, acessível e responsiva. As diretrizes aqui presentes visam facilitar o desenvolvimento e a manutenção da interface, promovendo uma experiência de usuário mais agradável e eficiente.

## Layout e Estrutura

*   **Estrutura:** Layout responsivo com header fixo no topo, área de conteúdo principal centralizada e rodapé na base. Em telas maiores, considerar uma barra lateral (menu de navegação) à esquerda.
*   **Header:** Altura consistente em todas as telas. Contém o logo da marca à esquerda e navegação principal (se houver) à direita.
*   **Área de Conteúdo:** Centralizada com margens laterais para melhor leitura em telas maiores. Layout flexível para se adaptar a diferentes tipos de conteúdo (formulários, tabelas, textos).
*   **Rodapé:** Contém informações de direitos autorais e links adicionais (ex: termos de uso, política de privacidade).

## Paleta de Cores

*   **Primária:** Azul Vibrante - #2979FF (cor principal da marca)
*   **Secundária:** Cinza Claro - #F5F5F5 (para fundos e separadores sutis)
*   **Destaque/Ação:** Laranja Energético - #FF9800 (para botões de ação e elementos interativos)
*   **Texto:** Cinza Escuro - #333333 (para garantir boa legibilidade)
*   **Fundo:** Branco - #FFFFFF (fundo padrão da interface)

## Tipografia

*   **Família da Fonte:** 'Nunito Sans', sem serifa
*   **Títulos (H1-H3):** Nunito Sans, negrito. Tamanhos: H1 - 32px, H2 - 24px, H3 - 18px. Espaçamento entre linhas de 1.2.
*   **Corpo do Texto:** Nunito Sans, regular. Tamanho: 16px. Espaçamento entre linhas de 1.5.
*   **Ênfase:** Utilizar negrito ou itálico com moderação para destacar palavras ou frases importantes.

## Componentes Chave

*   **Botões:**
    *   **Normal:** Cor de fundo Laranja Energético (#FF9800), texto branco, cantos arredondados (4px), espaçamento interno (padding) de 12px (superior/inferior) e 24px (esquerda/direita).
    *   **Hover:** Cor de fundo Laranja Energético ligeiramente escurecida (ex: #F48900), cursor em forma de mão.
    *   **Clicado:** Animação sutil de "afundamento" (leve deslocamento para baixo e pequena redução de tamanho).
*   **Inputs (Campos de Texto):**
    *   **Normal:** Fundo branco, borda cinza clara (#DDDDDD), cantos arredondados (4px), espaçamento interno (padding) de 10px.
    *   **Foco:** Borda Azul Vibrante (#2979FF) mais espessa (2px).
    *   **Desabilitado:** Fundo Cinza Muito Claro (#EEEEEE), texto cinza claro (#999999).
*   **Cards:**
    *   **Aparência:** Fundo branco, borda arredondada (8px), sombra suave (ex: rgba(0, 0, 0, 0.1)), espaçamento interno (padding) de 16px.
    *   **Hover:** Elevação sutil da sombra para indicar que o card é interativo.

## Variáveis CSS

```css
:root {
    --primary-color: #2979FF; /* Azul Vibrante */
    --secondary-color: #F5F5F5; /* Cinza Claro */
    --accent-color: #FF9800; /* Laranja Energético */
    --text-color: #333333; /* Cinza Escuro */
    --background-color: #FFFFFF; /* Branco */

    --font-family: 'Nunito Sans', sans-serif;

    --default-padding: 16px;
    --default-border-radius: 4px;

    /* Tamanhos de Fonte */
    --h1-font-size: 32px;
    --h2-font-size: 24px;
    --h3-font-size: 18px;
    --body-font-size: 16px;
}
```

## Classes Temáticas CSS

```css
.button-primary {
    background-color: var(--accent-color);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: var(--default-border-radius);
    cursor: pointer;
}

.button-primary:hover {
    background-color: #F48900; /* Laranja Energético ligeiramente escurecida */
}

.input-field {
    background-color: var(--background-color);
    border: 1px solid #DDDDDD;
    border-radius: var(--default-border-radius);
    padding: 10px;
}

.input-field:focus {
    border: 2px solid var(--primary-color);
    outline: none; /* Remove a borda de foco padrão do navegador */
}

.input-field:disabled {
    background-color: #EEEEEE;
    color: #999999;
}

.card {
    background-color: var(--background-color);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: var(--default-padding);
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
}

```

## Exemplo de Media Query

```css
/* Exemplo de Media Query para telas menores que 768px */
@media (max-width: 768px) {
    #left-bar {
        width: 100%; /* Adapta a barra lateral para ocupar a largura total */
        padding: 10px;
    }

    #app-container {
        flex-direction: column; /* Empilha os elementos verticalmente */
    }
}
```

## Histórico de Alterações

- Data: 2025-06-16 23:29:45
  - Agente: Front_agent
  - Tarefa: Aprimorar a experiência visual da plataforma
  - Descrição: Implementação inicial do guia de estilos e padrões de design, incluindo paleta de cores, tipografia, componentes chave, variáveis CSS e classes temáticas, conforme especificado na história de usuário para melhorar o engajamento e a confiança dos usuários na plataforma.
```