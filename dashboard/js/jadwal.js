let days = ["Senin", "Selasa", "Rabu"];
let hours = ["08.00-09.30", "09.00-10.30"];
let jadwal = [];

const selectPilihHari = document.getElementById("pilihHari");
const selectPilihJam = document.getElementById("pilihJam");
const jadwalTerpilih = document.getElementById("jadwalTerpilihList");
const tambahBtn = document.querySelector(".tambah-btn");
const hiddenInput = document.getElementById("hidden-input");

selectPilihHari.innerHTML = "";
selectPilihJam.innerHTML = "";

days.forEach(day => {
    selectPilihHari.innerHTML += '<option value="">' + day + '</option>';   
})

hours.forEach(hour => {
    selectPilihJam.innerHTML += '<option value="">' + hour + '</option>';   
})

tambahBtn.addEventListener("click", function() {
    let ada = false;
    let jadwalStr = selectPilihHari.options[selectPilihHari.selectedIndex].text + "+" + selectPilihJam.options[selectPilihJam.selectedIndex].text;
    for (let i = 0; i < jadwal.length; i++) {
        jadwalStr === jadwal[i] ? ada = true : null;
    }

    if (!ada) {
        jadwal.push(jadwalStr);
        updateView();
    } 
    else if (ada && jadwal.length != 0) alert("Sudah Memilih");
})

ulClicked = () => {
    if (event.target.tagName === 'BUTTON') {
        let urutan = Number(event.path[1].attributes[1].value);
        jadwal.splice(urutan, 1);
        updateView();
    }
}

updateView = () => {
    hiddenFunction()
    jadwalTerpilih.innerHTML = null;
    for (let i = 0; i < jadwal.length; i ++) {
        let splitJadwal = jadwal[i].split("+");
        let html = '<div class="list-jadwal-item">' 
            + '<div class="hari">' + splitJadwal[0]  + '</div>'
            + '<div class="jam">' + splitJadwal[1]  + '</div>'
            + '</div><button class="hapus-btn" title="hapus jadwal">Hapus</button>';
        const listTambah = document.createElement('li');
        listTambah.setAttribute('class', 'item-tambah');
        listTambah.setAttribute('urutan', i);
        listTambah.innerHTML = html;
        jadwalTerpilih.appendChild(listTambah);
    }
}

hiddenFunction = () => {
    hiddenInput.value = "";
    let input = "";
    
    for (let i = 0; i < jadwal.length; i ++) {
        i === 0 ? input += jadwal[i] : input += ',' + jadwal[i];
    }
    
    hiddenInput.value = input;
}

