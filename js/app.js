document.addEventListener("DOMContentLoaded",()=>{
    console.log("chargé");


    let el = document.querySelector(`ul`);
    let machine_a_laver = {
        marque: "brand",
        prix: "399€",
        consommation:  "700W/h" ,
        matricule:  "Bxma37",
        modele: 'asset/P955569-1.jpg',
    }

    let btn = document.querySelector("h1");
    let cible = document.querySelector("html");

    console.table(machine_a_laver);
    console.log(machine_a_laver);
    el.innerHTML+=`<li itemprop="offeredBy">Marque :${machine_a_laver.marque}</li>
                <li itemprop="price">Prix :${machine_a_laver.prix}</li>
                <li itemprop="review">Consommation :${machine_a_laver.consommation}</li>
                <li itemprop="mpn">Matricule :${machine_a_laver.matricule}</li>
                <li><img src="${machine_a_laver.modele}" alt="machine a laver"></img></li>
                `

    btn.addEventListener("click",(e)=>{
        console.log("click");
        cible.classList.toggle("access");
    });  
    
    console.log(btn);
}) 