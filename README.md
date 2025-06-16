# Guia de Estilos do Projeto FragPlanner

Este guia de estilos documenta as convenções de estilo e os padrões de design utilizados no projeto FragPlanner. O objetivo é garantir a consistência visual e a manutenibilidade do código.

## Variáveis CSS

As variáveis CSS são utilizadas para definir valores reutilizáveis, como cores, fontes e tamanhos. Isso facilita a manutenção e garante a consistência visual em todo o projeto.

### Cores

*   `--primary-color`: Azul Vibrante (#2979FF) - Cor principal da marca.
*   `--secondary-color`: Cinza Claro (#F5F5F5) - Usado para fundos e separadores sutis.
*   `--accent-color`: Laranja Energético (#FF9800) - Usado para botões de ação e elementos interativos.
*   `--text-color`: Cinza Escuro (#333333) - Cor padrão para textos.
*   `--background-color`: Branco (#FFFFFF) - Cor de fundo padrão da interface.
*   `--header-footer-color`: Cinza Escuro (#1a1a1a) - Cor para o cabeçalho e rodapé.
*   `--neon-pink`: Rosa Neon (#FF00FF) - Cor neon rosa.
*   `--neon-cyan`: Ciano Neon (#00FFFF) - Cor neon ciano.
*   `--neon-yellow`: Amarelo Neon (#FFFF00) - Cor neon amarela.

### Tipografia

*   `--font-family`: 'Nunito Sans', sans-serif - Família de fonte padrão.
*   `--title-font-size`: 32px - Tamanho da fonte para títulos (H1).
*   `--subtitle-font-size`: 24px - Tamanho da fonte para subtítulos (H2).
*   `--default-font-size`: 16px - Tamanho da fonte padrão para textos.
*   `--small-font-size`: 10px - Tamanho da fonte para textos pequenos.

### Espaçamento

*   `--default-padding`: 16px - Espaçamento interno padrão.

### Bordas

*   `--default-border-radius`: 4px - Raio padrão para bordas arredondadas.
*   `--card-border-radius`: 8px - Raio para bordas arredondadas em cards.

### Sombras

*   `--default-box-shadow`: `0 2px 4px rgba(0, 0, 0, 0.1)` - Sombra padrão para elementos.

## Classes Temáticas

As classes temáticas são utilizadas para aplicar estilos específicos a diferentes elementos da interface.

### Botões

*   `.button-primary`: Estilo para botões primários (ex: botões de ação).
    *   `background-color`: `var(--primary-color)`
    *   `color`: `white`
    *   `padding`: `var(--default-padding)`
    *   `border`: `none`
    *   `border-radius`: `var(--default-border-radius)`
    *   `cursor`: `pointer`

## Estrutura HTML Semântica

O projeto utiliza elementos HTML5 semânticos para melhorar a estrutura e a acessibilidade da página.

*   `<header>`: Usado para o cabeçalho da página.
*   `<nav>`: Usado para a navegação principal.
*   `<main>`: Usado para o conteúdo principal da página.
*   `<article>`: Usado para conteúdos independentes.
*   `<footer>`: Usado para o rodapé da página.