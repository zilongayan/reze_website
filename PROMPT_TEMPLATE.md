# 🎨 PROMPT TEMPLATE : Site Web One-Page Immersif Anime/Otaku

Ce template de prompt peut être utilisé pour générer des sites web one-page similaires avec une expérience immersive, animée et énergique, dans le style otaku/anime.

---

## 📋 OBJECTIF

Créer un site web one-page très visuel et fun, thème [PERSONNAGE/THÈME] de [SÉRIE/MANGA/ANIME].

**Objectif** : Une expérience otaku immersive, animée, énergique, avec beaucoup de GIFs et une ambiance musicale.

---

## 🛠️ CONTRAINTES TECHNIQUES

### Stack technique
- **HTML / CSS / JavaScript pur** (pas de framework lourd comme React, Vue, etc.)
- **Fonctionnement en local** : Le site doit fonctionner en ouvrant simplement `index.html`
- **Responsive** : Desktop + mobile (breakpoints : 768px, 480px)
- **Performance** : Lazy loading pour les images, optimisations des animations
- **Cross-browser** : Compatible Chrome, Firefox, Safari, Edge

### Structure de fichiers
```
project/
├── index.html          # Page principale
├── style.css           # Styles et animations
├── script.js           # Interactions et effets
├── audio/              # Musique de fond (MP3)
│   └── theme-song.mp3
├── assets/             # GIFs, images, médias
│   ├── *.gif          # GIFs animés
│   └── *.webp         # Images optimisées
├── README.md           # Documentation
├── package.json        # Pour Vercel (optionnel)
└── vercel.json         # Configuration Vercel
```

---

## 🎨 DESIGN & AMBIANCE

### Style général
- **Thème** : Otaku / Anime / Edgy / Néon
- **Palette de couleurs** : 
  - Primaire : `#ff0080` (rose néon)
  - Secondaire : `#ff0040` (rose foncé)
  - Accent : `#ff4000` (rouge-orange)
  - Fond : `#000` (noir)
  - Texte : `#fff` (blanc)

### Effets visuels
- **Glitch effect** : Sur les titres principaux
- **Grain effect** : Overlay subtil pour ambiance rétro
- **Néon glow** : Contours lumineux sur éléments interactifs
- **Particules flottantes** : Éléments animés en arrière-plan
- **Parallax** : Effet de profondeur au scroll
- **Glassmorphism** : Sur certains éléments (backdrop-filter: blur)

### Typographie
- **Titres principaux** : `'Bungee Inline'` ou `'Orbitron'` (futuriste)
- **Sous-titres** : `'Orbitron'` (monospace)
- **Corps de texte** : `'Rajdhani'` (clean, moderne)

---

## 📐 STRUCTURE SUGGÉRÉE

### 1. Loading Screen
- Animation de chargement avec barre de progression
- Logo/titre avec effet glow
- Transition fade vers le contenu principal

### 2. Navigation Menu (Sticky)
- Menu fixe en haut qui suit le scroll
- Liens actifs mis à jour selon la section visible
- Menu hamburger pour mobile
- Smooth scroll vers chaque section

### 3. Hero Section
- Grand GIF/image de fond animé
- Titre principal avec effet glitch
- Sous-titre stylisé
- Bouton CTA ("Enter the Madness" / "Explore" / etc.)
- Indicateur de scroll (flèche vers le bas)

### 4. Gallery Section
- Grille responsive de GIFs/images
- Lightbox avec navigation (flèches, clavier, fermeture)
- Animations au scroll (fade + zoom)
- Effets hover (zoom, rotation, glow)

### 5. Mood / Quote Section
- Citations stylisées dans des cards
- Fond GIF semi-transparent
- Animations d'apparition
- Overlay avec gradient

### 6. Video Section (optionnel)
- Intégration YouTube via iframe
- 2-3 vidéos en grille responsive
- Cards animées avec effet tilt 3D au hover
- Ombres néon et glow effects
- Pas de lecture automatique (UX)

### 7. Final Section
- Grand GIF plein écran
- Texte impactant stylisé
- Effet parallax

### 8. Footer
- Copyright et crédits
- Style minimaliste avec bordure néon

---

## ✨ FONCTIONNALITÉS À INTÉGRER

### Audio
- **Musique de fond** : Theme song du personnage/série
- **Lecture automatique** : Après interaction utilisateur (clic)
- **Bouton toggle** : Play/Pause avec effet visuel
- **Volume modéré** : 30% par défaut
- **Effet shake** : Léger tremblement synchronisé avec la musique (optionnel)
- **Note** : Respecter les politiques des navigateurs (pas d'autoplay sans interaction)

### Animations
- **Particules flottantes** : 50+ particules animées avec couleurs variées
- **Intersection Observer** : Animations au scroll (fade-in, zoom, slide)
- **Effets hover** : Transform, scale, glow sur tous les éléments interactifs
- **Glitch effect** : Sur les titres (CSS keyframes)
- **Parallax scrolling** : Backgrounds qui bougent à différentes vitesses

### Interactions
- **Lightbox** : Pour agrandir les images de la gallery
  - Navigation clavier (flèches, Escape)
  - Boutons prev/next
  - Fermeture par clic sur fond ou bouton X
  - Désactivation du shake pendant l'affichage
- **Scroll progress bar** : Indicateur en haut de page
- **Back to top button** : Bouton flottant apparaissant après scroll
- **Smooth scroll** : Navigation fluide entre sections

---

## 🎯 BONUS & CRÉATIVITÉ

### Idées créatives supplémentaires
1. **Mode interactif** : Cursor personnalisé (image du personnage qui suit la souris)
2. **Particles avancées** : Effets de confettis au clic, particules qui réagissent à la musique
3. **Animations CSS avancées** : Typewriter effect, text reveal, morphing shapes
4. **Mini-jeux** : Easter eggs interactifs cachés dans le site
5. **Dark/Light mode** : Toggle entre thèmes
6. **Background video** : Vidéo en boucle au lieu de GIF
7. **Cursor trails** : Trainées lumineuses qui suivent la souris
8. **Sound effects** : Sons au hover/clic (optionnel, avec toggle)
9. **3D effects** : Transform 3D plus poussés, effet parallax avancé
10. **Storytelling** : Sections narratives avec animations progressives
11. **Interactive timeline** : Timeline animée de l'histoire du personnage
12. **Character showcase** : Carousel 3D des personnages
13. **Quotes animées** : Citations qui apparaissent avec animations typewriter
14. **Snow/rain effects** : Particules atmosphériques selon le thème
15. **Music visualizer** : Visualisation audio en temps réel (Web Audio API)

### Optimisations performance
- Lazy loading pour toutes les images
- Intersection Observer pour les animations
- Debounce sur les événements scroll
- Preload pour les assets critiques
- Compression des GIFs (utiliser WebP quand possible)

---

## 📝 EXEMPLE DE PROMPT COMPLET

```
Crée un site web one-page très visuel et fun, thème [PERSONNAGE] – [SÉRIE].

Objectif : une expérience otaku immersive, animée, énergique, avec beaucoup de GIFs 
et une ambiance musicale.

Contraintes techniques :
- HTML / CSS / JavaScript pur (pas de framework lourd)
- Le site doit fonctionner en local (ouvrir index.html)
- Responsive (desktop + mobile)
- Assets disponibles : dossier ./assets/ contenant GIFs et images

Design & ambiance :
- Style otaku / anime / edgy / néon
- Palette [COULEURS PERSONNALISÉES]
- Effets : glitch, grain, lumière, particules flottantes
- Beaucoup d'animations : transitions fluides, apparitions progressives, effets hover
- Typographie inspirée manga/anime

Structure suggérée :
1. Hero section avec grand GIF et titre animé (glitch)
2. Gallery animée avec lightbox
3. Mood / Quote section avec fond animé
4. Video section (optionnel) avec iframes YouTube
5. Final section immersive

Audio :
- Intégrer musique [NOM DU FICHIER].mp3
- Lecture automatique après interaction utilisateur
- Bouton toggle : play / pause
- Volume modéré

Bonus :
- Effet de particules ou floating elements
- Effet de shake/glitch synchronisé avec la musique
- Lightbox pour la gallery
- Menu navigation sticky
- Scroll progress bar
- Back to top button
- Loading screen animé

Génère tous les fichiers nécessaires (index.html, style.css, script.js) avec 
des commentaires clairs dans le code.
```

---

## 🔧 TECHNIQUES AVANCÉES À UTILISER

### CSS
- **CSS Variables** : Pour faciliter la personnalisation des couleurs
- **Grid & Flexbox** : Pour les layouts responsive
- **Animations CSS** : @keyframes pour les effets complexes
- **Backdrop-filter** : Pour les effets glassmorphism
- **Clip-path** : Pour les formes créatives
- **Mask-image** : Pour les effets de révélation
- **Filter** : brightness, contrast, blur pour les effets visuels

### JavaScript
- **Intersection Observer API** : Pour les animations au scroll
- **Web Audio API** : Pour la visualisation audio (bonus)
- **RequestAnimationFrame** : Pour les animations fluides
- **Debounce/Throttle** : Pour optimiser les événements scroll/resize
- **LocalStorage** : Pour sauvegarder les préférences utilisateur
- **Event Delegation** : Pour optimiser les event listeners

---

## 🎨 PERSONNALISATION RAPIDE

### Changer le thème
1. **Couleurs** : Modifier dans `style.css` :
   ```css
   /* Variables CSS */
   :root {
       --primary: #ff0080;
       --secondary: #ff0040;
       --accent: #ff4000;
       --bg: #000;
       --text: #fff;
   }
   ```

2. **Typography** : Changer les fonts dans `index.html` :
   ```html
   <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
   ```

3. **Assets** : Remplacer les fichiers dans `assets/` et mettre à jour les chemins dans `index.html`

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
- **Desktop** : > 768px (grille 3 colonnes)
- **Tablet** : 481px - 768px (grille 2 colonnes)
- **Mobile** : ≤ 480px (1 colonne, menu hamburger)

### Optimisations mobile
- Menu hamburger au lieu de menu horizontal
- Images optimisées (utiliser WebP)
- Désactiver le shake effect sur mobile (performance)
- Touch gestures pour la lightbox
- Font sizes adaptatifs (clamp())

---

## 🚀 DÉPLOIEMENT

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### Vercel
```bash
# Configuration vercel.json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "framework": null
}

# Déploiement
vercel --prod
```

### Hugging Face Spaces
```yaml
# Dans README.md
---
title: [NOM DU SITE]
emoji: [EMOJI]
sdk: static
app_file: index.html
---
```

---

## 💡 IDÉES DE VARIATIONS

### Thèmes possibles
- Personnages d'anime (Naruto, One Piece, Jujutsu Kaisen, etc.)
- Jeux vidéo (Genshin Impact, Honkai Star Rail, etc.)
- Waifus/Husbandos spécifiques
- Scènes iconiques de séries
- Artistes/Chanteurs japonais
- Thèmes saisonniers (Noël, Halloween, etc.)

### Styles variés
- **Kawaii** : Couleurs pastel, effets mignons, animations douces
- **Cyberpunk** : Néon vert/bleu, effets tech, UI futuriste
- **Gothic** : Noir et violet, ambiance sombre, effets mystérieux
- **Nature** : Tons verts, effets organiques, animations fluides
- **Retro** : Palettes vintage, effets 8-bit, pixel art

---

## 📚 RESSOURCES UTILITAIRES

### Fonts
- Google Fonts : Bungee Inline, Orbitron, Rajdhani, Poppins, Righteous
- DaFont : Fonts manga/anime gratuites

### Couleurs
- Coolors.co : Génération de palettes
- Adobe Color : Palettes harmonieuses

### GIFs
- Tenor, Giphy : Recherche de GIFs
- Reddit : r/animegifs, r/awwnime
- Création : Photoshop, After Effects → export GIF

### Musiques
- YouTube : Theme songs officiels
- SoundCloud : Remixes et covers
- Bandcamp : Artistes indépendants

---

## 🎓 LEÇONS APPRISES

### Bonnes pratiques
- ✅ Toujours utiliser `data-*` attributes pour les données personnalisées
- ✅ Prévoir la désactivation des effets pour la lightbox/modals
- ✅ Tester sur mobile avant déploiement
- ✅ Optimiser les GIFs (taille et nombre)
- ✅ Utiliser lazy loading pour les images
- ✅ Ajouter des fallbacks pour les navigateurs anciens
- ✅ Prévoir un système de cache pour les assets
- ✅ Documenter le code avec des commentaires

### Pièges à éviter
- ❌ Trop d'animations simultanées (performance)
- ❌ Fichiers trop lourds (optimiser les GIFs)
- ❌ Autoplay audio sans interaction (politique navigateurs)
- ❌ Oublier le responsive mobile
- ❌ Ne pas tester la lightbox avec différents états (shake, scroll, etc.)

---

## 📋 CHECKLIST DE CRÉATION

- [ ] Structure HTML complète
- [ ] Styles CSS avec toutes les animations
- [ ] JavaScript pour interactions
- [ ] Loading screen
- [ ] Navigation sticky
- [ ] Hero section avec glitch effect
- [ ] Gallery avec lightbox fonctionnelle
- [ ] Quotes section avec animations
- [ ] Video section (si applicable)
- [ ] Audio player avec contrôle
- [ ] Particules flottantes
- [ ] Scroll progress bar
- [ ] Back to top button
- [ ] Responsive design testé
- [ ] Assets optimisés (lazy loading)
- [ ] `.gitignore` configuré
- [ ] README.md documenté
- [ ] Configuration déploiement (Vercel/HF)
- [ ] Tests cross-browser
- [ ] Performance optimisée

---

## 🎬 EXEMPLE CONCRET : PROMPT POUR NOUVEAU SITE

```
Crée un site web one-page très visuel et fun, thème YOR FORGER - SPY X FAMILY.

Objectif : une expérience otaku immersive, animée, énergique, avec beaucoup de GIFs 
et une ambiance musicale.

Contraintes techniques :
- HTML / CSS / JavaScript pur (pas de framework lourd)
- Le site doit fonctionner en local (ouvrir index.html)
- Responsive (desktop + mobile)
- Assets disponibles : dossier ./yor/ contenant GIFs et images, dossier ./audio/ 
  contenant le fichier theme-song.mp3

Design & ambiance :
- Style otaku / anime / élégant / rouge sombre
- Palette : Rouge (#dc143c), Noir (#000), Rose (#ff69b4), Blanc (#fff)
- Effets : glitch subtil, grain, lumière douce, particules en forme de roses
- Beaucoup d'animations : transitions fluides, apparitions progressives, effets hover élégants
- Typographie : 'Righteous' pour les titres, 'Poppins' pour le texte

Structure suggérée :
1. Hero section avec grand GIF de Yor en action et titre animé (glitch subtil)
2. Gallery animée avec lightbox (15+ GIFs de Yor)
3. Mood / Quote section avec citations de Yor et fond GIF semi-transparent
4. Video section avec 3 vidéos YouTube d'edit Yor (embed)
5. Final section immersive avec GIF plein écran

Audio :
- Intégrer musique ./audio/theme-song.mp3
- Lecture automatique après interaction utilisateur (clic)
- Bouton toggle : play / pause avec icône élégante
- Volume modéré (30%)

Bonus créatif :
- Particules en forme de roses qui tombent (animation CSS)
- Effet de confettis au clic sur le bouton CTA
- Cursor personnalisé (couteau/throwing knife)
- Typewriter effect pour les citations
- Timeline interactive de l'histoire de Yor
- Mini-easter egg : clic sur le logo 5 fois = animation spéciale

Fonctionnalités :
- Loading screen avec animation de roses
- Menu navigation sticky avec effet glassmorphism
- Scroll progress bar élégante
- Back to top button avec animation
- Lightbox pour la gallery avec navigation clavier
- Désactivation automatique des effets pendant la lightbox

Génère tous les fichiers nécessaires (index.html, style.css, script.js) avec 
des commentaires clairs dans le code. Code bien organisé et modulaire.
```

---

**Template créé à partir du projet REZE Tribute Site**

*Ce template peut être réutilisé et adapté pour créer d'autres sites web immersifs dans le même style.*

