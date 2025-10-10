# Apple Juice - E-commerce Estático

Uma versão estática e completamente funcional do e-commerce Apple Juice, especializado em peças de PC, gaming, home office e acessórios tecnológicos.

## 🚀 Funcionalidades

### ✨ Sistema de Promoções Dinâmicas
- **Promoções por horário**: Mudam automaticamente a cada 6 horas
- **Atualização em tempo real**: Interface atualizada a cada minuto
- **Promoções especiais**: Flash Friday (sexta), Weekend Gamer (fins de semana)
- **Algoritmo inteligente**: Com seed temporal para consistência
- **Contadores em tempo real**: Mostra tempo até próxima mudança
- **Banners dinâmicos**: Hero section com informações atualizadas
- **Página dedicada**: Página de promoções com estatísticas completas
- **Dashboard visual**: Métricas de ofertas, best sellers e descontos

### 🛒 E-commerce Completo
- **Carrinho funcional**: Adicionar, remover, alterar quantidades
- **Sistema de favoritos**: Marcar produtos preferidos
- **Busca avançada**: Por nome e categoria
- **7 Categorias completas**: Gaming, Home Office, Profissional, Acessórios, Periféricos, Componentes, Promoções
- **Navegação completa**: Header e Footer com links para todas as páginas
- **Modal de produtos**: Visualização detalhada com imagens e informações
- **Checkout simulado**: Processo completo de compra
- **Sistema de avaliações**: Ratings com estrelas e número de reviews

### 🎨 Design e UX
- **Tema claro/escuro**: Com persistência no localStorage
- **Design responsivo**: Funciona em desktop, tablet e mobile
- **Paleta de cores vermelha**: #8B0000, #A00000, #B91C1C
- **Animações suaves**: Transições e micro-interações
- **Notificações toast**: Feedback visual para ações

### 📱 Recursos Técnicos
- **100% estático**: HTML, CSS e JavaScript puro
- **Sem dependências**: Funciona em qualquer servidor web
- **PWA-ready**: Preparado para funcionar offline
- **SEO otimizado**: Meta tags e estrutura semântica
- **Performance**: Carregamento rápido e otimizado

## 🛠️ Como Usar

### 1. Deploy Direto (GitHub Pages)
```bash
# 1. Faça commit dos arquivos no seu repositório
git add static-build/
git commit -m "Add static Apple Juice e-commerce"
git push origin main

# 2. Vá nas configurações do repositório
# 3. Ative o GitHub Pages apontando para a pasta /static-build
# 4. Seu site estará disponível em: https://usuario.github.io/repositorio
```

### 2. Netlify
1. Arraste a pasta `static-build` no site do Netlify
2. Ou conecte seu repositório Git e configure build folder como `static-build`

### 3. Vercel
```bash
npx vercel --cwd static-build
```

### 4. Servidor Local
```bash
# Python
cd static-build
python -m http.server 8000

# Node.js
cd static-build
npx serve

# PHP
cd static-build
php -S localhost:8000
```

## 📁 Estrutura de Arquivos

```
static-build/
├── index.html          # Página principal com toda estrutura HTML
├── styles.css          # CSS compilado com tema e responsividade
├── script.js           # JavaScript funcional completo
└── README.md           # Esta documentação
```

## 🎯 Catálogo de Produtos

O site inclui **25+ produtos** organizados em 7 categorias completas:

### 🎮 Gaming (4 produtos)
- Placa de Vídeo RTX 4080 Super 16GB
- Processador AMD Ryzen 7 7800X3D
- Monitor 4K 32" 144Hz
- PC Gamer Completo RTX 4070 Ti

### 🏠 Home Office (4 produtos)
- Cadeira Ergonômica Premium
- Mesa com LED RGB Ajustável
- Notebook Ultrabook i7
- Webcam Full HD 1080p

### 💼 Uso Profissional (4 produtos)
- Workstation Dell Precision Xeon
- Monitor Profissional 27" 4K
- Servidor Rack HP Dual Xeon
- Plotter HP DesignJet A0

### 🔌 Acessórios (4 produtos)
- Hub USB-C 7 em 1
- Suporte Monitor Duplo
- Mousepad XL RGB 900x400mm
- Headset Gamer 7.1 Surround

### ⌨️ Periféricos (4 produtos)
- Teclado Mecânico RGB Cherry MX
- Mouse Gamer 16000 DPI
- Impressora Multifuncional HP
- Joystick Xbox Wireless

### 🔧 Componentes (5 produtos)
- SSD NVMe 2TB PCIe Gen 4
- Memória RAM DDR5 32GB 6000MHz
- Fonte 850W 80 Plus Gold
- Placa Mãe B650 AM5 DDR5
- Water Cooler 360mm RGB

### 🔥 Promoções (Página Especial)
- Dashboard com estatísticas em tempo real
- Produtos em oferta do momento
- Best sellers atualizados
- Contador de tempo para próxima promoção

## ⚡ Sistema de Promoções (Atualizado a Cada Minuto)

### Por Horário (6 em 6 horas)
- **00:00-06:00**: 🌙 Super Madrugada - Gaming em destaque (até 35% OFF)
- **06:00-12:00**: ☀️ Manhã Produtiva - Home Office (até 30% OFF)
- **12:00-18:00**: 💼 Tarde Profissional - Uso Profissional (até 40% OFF)
- **18:00-00:00**: 🎮 Noite dos Gamers - Acessórios (até 25% OFF)

### Por Dia da Semana
- **Segunda**: Gaming com descontos especiais
- **Terça**: Home Office com ofertas matinais
- **Quarta**: Uso Profissional em destaque
- **Quinta**: Acessórios com promoções noturnas
- **Sexta**: 🔥 FLASH FRIDAY - Todas as categorias (até 50% OFF)
- **Fim de semana**: 🎮 WEEKEND GAMER - Gaming intenso (até 45% OFF)

### Funcionalidades Dinâmicas
- ✅ Atualização automática a cada minuto
- ✅ Contador de tempo até próxima mudança
- ✅ Banner colorido com informações da promoção ativa
- ✅ Página dedicada de promoções com estatísticas
- ✅ Algoritmo seeded para consistência durante cada período
- ✅ Badges visuais (OFERTA e BEST SELLER) nos produtos

## 🎨 Personalização

### Cores
Para alterar a paleta de cores, edite as variáveis CSS em `styles.css`:

```css
:root {
  --primary: #8B0000;        /* Vermelho principal */
  --background: #ffffff;      /* Fundo claro */
  --foreground: #000000;      /* Texto claro */
  /* ... outras variáveis */
}

.dark {
  --background: #0a0a0a;      /* Fundo escuro */
  --foreground: #ffffff;      /* Texto escuro */
  /* ... outras variáveis */
}
```

### Produtos
Para adicionar/editar produtos, modifique o array `baseProducts` em `script.js`:

```javascript
const baseProducts = [
  {
    id: 1,
    name: "Nome do Produto",
    price: 999.99,
    originalPrice: 1299.99,
    image: "URL_da_imagem",
    rating: 4.5,
    reviews: 123,
    category: "Gaming" // Gaming, Home Office, Uso Profissional, Acessórios
  },
  // ... mais produtos
];
```

### Textos e Conteúdo
Todos os textos podem ser editados diretamente nos arquivos:
- **HTML**: `index.html` - estrutura e conteúdo estático
- **JavaScript**: `script.js` - conteúdo dinâmico e textos de funções

## 📊 Analytics e Monitoramento

Para adicionar Google Analytics ou outras ferramentas de monitoramento, adicione os scripts no `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Configurações Avançadas

### PWA (Progressive Web App)
Para transformar em PWA, adicione:
1. `manifest.json` com informações do app
2. `service-worker.js` para cache offline
3. Meta tags PWA no HTML

### Base de Dados Real
Para conectar com backend real:
1. Substitua `localStorage` por APIs REST
2. Implemente autenticação real
3. Conecte com gateway de pagamento
4. Adicione gerenciamento de estoque

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se as URLs do Unsplash estão acessíveis
- Imagens têm fallback automático para SVG placeholder

### JavaScript não funciona
- Verifique se o Lucide Icons está carregando
- Abra o console do navegador para ver erros
- Certifique-se que o servidor não bloqueia JavaScript

### Estilos quebrados
- Verifique se o `styles.css` está sendo carregado
- Confirme que as variáveis CSS estão definidas
- Teste em modo incógnito para evitar cache

## 📞 Suporte

Este é um projeto estático e funcional, pronto para uso em produção. Para modificações específicas ou integrações avançadas, consulte a documentação do código fonte.

## 📄 Licença

Este projeto é um exemplo educacional e pode ser usado livremente para fins de aprendizado e desenvolvimento.

---

**🍎 Apple Juice E-commerce** - Sua loja de tecnologia completa e funcional!