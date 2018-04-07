const hargaSd = document.querySelector('.harga-sd');
const hargaSmp = document.querySelector('.harga-smp');
const hargaSma = document.querySelector('.harga-sma');
const paket = document.querySelector('.paket');
const namaPaket = document.querySelectorAll('.nama-paket');

paket.addEventListener('click', () => {
    if (event.target.className === 'paket-nav') {
        setActiveClass(event.target);
        setPricingList(event.target.attributes["paket"].value);
    }
});

setActiveClass = (activePacket) => {
    for (let i = 0; i < namaPaket.length; i++) { 
        namaPaket[i].classList.remove('active');
    }
    activePacket.parentNode.classList.add('active');
};

setPricingList = (activePacket) => {
    switch (activePacket) {
        case "0":
            hargaSd.textContent = "50.000";
            hargaSmp.textContent = "60.000";
            hargaSma.textContent = "70.000";
            break;
        case "1":
            hargaSd.textContent = "70.000";
            hargaSmp.textContent = "80.000";
            hargaSma.textContent = "90.000";
            break;
        case "2":
            hargaSd.textContent = "90.000";
            hargaSmp.textContent = "100.000";
            hargaSma.textContent = "120.000";
            break;
        default:
            hargaSd.textContent = "50.000";
            hargaSmp.textContent = "60.000";
            hargaSma.textContent = "70.000";
            break;
    }
}

setPricingList();