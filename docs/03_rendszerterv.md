1. BE végpontok(API leíró):

- /news
	- GET / - minden hírt visszaad
	- GET /:id - az adott id-jú hírt adja vissza
	- GET ?category=:id - adott kategóriájú híreket ad vissza
	- POST ?newsData={newsObject} - új hír hozzáadása vagy szerkesztése
	- DELETE /:id - az adott id-jú hírt törli
	- PUT legyen a szerkesztésre külön?
	
- /categories
	- GET / - minden kategóriát visszaad
	
- /auth
	- POST / - adott felhasználónév és jelszó alapján bejelentkezik(csak adminok)


2. Adatbázis terv

 - CIKKEK tábla
   - cikkID INTEGER PRIMARY KEY UNIQUE
   - cikkCim TEXT (0, 100)
   - cikkLead TEXT (0, 500)
   - cikkTorzs TEXT (0, 4000)
   - cikkSzerzo TEXT (0, 40)
   - cikkDate DATETIME
   - vezetoHir BOOLEAN (0, 1)
   - katID INTEGER FOREIGN KEY
    Megkötések a táblához:
    A CIKKEK tábla katID-ja idegen kulcs, N:1 kapcsolatba van a KATEGORIAK tábla katID-jával. 

 - Categories tábla
    - id: szám
    - név: szöveg

 - Uaers tábla
    - userID: szám
    - username: szöveg
    - email: szöveg
    - jelszó: szöveg