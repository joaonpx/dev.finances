// function changeMode() {
//     // Alterando os icones entre sol e lua
//     if (document.getElementById("mode-icon").src == "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fsun.svg?1611847899930") 
//     {
//         document.getElementById("mode-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fmoon-dark.svg?1611351255616";
//     }
//     else 
//     {
//         document.getElementById("mode-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Fsun.svg?1611847899930";
//     }
    
//     // Alterando o icone do cifrão
//     if (document.getElementById("total-icon").src == "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal-dark.svg?1611350449239") 

//     {
//         document.getElementById("total-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal.svg?1611350481084";
//     }
//     else 
//     {
//         document.getElementById("total-icon").src = "https://cdn.glitch.com/f256daa3-8162-4d37-8d8c-ac5adc976de0%2Ftotal-dark.svg?1611350449239";
//     }

//     // Alterando o modo dos principais elementos
//     let body = document.body;
//     body.classList.toggle("body-dark-mode");
//     let header = document.querySelector(".header-container")
//     header.classList.toggle("header-dark-mode")
//     let h2 = document.querySelector(".h2-dark")
//     h2.classList.toggle("h2-dark-mode");
//     let footer = document.querySelector(".footer-dark")
//     footer.classList.toggle("footer-dark-mode");

//     // Alterando o modo dos cards
//     let card_1 = document.querySelector(".card-dark-1");
//     let card_2 = document.querySelector(".card-dark-2");
//     let allCards = [card_1, card_2]
//     allCards.forEach(function(el) {
//         el.classList.toggle("card-dark-mode");
//     })

//     let card_total = document.querySelector(".total");
//     card_total.classList.toggle("total-dark-mode");

//     // Alterando o modo do modal
//     let modal = document.querySelector(".modal");
//     modal.classList.toggle("modal-dark-mode");

//     // Alterando o modo da tabela
//     let th_1 = document.querySelector(".th-dark-1");
//     let th_2 = document.querySelector(".th-dark-2");
//     let th_3 = document.querySelector(".th-dark-3");
//     let th_4 = document.querySelector(".th-dark-4");
//     let allThs = [th_1, th_2, th_3, th_4]
//     allThs.forEach(function(el) {
//         el.classList.toggle("th-dark-mode");
//     })

//     let td_1 = document.querySelector(".td-dark-1");
//     let td_2 = document.querySelector(".td-dark-2");
//     let td_3 = document.querySelector(".td-dark-3");
//     let td_4 = document.querySelector(".td-dark-4");
//     let td_5 = document.querySelector(".td-dark-5");
//     let td_6 = document.querySelector(".td-dark-6");
//     let td_7 = document.querySelector(".td-dark-7");
//     let td_8 = document.querySelector(".td-dark-8");
//     let td_9 = document.querySelector(".td-dark-9");
//     let td_10 = document.querySelector(".td-dark-10");
//     let td_11 = document.querySelector(".td-dark-11");
//     let td_12 = document.querySelector(".td-dark-12");
//     let allTds = [td_1, td_2, td_3, td_4, td_5, td_6, td_7, td_8, td_9, td_10, td_11, td_12]
//     allTds.forEach(function(el) {
//         el.classList.toggle("td-dark-mode");
//     })
    
//     let description_1 = document.querySelector(".description-dark-1");
//     description_1.classList.toggle("description-dark-mode");
// }