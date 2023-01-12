# 1. Áttekintés
    Az általunk fejlesztetett weboldal célja, hogy a szakmai cikkeken kívül a laikusok számára is érthető és
	szórakoztató anyagok is szerepeljenek a kínálatban: hitelesség szórakoztatóan. 
	A cikkek tematikáját illetően kategóriákba - rovatokba szervezzük azokat.
    A weboldal teljes mértékben magyar nyelvű lesz, az adminisztrátor hozhat létre új cikkeket, illetve módosíthatja a már élesített anyagokat. Kezdetben más jogosultsági szintet nem alakítunk ki, később azonban felhasználói regisztrációhoz kívánjuk kötni az egyedi hírdetésmentes tartalmak elérhetőségét.
# 2. Jelenlegi helyzet leírása
    Számtalan hírportál található a magyar online sajtó piacán, de többségük ugyanazon séma mentén szerveződnek. Túlsúlyba kerültek a negatív hírek, a kattintásért vívott harcban elmosódtak az újságírás szakmai határai. 
    Kevés, szinte egyik hírportál sem használja ki teljes mértékben a mai információtechnológia adta lehetőségeket sem a funkcionalitásban sem a látvány/dizájn területén. 
    Saját hangvétel, saját brand építése a célunk, nemcsak az aktív hírfogyasztókat szeretnénk elérni, hanem új olvasókat is bevonzani. 
# 3. Vágyálom rendszer
    A weboldalt úgy tervezzük, hogy - ideális működése - esetén a korábbi igények meghatározása alapján az alábbi funkciókat tartalmazza:
        - Különböző kategóriák közül lehet választani
        - Lehetséges keresni a hírek közöttt
        - Adatbázis a hírek könnyebb kereshetősége és létrehozása érdekében
# 4. Követelménylista
      - Átláthatóság
        - Megjelenés
            - Letisztult megjelenés
            - Logikus felépítés
                - Fejléc átláthatóság
        - Dinamikus megjelenítés
            - Reszponzív felület

    - Funkcionalitás
        - Hírek kezelése
           -  Hírek
                - Admin képes hírt létrehozni
                - Admin képes hírt szerkeszteni                
                - Admin képes hírt törölni
            - Adat szűrés
				- Admin képes szűrni a hírek között
				- Mindenki képes szűrni a hírek között
				- Lehetőség legyen kategóriák szerinti szűrésre
			- Regisztráció
				- Regisztrációs űrlap
				- Csak olvasói regisztráció kezelése
			- Bejelentkezés
				- Adminok részére - admin jogok
				- Felhasználók részére - user jogok
# 5. Fogalomszótár
    5.1 Szoftver
		Szoftvernek nevezzük a számítógépre írt programokat. Szofver is olyan mint egy csoki, egy termék.
		A szoftvereket programozók készítik. Szellemi termékek, kézzel nem megfoghatóak. 
		A szoftver a számítógépen futó programok összefoglaló neve, valamint a hardver egységeket működtető-, 
		és vezérlő programok összessége.
	5.2 HTML (angolul: 		HyperText Markup Language	)
		Egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, 
		és mára már internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával. 
		Az aktuális változata az 5, mely az SGML általános jelölőnyelv egy konkrét alkalmazása 
		(azaz minden 5-ös HTML dokumentum egyben az SGML dokumentumszabványnak is meg kell hogy feleljen). 
	5.3 PHP
		A PHP egy általános szerveroldali szkriptnyelv dinamikus weblapok készítésére. 
		Az első szkriptnyelvek egyike, amely külső fájl használata helyett HTML oldalba ágyazható.
	5.4 CSS (Cascading Style Sheets, magyarul: lépcsőzetes stíluslapok)*
		A számítástechnikában egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok 
		megjelenését írja le. Ezenkívül használható bármilyen XML alapú dokumentum stílusának leírására is, mint például az SVG, XUL stb.		
	5.5 Bootstrap
		A Bootstrap egy nyílt forráskódú keretrendszer (framework), mely HTML, CSS, JavaScript technológiákat használ. Alapvetően arra jó, 
		hogy nagyon könnyedén, és minimális energia befektetéssel tudjon valaki jól kinéző, bármilyen képernyőméreten szépen megjelenő weboldalakat készíteni.
	5.5 Javascript
		A JavaScript programozási nyelv egy objektumorientált, 
		prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
	5.6 Adatbázis
		Az adatbázis azonos minőségű (jellemzőjű), többnyire strukturált adatok összessége, amelyet egy azok tárolására, lekérdezésére és szerkesztésére alkalmas szoftvereszköz kezel.
		Az adatbázis fogalma nem keverendő össze az adatbázis-kezelővel,  amely egy eszköz az adatbázis működtetésére, rendszerszintű és  felhasználói folyamatainak szervezésére.
		Az adatbázisok célja adatok megbízható, hosszú távon tartós (idegen szóval: perzisztens) tárolása és viszonylag gyors visszakereshetőségének biztosítása.		
	5.7 Adminisztrátor (admin)
		Az a személy aki egy számítógépes vagy számítógép-hálózati szolgáltatás irányítója. Az adminisztrátorhoz gyakran egy fiók tartozik, amit felhasználói név és jelszó azonosít.
	5.8 Felhasználó (user)
		Az a személy (végfelhasználó, end-user) vagy szoftverágens, aki egy számítógépes vagy számítógép-hálózati szolgáltatás használója. A felhasználóhoz gyakran felhasználói fiók tartozik, 
		amit felhasználói név (username, screen name, nick vagy handle) azonosít.
		
# 6. Használati esetek
	- Admin
		- Weboldal alap funkciók 
		- Rögzítés
		- Szerkesztés
		- Törlés
		- Keresés
		- Szűrés
	- USER
		- Weboldal alap funkciók
		- Keresés
		- Szűrés
# 7. Képernyő tervek
	- kezdeti kézzel rajzolt tervek megvalósítása ADOBE INDESIGN szoftverre. Ezek a hubra feltöltésre kerülnek, mint prototípus tervek.
	- A főoldalon jelennek meg a weblap legfontosabb elemei. Vízszintes sávban helyezkednek el a kategóriák. Melyek kiemelt részét képezik a weblapnak.
	- Jobb felső sarokban található meg a bejelentkezés adminok részére (egyelőre), később kialakításra kerül a USER-ek bejelentkezése is, hozzászólás funkció bekapcsolásához.
	- Rólunk fülre kattintva néhány sorban összefoglaljuk kik vagyunk, mit akarunk, hova tartunk.
	- Keresés ablakra beírva lehet keresni a meglévő hírek között. 
	- Kapcsolat fülön lehet üzenetet küldeni részünkre.
	- A főoldal alján a legfontosabb információk érhetőek el. 
    Lentebb képernyőképek megtekinthetőek
# 8. Követelmény megfelelés
    A képernyőtervben minden, a követelményspecifikációban megfogalmazott vágyálom megjelenik. 
## 9. 🛠 Felhasznált eszközök
Javascript, HTML, CSS, Bootsrap, Node.js 

## 10. Képmetszetek

![App Screenshot](https://i.imgur.com/X95NRSU.png)


## 11. Szerzők

- Csík Ákos
- Maró Melinda
- Kenyeres Tamás
- Schmidt Anikó
## 12. Visszajelzés

Ha bármilyen észrevételed van a projekttel kapcsolatosan, kérünk vedd fel velünk a kapcsolatot az alábbi email címem:
johirportal@portalok.hu
