const nomeUtente = prompt("Qual è il tuo nome?");
const cognomeUtente = prompt("Quale è il tuo cognome?");
const colorePreferito = prompt("Quale è il tuo colore preferito?");
const nomeCognomeColore22 = document.getElementById("NomeCognomeColore22");
nomeCognomeColore22.innerHTML = (nomeUtente + cognomeUtente + colorePreferito + 22);