# Portfolio iOS

Portfolio de **Nollan DA SILVA PEREIRA**, étudiant en Bachelor Cybersécurité (École 2600) à la recherche d'une alternance Développeur Web à partir de septembre 2026.

Le site se présente comme un véritable iPhone interactif : écran verrouillé, animation de déverrouillage, écran d'accueil avec applications, et une page dédiée par application (Projets, Compétences, Parcours).

## Fonctionnalités

- **Sélecteur d'appareil** : sur ordinateur/tablette, choix entre iPhone, iPad et Mac à l'arrivée (iPad et Mac à venir). Sur téléphone, accès direct à la version iPhone.
- **Écran verrouillé** : heure et date en temps réel, notifications, glissement vers le haut au clic pour déverrouiller (animation façon iOS).
- **Écran d'accueil** : widget de présentation, grille d'applications, dock.
- **Pages applicatives** :
  - **Projets** — projets GitHub présentés sous forme de liste.
  - **Compétences** — stack technique groupée par catégorie (back-end, front-end, sécurité, outils), avec les logos officiels des technologies.
  - **Parcours** — expériences professionnelles, formations, certifications et objectifs.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- Police [Inter](https://vercel.com/font) via `next/font`

## Démarrer le projet

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Structure

```
app/
  Accueil/      → écran d'accueil de l'iPhone
  Projets/      → page "Projets"
  Competences/  → page "Compétences"
  Parcours/     → page "Parcours"
components/     → cadre de l'iPhone, notifications, widgets, etc.
```

## Liens

- GitHub : [Nollandsp](https://github.com/Nollandsp)
- LinkedIn : [nollan-da-silva-pereira](https://linkedin.com/in/nollan-da-silva-pereira-125338250)
