
// Definerer variabelen som array
const arrayTabell = [];

//Oppretter en funksjon som lager en tabell med rad som har verdiene som trengs
function leggArrayTabell() {
    let ut = "";
    for (let p of arrayTabell) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefon + "<td>" + p.email + "</td>";
        ut += "</tr>";
    }
    document.getElementById("arrayTabell").innerHTML = ut;
}

// en funksjon som henter verdiene av input-boksene, deretter legger disse verdiene inn i funksjonen "leggArrayTabell" mot slutten.
function leggTilBetaling() {

    //Hvis validering() = true så returnerer den ingenting,
    // koden fortsetter om validering ikke blir true.
    if(!validering()){
        return;
    }


    const film = document.getElementById("velgFilm").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;


    const person = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        email: email
    };

    arrayTabell.push(person);

    document.getElementById("velgFilm").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";

    leggArrayTabell();
}


// Funksjoen leter etter om eventuelle feil ved input-boksene som f.eks om det ikke er skrevet noe
function validering(){

    const film = document.getElementById("velgFilm")
    const antall = document.getElementById("antall");
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefon = document.getElementById("telefon");
    const email = document.getElementById("email");

    const validerFilm =  document.getElementById("validerFilm");
    const validerAntall = document.getElementById("validerAntall");
    const validerFornavn = document.getElementById("validerFornavn");
    const validerEtternavn = document.getElementById("validerEtternavn");
    const validerTelefon = document.getElementById("validerTelefon");
    const validerEmail = document.getElementById("validerEmail");


    //Denne variabelen går gjennom inputen, om visse verdier ikke er skrevet inn blir variabelen om til true.
    let feil = false;

    if (film.value === "Velg film her") {
        validerFilm.style.display = "inline";
        feil = true;
    } else {
        validerFilm.style.display = "none";
    }

    if (antall.value < 0 || antall.value > 50 || antall.value === '') {
        validerAntall.style.display = "inline";
        feil = true;
    } else {
        validerAntall.style.display = "none";
    }

    if (fornavn.value === "") {
        validerFornavn.style.display = "inline";
        feil = true;
    } else {
        validerFornavn.style.display = "none";
    }

    if (etternavn.value === "") {
        validerEtternavn.style.display = "inline";
        feil = true;
    } else {
        validerEtternavn.style.display = "none";
    }

    if (isNaN(parseInt(telefon.value)) || telefon.value === "") {
        validerTelefon.style.display = "inline";
        feil = true;
    } else {
        validerTelefon.style.display = "none";
    }

    if (email.value === "" || /^.+@.+\..+$/.test(email) === "") {
        validerEmail.style.display = "inline";
        feil = true;
    } else {
        validerEmail.style.display = "none";
    }



    return !feil; //Dette returnerer variabelen feil som true
}

// Denne sletter verdiene ved tabellen ved å gjøre om arrayet om til en lenght av 0
function slettAlleBilettene() {
    arrayTabell.length = 0;
    leggArrayTabell();
}

// Når en film er valgt, så kommer det opp en notifikasjon om at "x" film er valgt
function choose() {
    alert("Filmen valgt : " + document.getElementById("velgFilm").value);
}
