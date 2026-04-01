# Hairbrb

**Base Mongo:**
Schema de la base:
● User(email, firstName, lastName, phone)
● Property(_id, ownerId, city, street, postalCode, beds, bedrooms, distance, price, rating, imageUrl)
Clé étrangère: ownerId référence User.email
● Offer(offerId, propertyId, startDate, endDate)
Clé étrangère: propertyId référence Property._id
● Booking(propertyId, renterEmail, startDate, endDate, review)
Clé étrangère: propertyId référence Property._id, Clé étrangère: renterEmail référence User.email

**Liste des Services Web (Méthodes et Routes):**
1. Gestion des Utilisateurs
● Trouver tous les utilisateurs : GET /api/users
● Créer un utilisateur : POST /api/users
● Trouver un utilisateur par ID : GET /api/users/:id
● Mettre à jour un utilisateur : PUT /api/users/:id
● Supprimer un utilisateur : DELETE /api/users/:id
2. Gestion des Propriétés
● Trouver toutes les propriétés : GET /api/properties
● Créer une propriété : POST /api/properties
● Trouver une propriété par ID : GET /api/properties/:id
● Mettre à jour une propriété : PUT /api/properties/:id
● Supprimer une propriété : DELETE /api/properties/:id
3. Gestion des Réservations
● Trouver toutes les réservations : GET /api/bookings
● Créer une réservation : POST /api/bookings
● Trouver une réservation par ID : GET /api/bookings/:id
● Mettre à jour une réservation : PUT /api/bookings/:id
● Supprimer une réservation : DELETE /api/bookings/:id
● Vérifier la disponibilité d'une propriété : GET /api/bookings/availability
4. Gestion des Offres
● Rechercher des offres : GET /api/offers/search
● Trouver toutes les offres : GET /api/offers
● Créer une offre : POST /api/offers
● Trouver une offre par ID : GET /api/offers/:id
● Mettre à jour une offre : PUT /api/offers/:id
● Supprimer une offre : DELETE /api/offers/:id
5. Gestion des Images
● Accès aux images : GET /images/:filename

**Captures d'écran: **
1. Page d'Accueil:
    <img width="1913" height="928" alt="image" src="https://github.com/user-attachments/assets/68672b27-8e37-492a-9049-c73f765db4d6" />

2. Formulaire de Recherche:
    <img width="565" height="637" alt="image" src="https://github.com/user-attachments/assets/0569e964-d57e-4af5-acaf-e1f8632e55e1" />

3. Affichage des Offres:
   <img width="1902" height="928" alt="image" src="https://github.com/user-attachments/assets/b70cb320-2ff5-48e6-aff0-c832516f3fc6" />

4. Popup d'information supplémentaires:
   <img width="983" height="884" alt="image" src="https://github.com/user-attachments/assets/9b657445-cc54-4d6f-b883-8f5e594cd12b" />

5. Formulaire de Réservation:
   <img width="983" height="884" alt="image" src="https://github.com/user-attachments/assets/0d144ac8-38af-4684-8d5f-6e1fd9c8b966" />

6. Calendrier de Réservation, avec les dates incohérentes ou déjà réservées qui ne sont pas sélectionnables:
    <img width="692" height="485" alt="image" src="https://github.com/user-attachments/assets/426f9067-bad4-441d-bdfd-1db66af7487b" />

Membres du Groupe :
● Almallouhi Mohamad Satea [mohamad-satea.almallouhi@etu.umontpellier.fr]
● El Jaafari Samy [samy.el-jaafari@etu.umontpellier.fr]


