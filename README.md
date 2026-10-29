# support-ticket

DESCRIPTION DU PROJET:
support ticket api est une api rest permettant de gérer des tickets de support . 
elle permets de creer des tickets, de récupérer un ticket par son identifiant et de modifier son statut.

Le projet est développé avec Node.js,PostgreSQL, et Prisma.

FONCIONNALITES:
Creer un ticket de support. 
lister tous les tickets.
récupérer un ticket par son ID.
Mettre a jour statut d'un ticket.


Node.js et Express pour le backend
TypeScript pour le développement
PostgreSQL pour la base de données
Prisma ORM pour communiquer avec la base de données

Répartition des tâches

Anaïs — PostgreSQL et Prisma

Installer et configurer PostgreSQL.
Créer le schéma de la base de données avec Prisma.
Gérer les tables et les migrations.

Brayan — Backend

Développer l’API avec Node.js, Express et TypeScript.
Créer les routes et intégrer Prisma.
Gérer les requêtes et les erreurs.

Endpoints

Méthode    Route    Fonction
POST    /api/tickets    Créer un ticket
GET    /api/tickets    Lister les tickets
GET    /api/tickets/:id    Consulter un ticket
PATCH    /api/tickets/:id/status    Modifier son statut

Statuts des tickets

OPEN : ouvert
IN_PROGRESS : en cours
CLOSED : clôturé

Documentation

Node.js
Express
TypeScript
PostgreSQL
Prisma

Projet en cours de développement.
