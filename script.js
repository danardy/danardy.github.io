const form = document.getElementById("daftarForm");
const listContainer = document.getElementById("PendaftarList");

const pendaftar = JSON.parse(localStorage.getItem("pendaftar")) || [];

function renderPendaftar(){
    listContainer.innerHTML = "";
    pendaftar.forEach((data, index) => {
        const div = document.createElement("div");
        div.className = "pendaftar";
        div.innerHTML = `
        <strong>${index + 1}. ${data.namaTeam}</strong><br>
        KetuaTeam: ${data.KetuaTeam}<br>
        WhatsApp: ${data.noWhatsApp}<br>
        Email: ${data.email}<br>
        idPemain: ${data.idPemain}<br>
        pembayaran: ${data.pembayaran}
        `;
        listContainer.appendChild(div);
    });
}

form.addEventListener("submit", function (e) {e.preventDefault();
});
const data = {
    namaTeam: document.getElementById("namaTeam").value,
    KetuaTeam: document.getElementById("KetuaTeam").value,
    noWhatsApp: document.getElementById("noWhatsApp").value,
    email: document.getElementById("email").value,
    idPemain: document.getElementById("idPemain").value,
    Pembayaran: document.getElementById("Pembayaran").value,
};

pendaftar.push(data);
localStorage.setItem("pendaftar", JSON.stringify(pendaftar));

form.reset();
renderPendaftar();