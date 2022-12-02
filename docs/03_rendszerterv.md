# 1. BE végpontok(API leíró):

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


# 2. Adatbázis terv
    - Adatbázis schema ábra feltöltve a 
    - Híroldal cikkei: adatbázisba szervezve (sqlite)
    - A cikkek tematikusan csoportosítva (kategóriák)
    - Felhasználók bejelentkezési adatai is az adatbázisban tárolódnak
    - Adatbázis táblák:
      - CIKKEK tábla:
         - cikkID INTEGER PRIMARY KEY UNIQUE
         - cikkCim TEXT (100)
         - cikkLead TEXT (500)
         - cikkTorzs TEXT (4000)
         - cikkSzerzo TEXT (40)
         - cikkDate DATETIME
         - vezetoHir BOOLEAN DEFAULT FALSE
         - katID INTEGER FOREIGN KEY
         - Megkötések a táblához: a CIKKEK tábla katID-ja idegen kulcs, N:1 kapcsolatban van a KATEGORIA tábla katID-jával 

      - KATEGORIA tábla
         - katID INTEGER PRIMARY KEY UNIQUE
         - katNev TEÍXT (40)

      - USER tábla
         - userID INTEGER PRIMARY KEY UNIQUE
         - userNev TEXT (40)
         - email TEXT (40)
         - pword TEXT (4)
         - regDatum DATETIME
         
    Lentebb megtalálható képmetszettek menüpontben az adatbázishoz tartozó egyed-kapcsolat ábra.
## 3. 🛠 Felhasznált eszközök
Javascript, HTML, CSS, Bootsrap, Node.js, MYSQL Workbench, SQLite

## 4. Képmetszetek

![App Screenshot](https://i.imgur.com/eIJG3nA.png)


## 5. Szerzők

- Csík Ákos
- Maró Melinda
- Kenyeres Tamás
- Schmidt Anikó
## 6. Visszajelzés

Ha bármilyen észrevételed van a projekttel kapcsolatosan, kérünk vedd fel velünk a kapcsolatot az alábbi email címem:
johirportal@portalok.hu

