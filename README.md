# Asphalte Paca — site immersif

Site vitrine one-page animé de l'association automobile Asphalte Paca (Var),
construit sur le modèle « Site Immersif ». Site 100 % statique : aucun build.

## Voir le site en local

    python3 -m http.server 4385

puis ouvrir http://localhost:4385.

## Modifier le contenu

- **Textes et choix des photos** : uniquement dans `content.js`
  (partie `window.SITE_CONTENT`, la partie « INJECTION » ne se touche pas).
- **Photos** : dans `images/`. Ce sont toutes de vraies photos de sorties de
  l'association (Château Astross, Château Mouresse, Domaine Saint Julien
  d'Aille, Lac de Saint-Cassien, soirée Fast X au Carré Léon).
- `app.js`, `index.html` et `styles.css` sont le moteur du modèle : ne pas
  les modifier (thème sombre et accent doré `#d9b876` déjà réglés).

## Formats des photos

| Emplacement | Fichiers | Format |
|---|---|---|
| Image du titre | `hero.jpg` | 1800×1200 |
| Image des 3 étapes | `process.jpg` | 1800×1200 |
| Sélection (8) | `p1.jpg` → `p8.jpg` | 640 de large, hauteur 460–820 |
| Nuage d'accueil (10) | `f1.jpg` → `f10.jpg` | 220–380 de large |
| Traînée sous la souris (20) | `t1.jpg` → `t20.jpg` | 200–280 de large |

## Mise en ligne

N'importe quel hébergement statique convient (GitHub Pages, Netlify,
Hostinger…) : il suffit d'envoyer le contenu du dossier.
