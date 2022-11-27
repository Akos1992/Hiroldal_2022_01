let isAdmin = true; // todo lecserélni igazi backend hívásra
let isLoggedIn = true;

const bejelentkezes = () =>{
    // todo auth backend hívás
    isLoggedIn = true;
    document.getElementById("kijelentkezes").style="display:block";
    document.getElementById("bejelentkezes").style="display:none";
}

const kijelentkezes = () => {
    isLoggedIn = false;
    document.getElementById("kijelentkezes").style="display:none";
    document.getElementById("bejelentkezes").style="display:block";
}