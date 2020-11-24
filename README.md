# Projet 5 => chapitre 7, 8, 9

Dans ce projet nous allons nous intéresser à l'injection des dépendances via l'utilisation d'un service ! Vous allez créer un service qui sera partagé entre deux composants, pratique très courante dans une application Angular.

Regardez bien les chapitres 7 8 et 9 si vous bloquez sur le projet.

Bon courage :)

## Lancer le projet

Pour lancer l'application il faut d'abord installer les dépendances avec npm :

`npm i`

Puis lancer le serveur de développement avec :

`ng serve` ou `npm start`

## Objectifs

- [*] Créer un service `UserService` dans le dossier shared/services.
- [*] Dans ce service, utilisez un attribut public ( `public users` ) qui sera un `BehaviorSubject` de type `string[]`. Ajoutez également une méthode `addUser()` pour pouvoir ajouter un nom d'utilisateur dans cet attribut.
- [*] Injectez le service dans le composant `AddUserComponent`.
- [*] Utilisez la méthode `AddUser()` du service `UserService` pour ajouter un user dans le BehaviorSubject `public users`.
- [*] Dans le composant `UserListComponent`, injectez le service `UserService` et utilisez l'attribut `users` pour récuperer la liste des users et l'afficher dans la liste.

## Avant de finir le projet

Pensez à pusher votre travail avant de cliquer sur 'terminer le projet'.

## Besoin d'aide ?

Demandez-nous dans le chat nous vous aiderons :)
