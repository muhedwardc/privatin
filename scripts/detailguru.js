const pilihanPaket = document.getElementById('pilihan-paket'),
      jumlahPertemuan = document.getElementById('jumlah-pertemuan'),
      pilihanJadwal = document.getElementById('pilihan-jadwal'),
      jadwalTerpilih = document.querySelector('.jadwal-terpilih'),
      pesanJadwalBtn = document.querySelector('.pesan-jadwal'),
      rangkumanJadwal = document.querySelector('.summary-jadwal'),
      spanPaketTerpilih = document.querySelector('.paket-terpilih'),
      spanPertemuanTerpilih = document.querySelector('.pertemuan-terpilih');

let arrJadwalTerpilih = [];
let paketValue = {
    sd: [50000, 60000, 70000],
    smp: [70000, 80000, 90000],
    sma: [90000, 100000, 100000]
};

tambahJadwal = () => {
    pilihanPaket.disabled = true;
    jumlahPertemuan.disabled = true;
    paket = pilihanPaket.options[pilihanPaket.selectedIndex].value;
    let jmlPertemuan = jumlahPertemuan.options[jumlahPertemuan.selectedIndex].text;
    let jadwal = pilihanJadwal.options[pilihanJadwal.selectedIndex].text;

    let ada = false;
    
    for (let i = 0; i < arrJadwalTerpilih.length; i ++) {
        arrJadwalTerpilih[i].toString().includes(jadwal) ? ada = true : null;
    }

    if (!ada) {
        arrJadwalTerpilih.push(jadwal);
        console.log(arrJadwalTerpilih);
        updateView();
    } else if (ada && arrJadwalTerpilih.length != 0){
        alert ('Kowe wis milih kuwi lee');
    }
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

updateView = () => {
    jadwalTerpilih.innerHTML = null;
    for (let i = 0; i < arrJadwalTerpilih.length; i ++) {
        let html = '<div class="list-jadwal-item">' +  arrJadwalTerpilih[i] + '</div><button class="hapus-btn" title="hapus jadwal">Hapus</button>';
        const listTambah = document.createElement('li');
        listTambah.setAttribute('class', 'item-tambah');
        listTambah.setAttribute('urutan', i);
        listTambah.innerHTML = html;
        jadwalTerpilih.appendChild(listTambah);
    }
}

checkout = () => {

    rangkumanJadwal.innerHTML = '';
    if (arrJadwalTerpilih.length === 0) {
        alert('durung di isi leeee, kowe milih jadwal opo?');
        pesanJadwalBtn.setAttribute('data-toggle', '');
        pesanJadwalBtn.setAttribute('data-target', '');
    } else {
        spanPaketTerpilih.textContent = pilihanPaket.options[pilihanPaket.selectedIndex].text;
        spanPertemuanTerpilih.textContent = jumlahPertemuan.options[jumlahPertemuan.selectedIndex].text;

        pesanJadwalBtn.setAttribute('data-toggle', 'modal');
        pesanJadwalBtn.setAttribute('data-target', '#summary');
        for (let i = 0; i < arrJadwalTerpilih.length; i++) {
            let listJadwal = document.createElement('li');
            let jadwalTerpilih = arrJadwalTerpilih[i];
            listJadwal.innerHTML = jadwalTerpilih;
            rangkumanJadwal.appendChild(listJadwal);
        }
    }
}