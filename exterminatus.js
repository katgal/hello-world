/*
Created by AngrySororita august 2016
"The difference between heresy and treachery is ignorance".
*/
document.addEventListener("DOMContentLoaded", function() {

    console.log("Initiate Exterminatus sequence."); // firefox widzi tylko tego console.loga, reszty nie (?)

    alert("+++INCOMING TRANSMISSION+++");

    function exterminatus() {

        var question = prompt("Are you heretics? Type: yes or no").toLowerCase();
        var question2 = prompt("Are you sure?").toLowerCase();
        // experymenty z document.write
        var mode = "";
        // sekcja 'yes'
        if (question === "yes") {
            // tak czy siak exterminatus
            if (question2 === "yes" || question2 === "no") {
                mode = "Burn the heretic. Kill the mutant. Purge the unclean.";
                console.log(mode); // to bedzie sie pojawiac w oknie dialogowym/divie
                document.write("Status: Commencing Exterminatus sequence...");

                document.write("<body style='background-image:url(images/exterminatus.jpg)'>")
                document.write("<p style='font-weight: bold; color: red'>");
                document.write("Emperor have mercy!");
                document.write("</p>");
            }
            // sekcja 'no'
        } else if (question === "no") {
            // czysty, nie ma exterminatusa
          if (question2 === "yes") {
                mode = "There is no such thing as innocence, only degrees of guilt. Damnation starts with little steps, by arrogantly thinking that you are wiser than our great forbears, by tinkering with truth, by compromising, by departing from the straight and narrow path of the Emperor’s light.";
                console.log(mode); // to bedzie sie pojawiac w oknie dialogowym/divie
                document.write("<p style='font-weight: bold; color: white'>Status: Exterminatus suspended</p>");
                document.write("<body style='background-image:url(images/hold.jpg)'>");

            }
            // niezdecydowany - inkwizycja patrzy
            if (question2 === "no") {
                mode = "Inquisition is watching you... remember Heresy grows from idleness. True Happiness stems only from Duty.";
                console.log(mode); // to bedzie sie pojawiac w oknie dialogowym/ divie
                document.write("<p style='font-weight: bold; color: white'>Status: Exterminatus on hold</p>");
                document.write("<body style='background-image:url(images/inquisition.jpg)'>");
            }
            // alert o bledym wpisaniu odpowiedzi
        } else {
            alert("Only heretic can't read instructions properly! Do it right this time or you will meet Sister Repentia personally! Click F5 to start new sequence.");
        }
        alert("+++END TRANSMISSION+++");
    }
    exterminatus();
});

// document.getElementById()
// dwa divy/ paragrafy z tekstem tam gdzie document.write// albo jeden div z dwoma paragrafami
// czarne tlo z zielonymi napisami, litery pojawiaja sie jedna po drugiej
// start na buttonie
// a może żeby wszystko dzialo sie w oknie dialogowym, lacznie z pytaniami i odpowiedziami gracza
//tylko jak to co bedzie pisal gracz wsadzic do diva/ jak sprawic by div byl interaktywny

// czy w ogóle używać alert czy odliczania i diva(fadeIn, fadeOut)? bo potrzebne ostylowanie
//wstawianie grafik, w jakiej rozdzielczosci najlepiej?
// gdzie trzymac gotowa apke? serwer, komp, github?
// zeby pisany tekst/ litery pokazywaly sie jedna po drugiej - for , word.length
// problem z prompt/alert(google-nie widac bazowego obrazka ustawionego w css); firefox ok. ale nie chce odswiezac...



// w planach randomQuotesGenerator
// cytat danej frakcji/zmian background
// generowanie na buttonie
// zrobić tablice/obiekty z cytatami frakcji (podwójną tablicę-jedna główna a w niej cytaty różnych frakcji)
