# Aymerick MICHELET - Portfolio Personnel

Site web personnel d'Aymerick Michelet.

## À propos

Ce site présente mon profil professionnel et permet aux visiteurs de me contacter directement. Il est basé sur le template [Start Bootstrap - Personal](https://startbootstrap.com/template/personal/).

## Technologies utilisées

- **Frontend** : HTML5, CSS3 (SCSS), JavaScript
- **Framework CSS** : Bootstrap 5
- **Template Engine** : Pug
- **Contact Form** : EmailJS
- **Build Tools** : npm scripts

## Installation et développement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm

### Installation
```bash
# Cloner le repository
git clone https://github.com/aymnms/aymerickmichelet.git
cd aymerickmichelet

# Installer les dépendances
npm install
```

### Scripts disponibles

- `npm start` : Lance le serveur de développement avec hot reload
- `npm run build` : Build le projet pour la production
- `npm run clean` : Nettoie le dossier dist

### Structure du projet

```
src/
├── assets/          # Images et fichiers statiques
├── js/             # Scripts JavaScript
├── pug/            # Templates Pug
│   ├── includes/   # Composants réutilisables
│   └── *.pug       # Pages principales
└── scss/           # Styles SCSS
    ├── components/  # Composants SCSS
    └── *.scss      # Fichiers principaux
```

## Déploiement

Le site est automatiquement déployé via GitHub Actions à chaque push sur la branche `main`.

## Contact

- **Email** : contact@aymerickmichelet.fr
- **LinkedIn** : [Aymerick Michelet](https://www.linkedin.com/in/aymerickmichelet)
- **GitHub** : [aymnms](https://github.com/aymnms)

## Licence

Ce projet est sous licence MIT. Le template original [Start Bootstrap - Personal](https://startbootstrap.com/template/personal/) est également sous licence MIT.
