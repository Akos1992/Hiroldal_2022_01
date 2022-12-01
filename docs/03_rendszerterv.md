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
   - cikkCim TEXT (100)
   - cikkLead TEXT (500)
   - cikkTorzs TEXT (4000)
   - cikkSzerzo TEXT (40)
   - cikkDate DATETIME
   - vezetoHir BOOLEAN DEFAULT FALSE
   - katID INTEGER FOREIGN KEY
    Megkötések a táblához:
    A CIKKEK tábla katID-ja idegen kulcs, N:1 kapcsolatba van a KATEGORIA tábla katID-jával. 

 - KATEGORIA tábla
    - katID INTEGER PRIMARY KEY UNIQUE
    - katNev TEÍXT (40)

 - USER tábla
    - userID: INTEGER PRIMARY KEY UNIQUE
    - userNev: TEXT (40)
    - email: TEXT (40)
    - jelszó: TEXT (4)