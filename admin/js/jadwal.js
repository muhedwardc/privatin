var jadwal = [];

var selectPilihHari = document.getElementById("pilihHari");
var selectPilihJam = document.getElementById("pilihJam");
var jadwalTerpilih = document.getElementById("jadwalTerpilihList");
var jadwalTerpilihList = document.getElementById("jadwalTerpilihList");
var tambahBtn = document.querySelector(".tambah-btn");
var hiddenInput = document.getElementById("hidden-input");
var profpicInput = document.getElementById("profpic");
var profpicView = document.querySelector(".profpic-view");

jadwalTerpilih.innerHTML = "<p>Belum memilih jadwal</p>";

tambahBtn.addEventListener("click", function () {
    var ada = false;
    var jadwalStr = selectPilihHari.options[selectPilihHari.selectedIndex].text + " " + selectPilihJam.options[selectPilihJam.selectedIndex].text;
    for (var i = 0; i < jadwal.length; i++) {
        jadwalStr === jadwal[i] ? ada = true : null;
    }

    if (!ada) {
        jadwal.push(jadwalStr);
    } else if (ada && jadwal.length != 0) alert("Sudah Memilih");
    updateView();
    console.log(jadwal);
})

jadwalTerpilihList.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        var urutan = Number(event.target.getAttribute("urutan"));
        jadwal.splice(urutan, 1);
        console.log(event);
        updateView();
    }
});

profpicInput.addEventListener("change", function () {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            profpicView.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

var updateView = function () {
    jadwalTerpilih.innerHTML = "";
    if (jadwal.length === 0) jadwalTerpilih.innerHTML = "<p>Belum memilih jadwal</p>";
    for (var i = 0; i < jadwal.length; i++) {
        var splitJadwal = jadwal[i].split(" ");
        var html = '<div class="list-jadwal-item">' +
            '<div class="hari">' + splitJadwal[0] + '</div>' +
            '<div class="jam">' + splitJadwal[1] + '</div>' +
            '</div><button class="hapus-btn" title="hapus jadwal">Hapus</button>';
        var listTambah = document.createElement('li');
        listTambah.setAttribute('class', 'item-tambah');
        listTambah.setAttribute('urutan', i);
        listTambah.innerHTML = html;
        jadwalTerpilih.appendChild(listTambah);
    }
    hiddenFunction();
}

var hiddenFunction = function () {
    hiddenInput.value = "";
    var input = "";

    for (var i = 0; i < jadwal.length; i++) {
        i === 0 ? input += jadwal[i] : input += ',' + jadwal[i];
    }

    hiddenInput.value = input;
}