# 🛋️ Occaz Deco

[![React Native](https://img.shields.io/badge/React%20Native-0.71.7-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.8.4-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Occaz Deco** est une application mobile de marketplace dédiée à la vente et l'achat de meubles d'occasion. Trouvez et vendez facilement du mobilier d'intérieur de seconde main dans une interface moderne et intuitive.

## ✨ Fonctionnalités

### 🔐 Authentification
- **Inscription** et **connexion** sécurisées
- Gestion des sessions utilisateur avec AsyncStorage
- Interface d'accueil attrayante

### 🏠 Navigation principale
- **Accueil** : Parcourir les produits disponibles avec recherche et filtres
- **Favoris** : Sauvegarder vos articles préférés
- **Profil** : Gérer votre compte et vos annonces

### 🛍️ Gestion des produits
- **Création d'annonces** : Ajoutez vos meubles à vendre
- **Mes annonces** : Gérez vos listings existants
- **Recherche avancée** : Filtrez par catégories (chaises, tables, fauteuils, etc.)
- **Détails produit** : Vue détaillée avec carousel d'images

### 👤 Profil utilisateur
- **Paramètres de compte** : Modifier vos informations
- **Centre d'aide** : FAQ, contact et politique de confidentialité
- **Statistiques** : Nombre d'annonces créées

## 🏗️ Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── AuthHeader/     # En-tête pour l'authentification
│   ├── Button/         # Boutons personnalisés
│   ├── Footer/         # Navigation bottom
│   ├── Header/         # En-tête principal
│   ├── Input/          # Champs de saisie
│   └── Products/       # Composants produits
├── screens/            # Écrans de l'application
│   ├── auth/          # Authentification
│   └── pages/         # Pages principales
├── utils/             # Utilitaires (couleurs, etc.)
└── data/              # Données statiques
```

## 🚀 Installation

### Prérequis
- [Node.js](https://nodejs.org/) (version 16+)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (pour Android)
- [Xcode](https://developer.apple.com/xcode/) (pour iOS, macOS uniquement)

### Clonage du projet
```bash
git clone https://github.com/Bastien-Gaillard/Occaz_deco.git
cd Occaz_deco
```

### Installation des dépendances
```bash
npm install
# ou
yarn install
```

### Configuration iOS (macOS uniquement)
```bash
cd ios && pod install && cd ..
```

## 🎯 Lancement de l'application

### 1. Démarrer le serveur Metro
```bash
npx react-native start
```

### 2. Lancer sur Android
```bash
npx react-native run-android
```

### 3. Lancer sur iOS (macOS uniquement)
```bash
npx react-native run-ios
```

## 🔧 Technologies utilisées

### Framework & Langages
- **React Native** 0.71.7 - Framework mobile cross-platform
- **TypeScript** 4.8.4 - Typage statique
- **JavaScript** - Logique métier

### Navigation & State Management
- **@react-navigation/native** - Navigation entre écrans
- **@react-navigation/native-stack** - Navigation par stack
- **AsyncStorage** - Stockage local persistant

### UI & Design
- **react-native-vector-icons** - Icônes personnalisées
- **react-native-carousel-banner** - Carousel d'images
- **react-native-input-select** - Sélecteurs personnalisés

### API & Réseau
- **Axios** - Client HTTP pour les appels API
- **Backend API** - http://51.91.249.126:3010/

### Outils de développement
- **ESLint** - Linting du code
- **Jest** - Framework de tests
- **Prettier** - Formatage du code
- **Metro** - Bundler React Native

## 📱 Captures d'écran

### Authentification
- Écran d'accueil avec call-to-action
- Formulaires d'inscription et de connexion
- Design moderne avec navigation fluide

### Application principale
- Page d'accueil avec recherche et catégories
- Gestion des favoris personnalisée
- Profil utilisateur complet

## 🔑 Fonctionnement

### Authentification
1. **Inscription** : Créez votre compte avec nom, email et mot de passe
2. **Connexion** : Accédez à l'application avec vos identifiants
3. **Session** : Restez connecté grâce au stockage sécurisé des tokens

### Navigation
- **Bottom Tab Navigation** : Accès rapide aux sections principales
- **Stack Navigation** : Navigation fluide entre les écrans
- **Gestion des états** : Interface réactive et responsive

## 🛠️ Scripts disponibles

```bash
# Développement
npm start              # Démarrer Metro bundler
npm run android        # Lancer sur Android
npm run ios           # Lancer sur iOS

# Qualité du code
npm run lint          # Vérifier le code avec ESLint
npm test             # Exécuter les tests Jest

# Construction
npm run build        # Build de production
```

## 🌐 API Backend

L'application communique avec une API REST hébergée sur :
```
Base URL: http://51.91.249.126:3010/
```

### Endpoints principaux
- `POST /users/create` - Création d'utilisateur
- `POST /users/login` - Authentification
- `GET /categories/categories` - Liste des catégories
- `POST /create/...` - Gestion des annonces
- `POST /favorites/...` - Gestion des favoris

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez votre **branche feature** (`git checkout -b feature/amazing-feature`)
3. **Committez** vos changements (`git commit -m 'Add amazing feature'`)
4. **Push** vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une **Pull Request**

## 📋 TODO

- [ ] Tests unitaires et d'intégration
- [ ] Push notifications
- [ ] Chat en temps réel
- [ ] Géolocalisation des produits
- [ ] Système de notation utilisateurs
- [ ] Mode sombre

## 👨‍💻 Auteur

**Bastien GAILLARD**  
Étudiant 3ème année à Nextech  
📧 [bastien.gaillard@example.com](mailto:bastien.gaillard@example.com)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez la [documentation React Native](https://reactnative.dev/docs/getting-started)
2. Consultez les [issues GitHub](https://github.com/Bastien-Gaillard/Occaz_deco/issues)
3. Contactez l'équipe de développement

---

<div align="center">
  <p>Développé avec ❤️ par <strong>Bastien GAILLARD</strong></p>
  <p>© 2025 Occaz Deco - Tous droits réservés</p>
</div>
