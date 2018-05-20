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
`

<section>
  <h1>Varde Middelalderfestival</h1>
  <h2>Den 8 - 10 AUGUST 2019</h2>
</section>


<div class="intro">
  <h3>Middelalderlige dage for alle der kan lide gøgl,
  markeder, ridderkampe, gadeartister, brand shows,
  eventyr, vandreture, forelæsninger og meget mere.</h2>
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
