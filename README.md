# Datenbank Discord Bot
>Ein Discord Bot, der wie eine Datenbank aufgebaut ist, in der die Links von verschiedenen Social Media Stars ausgegeben wird.


**Wie sollte der Bot aufgebaut sein und was sollte er können?**

Der Bot trägt den Namen `Datenbank`. Mit dem sogenannten `Admin Panel` oder mit dem Befehl `/setup` kann ein sogenanntes `Hauptmenü` in den Kanal, in dem man den Befehl ausführt, gesendet werden.

![Hauptmenue](https://user-images.githubusercontent.com/122997603/213225467-5175aaaf-89a8-4f8e-9e9d-04a582edb1f0.png)

Durch betätigen des Buttons `Suchen` kann die Suche gestartet werden.
Ebenfalls kann die Suche mit dem Befehl `/suchen` gestartet werden.

Um direkt eine Suche zu starten kann der Befehl `/datenbank {kategorie} {deutsch, international} {creator}` verwendet werden.
Wenn der Benutzer eine nicht vorhandene Kategorie eingibt, wird ihm dies über eine Nachricht dargestellt. 

![Kategorie nicht gefunden](https://user-images.githubusercontent.com/122997603/213725469-e88168e0-335b-4e30-86c3-64b840d0b7bb.png)

Wenn der Benutzer einen nicht vorhandenen Content Creator eingibt, wird geprüft ob der eingegebene Content Creator Ähnlichkeiten der schreibweise mit einem aus der Datenbank hat. Wenn dies der Fall ist, wird eine Nachricht dargestellt. 

![AI](https://user-images.githubusercontent.com/122997603/213725812-93da1281-4908-4c7d-bdca-8fae3d473120.png)

Bei Betätigung des Buttons `Ja` wird die Meldung automatisch gelöscht und das `Ausgabe Menü`, mit den ähnlichen Content Creator wird dargestellt (gesendet). 
Bei Betätigung des Buttons `Nein` wird die Meldung `Content Creator konnte nicht gefunden werden` (Siehe untere Abbildung).

Wenn der eingegebene Content Creator keinerlei Ähnlichkeiten mit den Einträgen der Datenbank hat, wird ebenfalls eine Nachricht dargestellt. 

![Content Creator nicht gefunden](https://user-images.githubusercontent.com/122997603/213726117-4d92c116-04c4-4405-b761-0b0f6b1bf270.png)

Beim Betätigen des Buttons `Ja`, erscheint ein PopUp Fenser, mit drei Eingabe Fenstern. Im Ersten wird folgendes gefragt: "In welcher der Kategorien befindet sich der Content Creator? ({kategorien})" Im Zweiten: "Wie lautet der Name des Content Creators?" und im Dritten: "Wie lautet der Link zum Content Creator?".
Daraufhin bekommt der Server Besitzer eine DM mit dem Namen des Benutzers, der vorgeschlagenen Kategorie, dem vorgeschlagenen Content Creator und der Zeit an dem der Vorschlag getätigt wurde.

Mit klicken auf `Nein` wird die Nachricht gelöscht und es wird eine neue Nachricht gesendet. Diese Nachricht wird innerhalb von 5 Sekunden wieder gelöscht.
Sie dient nur als Information.

![kein vorschlag](https://user-images.githubusercontent.com/122997603/213724788-9fe5e05a-17a3-4347-8f13-851baddfbd83.png)

Nach dem Betätigen des Buttons `Suchen`, oder durch den Befehl `/suchen`, wird das Hauptmenü und Befehl aus dem Chat gelöscht und das Menü `Kategorie` gesendet.

![Kategorien1](https://user-images.githubusercontent.com/122997603/213714942-15edc92f-2388-4ce5-8ca8-9dc41c5281b4.png)
![Kategorien](https://user-images.githubusercontent.com/122997603/213715010-0b360fba-b8b6-431a-8c6f-380993ca16be.png)

Nach erfolgreicher Auswahl wird das Menü `Kategorie` aus dem Chat gelöscht und das Menü `Content Creator` gesendet.

![content-creator](https://user-images.githubusercontent.com/122997603/213274118-9ab44a72-5d3d-4fab-bc1c-a939f004770e.png)

![content-creator1](https://user-images.githubusercontent.com/122997603/213278769-6bbf8a84-a7f3-48ce-875e-aa45dae63879.png)

Nach erfolgreicher Auswahl wird das Menü `Content Creator` aus dem Chat gelöscht und das Menü `Datenbank` gesendet.

![ausgabe](https://user-images.githubusercontent.com/122997603/213277713-fba88c2f-3abf-4c7a-a9b7-229a65e1dd07.png)

`{creator}` wird hierbei durch den zuvor ausgewählten Namen des Content Creators ersetzt, `{kategorie}` durch die zuvor ausgewählte Kategorie und `{link}` durch den gespeicherten Link des Content Creators.

Bei Betätigung von dem Button `Hauptmenü` wird die derzeit angezeigte Nachricht gelöscht und die Hauptmenü Nachricht wird gesendet.
Dies trifft ebenfalls auf die Buttons `Anderen Creator wählen` und `Andere Kategorie wählen` zu.

Nach einer Zeit von 3 Sekunden bekommt der Benutzer in den gleichen Chat

Die Nachrichten im Chat sind immer nur für den Benutzer sichtbar der mit dem Bot interagiert. Alle anderen Benutzer die mit dem Bot keine Interaktion hatten sehen immer nur die Hauptmenü Nachricht.

Um Einstellungen vornehmen zu können gibt es das sogenannte `Admin Panel` und eigene Befehle.

**Admin Panel:**
Wenn der Button `Kategorie hinzufügen` betätigt wird erscheint ein PopUp Fenster, worin nach der Eingabe eines Namens für die Kategorie (Titel wie z.B. YouTube) und einer Beschreibung (z.B. Deutsch, International) gefragt wird.
Nach "absenden" des Fensters wird die Kategorie der Liste hinzugefügt.

Nach der Betätigung des Button `Creator hinzufügen`, erscheint einPopUp Fenster, worin nach dem Namen des Content Creator (z.B. Kurzgesagt), nach der Kategorie (z.B. YouTube) und nach dem Link (z.B. https://www.youtube.com/user/kurzgesagt) gefragt wird.
Nach "absenden" des Fensters wird der Content Creator der Liste hinzugefügt.

Der Button `Link ersetzen` dient zum ersetzen des Links eines Content Creators. Dabei erscheint PopUp Fenster, worin nach dem neuen Link gefragt wird.

Der Button `Service an` hat die gleiche Funktion wie der Befehl `/service-on`

Der Button `Service aus` hat die gleiche Funktion wie der Befehl `/service-on`

![Admin Panel](https://user-images.githubusercontent.com/122997603/213730549-35443a45-25df-43a7-b01b-61972d6607e7.png)

Mit dem Befehl `/add-category {category}` kann eine neue Kategorie hinzugefügt werden, mit `/add-creator {category} {creator} {link}` einen neuen Content Creator und mit `/refresh-link {creator}` kann ein vorhandener Link eines Content Creator mit einem neuen ersetzt werden.
Ebenfalls ist es mit den Befehlen `/delete-category {category} oder all` und mit `/delete-creator {creator}` möglich die vorhandenen Kategorien und Content Creator zu löschen.

Der Befehl `/service-on` setzt den Bot in ein Wartungsarbeiten Modus. Das Hauptmenü wird durch eine Nachricht ersetzt und alle anderen Nachrichten werden gelöscht. Kein Befehl kann mehr ausgeführt werden.

Der Befehl `/service-off` vergibt wieder Berechtigung für die Befehle und die Wartungsarbeiten Nachricht wird wieder durch das Hauptmenü ersetzt.

**Zusatzinformation:**
Farbe des Streifens der Embed Nachricht: `#xff8400`

**Checkliste**
- [ ] Hauptmenü
- [ ] Kategorien
- [ ] Content Creator
- [ ] Link Ausgabe
- [ ] Befehle
- [ ] Admin Panel
