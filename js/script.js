var filehide = document.getElementById("profile");
const beranda = document.getElementById("Beranda");
const fitur = document.getElementById("Fitur");
const build = document.getElementById("buat");

function OpenProf() {
  filehide.style.display = "block";
}

function CloseProf() {
  filehide.style.display = "none";
}

function GoBeranda() {
  beranda.scrollIntoView({ behavior: "smooth" });
}

function GoFitur() {
  fitur.scrollIntoView({ behavior: "smooth" });
}

function GoBuild() {
  build.scrollIntoView({ behavior: "smooth" });
}
