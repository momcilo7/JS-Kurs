let cena = 0;
function klik(dugme)
{
    let main = dugme.closest('.single-item')
    let price = parseInt(main.querySelector('p span').innerText);
    cena += price;

    main.style.backgroundColor='gray';
    dugme.setAttribute('disabled','true');

    let total = document.querySelector('.total');
    total.innerHTML=`<p>Ukupna cena filmova je ${cena} dolara</p>`
}