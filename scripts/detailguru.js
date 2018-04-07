const pilihanHari = document.getElementById('pilihan-hari'),
      pilihanJam = document.getElementById('pilihan-jam'),
      jadwalTerpilih = document.querySelector('.jadwal-terpilih'),
      pesanJadwalBtn = document.querySelector('.pesan-jadwal'),
      rangkumanHari = document.querySelector('.summary-hari'),
      rangkumanJam = document.querySelector('.summary-jam');

let arrJadwalTerpilih = [];

tambahJadwal = () => {
    let tambahHari = pilihanHari.options[pilihanHari.selectedIndex].text;
    let tambahJam = pilihanJam.options[pilihanJam.selectedIndex].text;
    let inText = tambahHari + tambahJam;
    let terpilih = tambahHari + '+' + tambahJam;
    let ada = false;
    
    for (let i = 0; i < arrJadwalTerpilih.length; i ++) {
        arrJadwalTerpilih[i].toString().includes(terpilih) ? ada = true : null;
    }

    if (!ada) {
        arrJadwalTerpilih.push(terpilih);
        updateView();
    } else if (ada && arrJadwalTerpilih.length != 0){
        alert ('Kowe wis milih kuwi lee');
    }
}

ulClicked = () => {
    if (event.target.tagName === 'BUTTON') {
        let li = event.target.parentNode;
        let urutan = Number(event.path[1].attributes[1].value);
        arrJadwalTerpilih.splice(urutan, 1);
        updateView();
    }
}

updateView = () => {
    jadwalTerpilih.innerHTML = null;
    for (let i = 0; i < arrJadwalTerpilih.length; i ++) {
        let splitArr = arrJadwalTerpilih[i].split('+');
        let html = '<span class="hari-terpilih">' 
            + splitArr[0] + '</span><span class="jam-terpilih">' 
            + splitArr[1] + '</span><button class="hapus-btn title="hapus">&#x2716;</button>';
        const listTambah = document.createElement('li');
        listTambah.setAttribute('class', 'item-tambah');
        listTambah.setAttribute('urutan', i);
        listTambah.innerHTML = html;
        jadwalTerpilih.appendChild(listTambah);
    }
}

rangkumanJadwal = () => {
    rangkumanHari.innerHTML = '';
    rangkumanJam.innerHTML = '';
    if (arrJadwalTerpilih.length === 0) {
        alert('durung di isi leeee, kowe milih jadwal opo?');
        pesanJadwalBtn.setAttribute('data-toggle', '');
        pesanJadwalBtn.setAttribute('data-target', '');
    } else {
        pesanJadwalBtn.setAttribute('data-toggle', 'modal');
        pesanJadwalBtn.setAttribute('data-target', '#summary');

        for (let i = 0; i < arrJadwalTerpilih.length; i++) {
            let listHari = document.createElement('li');
            let listJam = document.createElement('li');
            let jadwal = arrJadwalTerpilih[i].split('+');
            let hari = jadwal[0],
                jam = jadwal[1];
            listHari.innerHTML = hari;
            listJam.innerHTML = jam;
            rangkumanHari.appendChild(listHari);
            rangkumanJam.appendChild(listJam);
        }
    }
}