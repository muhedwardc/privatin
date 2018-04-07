const jenjang = document.getElementById("jenjang");
const mataPelajaran = document.getElementById("mata-pelajaran");

const mataPelajaranSd = [
    {
        value: "bind",
        text: "Bahasa Indonesia"
    },
    {
        value: "bing",
        text: "Bahasa Inggris"
    },
    {
        value: "ipa",
        text: "IPA"
    },
    {
        value: "ips",
        text: "IPS"
    },
    {
        value: "ipa",
        text: "IPA"
    },
    {
        value: "matematika",
        text: "Matematika"
    }
]

const mataPelajaranSmp = [
    {
        value: "bind",
        text: "Bahasa Indonesia"
    },
    {
        value: "bing",
        text: "Bahasa Inggris"
    },
    {
        value: "biologi",
        text: "Biologi"
    },
    {
        value: "fisika",
        text: "Fisika"
    },
    {
        value: "kimia",
        text: "Kimia"
    }
]

const mataPelajaranSma = [
    {
        value: "bind",
        text: "Bahasa Indonesia"
    },
    {
        value: "bing",
        text: "Bahasa Inggris"
    },
    {
        value: "biologi",
        text: "Biologi"
    },
    {
        value: "fisika",
        text: "Fisika"
    },
    {
        value: "kimia",
        text: "Kimia"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    resetValue();
    setOptionsValue("sd");
});

getValue = () => {
    resetValue();
    setOptionsValue(jenjang.value);
}

setOptionsValue = (jenjangTerpilih) => {
    if (jenjangTerpilih === "sd") mataPelajaranTerpilih = mataPelajaranSd;
    else if (jenjangTerpilih === "smp") mataPelajaranTerpilih = mataPelajaranSmp;
    else if (jenjangTerpilih === "sma") mataPelajaranTerpilih = mataPelajaranSma;

    for (let i = 0; i < mataPelajaranTerpilih.length; i ++) {
        let option = document.createElement('option');
        option.setAttribute('class', 'pilihan-jenjang');
        option.setAttribute('value', mataPelajaranTerpilih[i].value);
        option.innerText = mataPelajaranTerpilih[i].text;
        mataPelajaran.appendChild(option);
    }
}

resetValue = () => {
    mataPelajaran.innerHTML = null;
    let mataPelajaranTerpilih = null;
}