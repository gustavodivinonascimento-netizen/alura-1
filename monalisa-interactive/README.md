# 🎨 Monalisa Interativa - p5.js

Um projeto criativo que recria a famosa pintura da Monalisa de Leonardo da Vinci usando p5.js, com a interatividade especial: **os olhos acompanham o movimento do seu cursor!**

## ✨ Características

- **Olhos Interativos**: Os olhos da Monalisa seguem o movimento do mouse em tempo real
- **Paleta de Cores Original**: Cores baseadas na obra original, incluindo tons de pele, marrom do vestido e detalhes
- **Sorriso Enigmático**: O famoso sorriso misterioso da Monalisa recriado com bezier curves
- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Interface Moderna**: Layout limpo e atraente com gradientes

## 🎯 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Mova o mouse pela tela
3. Observe os olhos da Monalisa seguirem seu cursor!

## 📁 Arquivos do Projeto

- **index.html** - Estrutura HTML principal
- **sketch.js** - Lógica do p5.js com desenho dos elementos e interatividade
- **style.css** - Estilos e layout da página
- **README.md** - Este arquivo

## 🛠️ Tecnologias Utilizadas

- **p5.js** - Biblioteca JavaScript para criação gráfica (v1.7.0)
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e responsividade
- **JavaScript** - Lógica e interatividade

## 📝 Código Destacado

### Função de Olhos Interativos

```javascript
function drawEye(eyeX, eyeY) {
  // Calcular direção do olho em relação ao mouse
  let angle = atan2(mouseY - eyeY, mouseX - eyeX);
  let distance = 8;
  
  // Íris segue o mouse
  let irisX = eyeX + cos(angle) * distance;
  let irisY = eyeY + sin(angle) * distance;
  // ...
}
```

Esta função utiliza trigonometria para calcular o ângulo entre o olho e o cursor, fazendo a íris seguir naturalmente.

## 🎨 Cores Principais

- **Pele**: RGB(235, 200, 170)
- **Cabelo/Sombra**: RGB(100, 80, 60)
- **Iris**: RGB(101, 67, 33)
- **Fundo**: RGB(240, 230, 200)

## 🚀 Melhorias Futuras

- [ ] Adicionar piscadas automáticas
- [ ] Criar modo escuro
- [ ] Adicionar expressões faciais diferentes
- [ ] Implementar sons interativos
- [ ] Adicionar animações de cabelo

## 📖 Aprendizado

Este projeto é ótimo para aprender:
- Conceitos de trigonometria em programação gráfica
- Uso da biblioteca p5.js
- Criação de gráficos vetoriais
- Interatividade com mouse
- Design responsivo

## 🎓 Créditos

Inspirção: Leonardo da Vinci - Monalisa (1503-1519)
Implementação: Criada com p5.js

---

**Divirta-se explorando este projeto interativo!** 🎨✨