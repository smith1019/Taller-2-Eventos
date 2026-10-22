const enlaces = [
  { texto: "Home", href: "#home", activo: true },
  { texto: "News", href: "#news" },
  { texto: "Contact", href: "#contact" },
  { texto: "About", href: "#about" }
];

const navbar = document.getElementById("myNavbar");

enlaces.forEach(function (item) {
  const a = document.createElement("a");
  a.textContent = item.texto;
  a.href = item.href;
  if (item.activo) a.classList.add("active");
  navbar.appendChild(a);
});

const icono = document.createElement("a");
icono.href = "javascript:void(0);";
icono.className = "icon";
icono.style.fontSize = "15px";
icono.innerHTML = "&#9776;";
icono.addEventListener("click", function () {
  navbar.classList.toggle("responsive");
});
navbar.appendChild(icono);