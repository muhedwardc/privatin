const mapelSelect = document.getElementById('matapelajaran-jenjang'),
      jadwalguruSelect = document.getElementById('jadwalguru-tersedia'),
      pilihJadwalBtn = document.querySelector('.pilih-jadwal-btn'),
      jadwalTerpilihUl = document.querySelector(".jadwal-terpilih-ul"),
      jadwalItem = document.querySelector(".jadwal-item"),
      pesanBtn = document.querySelector(".pesan-btn");

let arrJadwalTerpilih = [];

pilihJadwalBtn.addEventListener('click', function() {
    let jadwalGuru = jadwalguruSelect.options[jadwalguruSelect.selectedIndex].text,
        mapelTerpilih = mapelSelect.options[mapelSelect.selectedIndex].text;
    
    let jadwal = mapelTerpilih + ", " + jadwalGuru;

    let ada = false;
    
    for (let jadwalItem of arrJadwalTerpilih) {
        if (jadwalItem.toString().includes(jadwal)) {
            ada = true;
        } else if (jadwalItem.toString().includes(jadwalGuru)) {
            ada = true;
        }
    }

    if (!ada) {
        arrJadwalTerpilih.push(jadwal); 
        updateView();
    } else if (ada && arrJadwalTerpilih.length != 0){
        alert ('Jadwal Sudah Dipilih');
    }
});

const updateView = function() {
    jadwalTerpilihUl.innerHTML = '';
    let html = '';
    for (let i in arrJadwalTerpilih) {
        html += '<li class="jadwal-item" urutan="' + i + '">' + arrJadwalTerpilih[i] + ' <span class="hapus-jadwal">Hapus</span></li>';
    }

    jadwalTerpilihUl.innerHTML = html;
}

ulClicked = () => {
    if (event.target.tagName === 'BUTTON') {
        let li = event.target.parentNxode;
        let urutan = Number(event.path[1].attributes[1].value);
        arrJadwalTerpilih.splice(urutan, 1);
        if (arrJadwalTerpilih.length === 0) {
            pilihanPaket.disabled = false;
            jumlahPertemuan.disabled = false;
        }
        updateView();
    }
}

pesanBtn.addEventListener('click', function() {
    if (arrJadwalTerpilih.length <= 0) alert("Anda belum memilih jadwal");
});

checkout = () => {
    rangkumanJadwal.innerHTML = '';
    if (arrJadwalTerpilih.length === 0) {
        alert('durung di isi leeee, kowe milih jadwal opo?');
        pesanJadwalBtn.setAttribute('data-toggle', '');
        pesanJadwalBtn.setAttribute('data-target', '');
    } else {
        jadwalText = "";
        spanPaketTerpilih.innerText = pilihanPaket.options[pilihanPaket.selectedIndex].text;
        spanPertemuanTerpilih.innerText = jumlahPertemuan.options[jumlahPertemuan.selectedIndex].text;
        
        formPaket.value = spanPaketTerpilih.innerText;
        formJmlPertemuan.value = spanPertemuanTerpilih.innerText;

        pesanJadwalBtn.setAttribute('data-toggle', 'modal');
        pesanJadwalBtn.setAttribute('data-target', '#summary');
        for (let i = 0; i < arrJadwalTerpilih.length; i++) {
            let listJadwal = document.createElement('li');
            let jadwalItem = arrJadwalTerpilih[i] + ', ';
            i === (arrJadwalTerpilih.length - 1) ? jadwalItem = arrJadwalTerpilih[i] : null;
            let jadwalTerpilih = arrJadwalTerpilih[i];
            listJadwal.innerHTML = jadwalTerpilih;
            rangkumanJadwal.appendChild(listJadwal);
            jadwalText += jadwalItem;
        }
        formJadwal.value = jadwalText;
    }
}