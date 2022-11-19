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

 - News tábla
    - id: szám
    - főcím: szöveg
    - kategória: categoryId
    - hírszöveg: szöveg
    - főhír: boolean
    - szerző: szöveg
    - kép: bináris

    Megkötések a táblához:
    A News tábla categoryId-ja 1:1 kapcsolatba van az Categories tábla id-jával. 

 - Categories tábla
    - id: szám
    - név: szöveg

 - Admins tábla
    - username: szöveg
    - jelszó: szöveg