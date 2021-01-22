function changeMode() {
    // Alterando os icones entre sol e lua
    if (document.getElementById("mode-icon").src == "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fsun-dark.svg?1611350845257") 
    {
        document.getElementById("mode-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fmoon.svg?1611351255616";
    }
    else 
    {
        document.getElementById("mode-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fsun-dark.svg?1611350845257";
    }
    
    // Alterando o icone do cifrão
    if (document.getElementById("total-icon").src == "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal-dark.svg?1611350449239") 

    {
        document.getElementById("total-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal.svg?1611350481084";
    }
    else 
    {
        document.getElementById("total-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal-dark.svg?1611350449239";
    }

    // Alterando a logo
    if (document.getElementById("logo").src == "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Flogo-dark.svg?1611350412538") 

    {
        document.getElementById("logo").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Flogo.svg?1611351006404";
    }
    else 
    {
        document.getElementById("logo").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Flogo-dark.svg?1611350412538";
    }

    // Alterando o modo dos principais elementos
    let body = document.body;
    body.classList.toggle("body-dark-mode");
    let h2 = document.querySelector(".h2-dark")
    h2.classList.toggle("h2-dark-mode");
    let footer = document.querySelector(".footer-dark")
    footer.classList.toggle("footer-dark-mode");

    // Alterando o modo dos cards
    let card_1 = document.querySelector(".card-dark-1");
    card_1.classList.toggle("card-dark-mode");
    let card_2 = document.querySelector(".card-dark-2");
    card_2.classList.toggle("card-dark-mode");
    let card_total = document.querySelector(".total");
    card_total.classList.toggle("total-dark-mode");

    // Alterando o modo do modal
    let modal = document.querySelector(".modal");
    modal.classList.toggle("modal-dark-mode");

    // Alterando o modo da tabela
    let th_1 = document.querySelector(".th-dark-1");
    th_1.classList.toggle("th-dark-mode");
    let th_2 = document.querySelector(".th-dark-2");
    th_2.classList.toggle("th-dark-mode");
    let th_3 = document.querySelector(".th-dark-3");
    th_3.classList.toggle("th-dark-mode");
    let th_4 = document.querySelector(".th-dark-4");
    th_4.classList.toggle("th-dark-mode");

    let td_1 = document.querySelector(".td-dark-1");
    td_1.classList.toggle("td-dark-mode");
    let td_2 = document.querySelector(".td-dark-2");
    td_2.classList.toggle("td-dark-mode");
    let td_3 = document.querySelector(".td-dark-3");
    td_3.classList.toggle("td-dark-mode");
    let td_4 = document.querySelector(".td-dark-4");
    td_4.classList.toggle("td-dark-mode");
    let td_5 = document.querySelector(".td-dark-5");
    td_5.classList.toggle("td-dark-mode");
    let td_6 = document.querySelector(".td-dark-6");
    td_6.classList.toggle("td-dark-mode");
    let td_7 = document.querySelector(".td-dark-7");
    td_7.classList.toggle("td-dark-mode");
    let td_8 = document.querySelector(".td-dark-8");
    td_8.classList.toggle("td-dark-mode");
    let td_9 = document.querySelector(".td-dark-9");
    td_9.classList.toggle("td-dark-mode");
    let td_10 = document.querySelector(".td-dark-10");
    td_10.classList.toggle("td-dark-mode");
    let td_11 = document.querySelector(".td-dark-11");
    td_11.classList.toggle("td-dark-mode");
    let td_12 = document.querySelector(".td-dark-12");
    td_12.classList.toggle("td-dark-mode");
    
    let description_1 = document.querySelector(".description-dark-1");
    description_1.classList.toggle("description-dark-mode");
}