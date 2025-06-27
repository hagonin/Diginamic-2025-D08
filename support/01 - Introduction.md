![[diginamic_logo_3-02.png]]
# 1 Références 
- [La doc en français de Mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [vidéo en français par Thierry Chatel, membre de Crealead](https://www.youtube.com/watch?v=PSeU1IJztkI)
- [Une introduction très complète sur le site W3Schools.com](https://www.w3schools.com/js/default.asp)
- [Le support de ce cours en pdf (pas ou peu mis en page)](https://coopernet.fr/sites/default/files/inline-files/2021-06-24_Javascript.pdf)
# 2 Historique
![Brendan Eich](https://coopernet.fr/sites/default/files/inline-images/BrendanEich.jpg)En 1995, **Brendan Eich**, programmeur chez Netscape développe en quelques jours un langage de script. Il fut d'abord appelé Mocha puis LiveScript puis enfin JavaScript pour surfer sur la vague du langage Java lancé à grands renforts de marketing par Sun Microsystems.
# 3 JavaScript Engine
_JavasScript Engine_ ou le "moteur JavaScript" est un **programme logiciel qui interprète et exécute du code en langage JavaScript**. Les moteurs JavaScript sont généralement intégrés aux navigateurs Web mais ils peuvent également s'exécuter dans des environnement serveur comme Node.
Le premier moteur JavaScript, SpiderMonkey, a été créé par l'informaticien américain **Brendan Eich** pour le navigateur Netscape Navigator. Il était programmé en langage C.
Les premiers moteurs JavaScript étaient de simples interpréteurs. Puis, les versions ont évolué et ont intégré la compilation afin d'améliorer les performances d'exécution du code JavaScript. 
**V8** est le moteur JavaScript open source le plus utilisé et le plus connu. Il est développé par Google, utilisé sur Google Chrome, Chromium et Node.js.
Cf [https://fr.wikipedia.org/wiki/Moteur_JavaScript](https://fr.wikipedia.org/wiki/Moteur_JavaScript)
## 3.1 JavaScript Runtime
JavaScript Runtime est l'environnement qui fournit tous les composants nécessaires pour utiliser et exécuter des programmes js.

Prenons l'exemple du navigateur Chrome. Le schéma suivant indique que Chrome contient non-seulement un moteur de JavaScript (V8 en l'occurence) mais aussi :
- des web APIs comme le DOM, le  Storage, les Timers
- des queues (de task ou de microtasks, ces dernières ayant la priorité)
- des boucles d'événements
![js runtime](https://coopernet.fr/sites/default/files/inline-images/runtime.png)
# 4 Visual Studio Code
## 4.1 Installer un "linter"
Ajouter l'extension  "Babel JavaScript" de Michael McDermott
## 4.2 Nouveau raccourci clavier
On va très souvent utiliser l'instruction "console.log()". Voici un "snipet" à ajouter dans le fichier keybindings.json. Pour ouvrir ce fichier : 
- Allez dans File (Fichier) > Preferences (Préférences) > Keyboard Shortcuts (Raccourcis clavier)
- Une fois dans la page des raccourcis, cliquez sur l'icône ![[./images/shortcuts.png]] en haut à droite de la fenêtre.
```js
[    
    {
        "key": "ctrl+shift+alt+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log(`${TM_SELECTED_TEXT}$1`)$2;"
        }
    }
]
```
Attention à vérifier que le fichier keybindings.json est bien formaté
# 5 Commentaires
- [https://jsdoc.app/index.html](https://jsdoc.app/index.html)
- function : [https://jsdoc.app/about-getting-started.html](https://jsdoc.app/about-getting-started.html)
- classes : [https://jsdoc.app/howto-es2015-classes.html](https://jsdoc.app/howto-es2015-classes.html)
- return : [https://jsdoc.app/tags-returns.html](https://jsdoc.app/tags-returns.html)
- async : [https://jsdoc.app/tags-async.html](https://jsdoc.app/tags-async.html)