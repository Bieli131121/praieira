# Praieira — Site de Apresentação

Projeto React + Vite para o site da loja **Praieira** (Garopaba, SC).

## Stack
- React 18
- Vite 5
- CSS Modules
- Google Fonts (Playfair Display + DM Sans)

## Estrutura

```
src/
  assets/
    LogoIcon.jsx          → SVG do sol como componente
  components/
    Navbar.jsx / .module.css
    Hero.jsx / .module.css
    WaveDivider.jsx / .module.css
    Categories.jsx / .module.css
    About.jsx / .module.css
    CTASection.jsx / .module.css
    Footer.jsx / .module.css
  styles/
    tokens.css            → variáveis de cor, fonte, radius, transition
    global.css            → reset, utilitários, botões compartilhados
  main.jsx
  App.jsx
```

## Como rodar

```bash
npm install
npm run dev
```

## Como buildar para produção

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Fazer push para GitHub
2. Importar repositório no Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

## Personalização

### Trocar foto do hero
Em `src/components/Hero.jsx`, substituir o bloco SVG placeholder pelo `<img>` real:
```jsx
<img src="/images/hero-produto.jpg" alt="Coleção Verão 2026" />
```
Colocar a imagem em `public/images/`.

### Ajustar cores
Editar `src/styles/tokens.css` — todas as cores do site estão centralizadas lá.

### Adicionar categorias
Em `src/components/Categories.jsx`, editar o array `CATEGORIES`:
```js
const CATEGORIES = [
  { id: 'biquinis', title: 'Biquínis', subtitle: 'Modelagens exclusivas', href: '#' },
  // ...
]
```

### Atualizar link do Instagram
Buscar `praieira.garopaba` no projeto e substituir pelo handle real se mudar.
