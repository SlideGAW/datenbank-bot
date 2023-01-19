# Datenbank Discord Bot
>Ein Discord Bot, der wie eine Datenbank aufgebaut ist, in der die Links von verschiedenen Social Media Stars ausgegeben wird.


**Wie sollte der Bot aufgebaut sein und was sollte er können?**

Der Bot trägt den Namen ```Datenbank``` und kann mit dem Befehl ```/setup``` kann eine Nachricht, nämlich das sogenannte ```Hauptmenü``` in den Kanal gesendet werden.

![Hauptmenue](https://user-images.githubusercontent.com/122997603/213225467-5175aaaf-89a8-4f8e-9e9d-04a582edb1f0.png)

Mit dem Befehl ```/suchen``` kann die Suche ebenfalls gestartet werden.


Nach dem Betätigen des Buttons ```Suchen```, wird das Hauptmenü aus dem Chat gelöscht und das Menü ```Kategorie``` gesendet.

![Kategorien1](https://user-images.githubusercontent.com/122997603/213277434-446bdc5f-b5ea-4226-8537-72eb19adf6e0.png)
![Kategorien](https://user-images.githubusercontent.com/122997603/213273934-61157ac8-5821-48d7-ab91-e45e0cf85e88.png)

Ebenfalls kann mit dem Befehl ```/kategorie {youtube, twitch, twitter} {deutsch, international}``` eine Kategorie gesucht werden.

Nach erfolgreicher Auswahl wird das Menü ```Kategorie``` aus dem Chat gelöscht und das Menü ```Content Creator``` gesendet.

![content-creator](https://user-images.githubusercontent.com/122997603/213274118-9ab44a72-5d3d-4fab-bc1c-a939f004770e.png)

![content-creator1](https://user-images.githubusercontent.com/122997603/213278769-6bbf8a84-a7f3-48ce-875e-aa45dae63879.png)

Ebenfalls kann mit dem Befehl ```/creator {paluten, gronkh, usw.}``` ein Content Creator gesucht werden.

Nach erfolgreicher Auswahl wird das Menü ```Content Creator``` aus dem Chat gelöscht und das Menü ```Datenbank``` gesendet.

![ausgabe](https://user-images.githubusercontent.com/122997603/213277713-fba88c2f-3abf-4c7a-a9b7-229a65e1dd07.png)

Bei Betätigung von dem Button ```Hauptmenü``` wird die derzeit angezeigte Nachricht gelöscht und die Hauptmenü Nachricht wird gesendet.
Dies trifft ebenfalls auf die Buttons ```Anderen Creator wählen``` und ```Andere Kategorie wählen``` zu.

Die Nachrichten im Chat sind immer nur für den Benutzer sichtbar der mit dem Bot interagiert. Alle anderen Benutzer die mit dem Bot keine Interaktion hatten sehen immer nur die Hauptmenü Nachricht.

Um Einstellungen vornehmen zu können gibt es das sogenannte ```Admin Panel``` und eigene Befehle.

Wenn der Button ```Kategorie hinzufügen``` betätigt wird erscheint ein Fenster, worin nach der Eingabe eines Namens für die Kategorie (Titel wie z.B. YouTube) und einer Beschreibung (z.B. Deutsch, International) gefragt wird.
Mit dem Befehl ```/add-category {category}``` kann eine neue Kategorie hinzugefügt werden, mit ```/add-creator {category} {creator} {link}``` einen neuen Content Creator und mit ```/refresh-link {creator}``` kann ein vorhandener Link eines Content Creator mit einem neuen ersetzt werden.
Ebenfalls ist es mit den Befehlen ```/delete-category {category} oder all``` und mit ```/delete-creator {creator}``` möglich die vorhandenen Kategorien und Content Creator zu löschen.
