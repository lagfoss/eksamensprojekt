/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Language() {
    document.getElementById("myLanguage").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.droplang')) {

    var dropdowns = document.getElementsByClassName("droplang-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Navigation responsive */
function responsiveNav() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}









/*style giude html knap 1*/
var html_kode =
`<body>
    <div class="rcorners2"> SHOW </div>
</body>


`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblock');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}





/*style giude html knap 2*/
var html_kode =
`<body>
    <div><input type="submit"
    value="Send"></div>
</body>


`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblock2');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}






/*style giude html knap 3*/
var html_kode =
`<body>
    <a href="klient.html"><button type="button"
    id="loginn">Login</button></a>
</body>


`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblock3');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}







/*style giude html menu*/
var html_kode =
`<body>
<div class="logo">
  <a href="index.html"><img class="banner"
    src="assets/images/logo.png"
  alt="Varde Middelalderfestival banner"></a>
</div>
<nav id="myNav">

  <a href="program.html">Program</a>
  <a href="omfestivalen.html">Om festivalen</a>
  <a href="praktiskinfo.html">Praktisk info</a>
  <a href="index.html" class="empty2"></a>
  <a href="blivaktor.html">Bliv aktør</a>
  <a href="blivfrivillig.html">Bliv frivillig</a>
  <a href="kontakt.html">Kontakt</a>
  <div class="dropdown">

    </div>
  </div>
</nav>
</body>


`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockmenu');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}







/*style giude html foter*/
var html_kode =
` <footer><div class="footer_tekst">
    Varde Kommune  -
    Bytoften 2  -
    6800 Varde  -
    79 94 68 00  -

    vardekommune@varde.dk  -

    CVR-nr: 2918 9811  </div>
    <a href="#"> <img
    class="vardekommune"
    src="assets/images/vk_logo.png"
    alt=""> </a>
  </footer>


`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockfoter');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}





















/*style giude html foter*/
var html_kode =
`


<h2 class="overskrift"> Program </h2>


  <main>
                  <section class="small">
                  </section>

                  <div class="program-background">

                  <div id="main-program">

                  <div>
<div class="time-on-days">
                <h3>Kolonne 1 </h3>


<div class="event-and-date">
                      <div class="time-frame">
                      <p>10:00<br>11:00</div>
                      <div class="time-label">
                      <button onclick="programpopups(this)" class="popup-info">
                      <label>TEKST </label>
                      <p>STED <br>
                      ARRANGØR</P>
                    </div>
                  </div>

              </div>
          </div>







Vejledning af tilføjelser:

          Dette kopieres og sættes under for hver ekstra Kolonne:

                                  <div>
                           <div class="time-on-days">
                                <h3>Kolonne 1 </h3>


                           <div class="event-and-date">
                                      <div class="time-frame">
                                      <p>10:00<br>11:00</div>
                                      <div class="time-label">
                                      <button onclick="programpopups(this)" class="popup-info">
                                      <label>TEKST </label>
                                      <p>STED <br>
                                      ARRANGØR</P>
                                    </div>
                                  </div>




          Dette kopieres og sættes under hinanden for flere bokse nedad:

                              <div class="event-and-date">
                                         <div class="time-frame">
                                         <p>10:00<br>11:00</div>
                                         <div class="time-label">
                                         <button onclick="programpopups(this)" class="popup-info">
                                         <label>TEKST </label>
                                         <p>STED <br>
                                         ARRANGØR</P>
                                       </div>




`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockprogram');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}









/*layout del 1*/
var html_kode =
`<section>
  <h1>Varde Middelalderfestival</h1>
  <h2>Den 8 - 10 AUGUST 2019</h2>
</section>


<div class="intro">
  <h3>Middelalderlige dage for
  alle der kan lide gøgl,
  markeder, ridderkampe,
  gadeartister, brand shows,
  eventyr, vandreture,
  forelæsninger og meget mere.</h2>
</div>

`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockdel1');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}













/*layout del 2*/
var html_kode =
`
<body>
  <div class="indhold">
  <!-- praktiskinfo 1 -->
  <div class="seo_om_vmf">

  <div class="event_kasse1">
  Praktisk Info
  <p>
  Hele middelalderfestivalens
  weekendprogram foregår ved Varde Å.</p>
  <p> Der er indgang til Middelalderpladsen
  fra Slotsgade. Nærmeste P-plads er på
  Pramstedvej og Stålværksgrunden
  indkørsel fra Vestervold.</p>

  <p><b>Festivalens åbningstider
    for 2019:</b></p>

  <p>fredag d. 8. august kl.
  16 - 23. lørdag
  d. 9. august kl. 10 - 23.
  Børneområdet holdte
  ligeledes åben fredag d. 8. august
  kl. 9.00-13.00. Der var gratis entré
  til festivalområdet.
  </p>
  </div>

  </div>
  <div class="praktiskinfo">

  </div>
  <!-- praktiskinfo 1 Slut -->

  <div class="space"></div>
  </div>
</body>

`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockdel2');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}










/*del 3*/

var html_kode =
`
<body>
  <div class='indhold'>
   <div class='program'><h4><a  href="assets/images/
   program_middelalderfestival_koebstad_575_varde.pdf"
   target="_blank">Se Program</a></h4> </div>
   <div class='kort'><h4><a href="kort1.html">Se Kort
   </a></h4> </div>
   <div class='info'><h4><a href="praktiskinfo.html">
   Praktisk Info</a></h4> </div>
    </div>
</body>

`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockdel3');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}











/*program*/


var html_kode =
`
<body>
  <div class='indhold'>
   <div class='program'><h4><a  href="assets/images/
   program_middelalderfestival_koebstad_575_varde.pdf"
   target="_blank">Se Program</a></h4> </div>
   <div class='kort'><h4><a href="kort1.html">Se Kort
   </a></h4> </div>
   <div class='info'><h4><a href="praktiskinfo.html">
   Praktisk Info</a></h4> </div>
    </div>
</body>

`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblock10');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

















/*del 4*/


var html_kode =
`
<body>
  <div class="indhold">
    <!-- 1 Event -->
    <div class="event_img_left">
    </div>

    <div class="event_img_middle">
    </div>

    <div class="event_img_right">
    </div>

      <div class="event_text_left">

        <div class="event_kasse1">
          7 kanten
        <div class="rcorners1">
          PROGRAM EVENT
        </div>
         <p>7-kanten er en af Danmarks største og mest aktive
         amatørteaterforeninger med cirka 500 medlemmer
         inklusive en børneafdeling på ca. 60 og en
         ungdomsafdeling på ca. 40 og en afdeling for
         pensionister "Teater om Dagen". </p>
        </div>

      </div>

      <div class="event_text_middle">

        <div class="event_kasse2">
          Lupus Tempus
          <div class="rcorners2">
            SHOW
      </div>
        <p>Lupus Tempus –et historisk selskab
          blev dannet i november 2006 og består
          i dag af 10 medlemmer.
          Vi formidler og levendegøre nordeuropæisk
          middelalder kulturarv gennem reenactment.</p>
          </div>
      </div>

      <div class="event_text_right">

        <div class="event_kasse2">
          Mikkel Langbue
          <div class="rcorners3">
            Frivillig
              </div>
                  <p>Mikkel Langbue indtager markedet. Grin som pisket af historierne om Sorte Karen, De grimme kællinger og Laurits Låddenhals.</p>
          </div>
      </div>
      <!-- 1 Event Slut -->
  </div>


    </div>
</body>

`;

// Find codeblock elementet i HTML'en på siden
var codeElement = document.getElementById('codeblockdel4');

// Kør html-indholdet igennem vores egen escapeHtml funktion
var escapedCode = escapeHtml(html_kode);

// Sæt det nye escaped html tilbage i codeblock elementet.
codeElement.innerHTML = escapedCode;

function escapeHtml(htmlText) {
  return htmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
