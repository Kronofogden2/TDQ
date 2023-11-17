let content = document.querySelector(".content");

let chapterData = [];

let år = 1;

let buttonÅr0 = document.querySelector("#år0");
buttonÅr0.addEventListener("click", function () {
    let anläggningstillgångar = document.querySelector("#AnläggningstillgångarÅr0");
    if (isNaN(parseInt(anläggningstillgångar.value))) {
        anläggningstillgångar.classList.add("error");
    }
    else {
        anläggningstillgångar.classList.remove("error");
        anläggningstillgångar.disabled = true;
        anläggningstillgångar.value = parseInt(anläggningstillgångar.value);
    }
    let omsättningstillgångar = document.querySelector("#OmsättningstillgångarÅr0");
    if (isNaN(parseInt(omsättningstillgångar.value))) {
        omsättningstillgångar.classList.add("error");
    }
    else {
        omsättningstillgångar.classList.remove("error");
        omsättningstillgångar.disabled = true;
        omsättningstillgångar.value = parseInt(omsättningstillgångar.value);
    }
    document.querySelector("#SummaTillgångarÅr0").value = parseInt(anläggningstillgångar.value) + parseInt(omsättningstillgångar.value);

    let egetkapital = document.querySelector("#EgetKapitalÅr0");
    if (isNaN(parseInt(egetkapital.value))) {
        egetkapital.classList.add("error");
    }
    else {
        egetkapital.classList.remove("error");
        egetkapital.disabled = true;
        egetkapital.value = parseInt(egetkapital.value);
    }
    let långfristigaskulder = document.querySelector("#LångfristigaSkulderÅr0");
    if (isNaN(parseInt(långfristigaskulder.value))) {
        långfristigaskulder.classList.add("error");
    }
    else {
        långfristigaskulder.classList.remove("error");
        långfristigaskulder.disabled = true;
        långfristigaskulder.value = parseInt(långfristigaskulder.value);
    }
    let kortfristigaskulder = document.querySelector("#KortfristigaSkulderÅr0");
    if (isNaN(parseInt(kortfristigaskulder.value))) {
        kortfristigaskulder.classList.add("error");
    }
    else {
        kortfristigaskulder.classList.remove("error");
        kortfristigaskulder.disabled = true;
        kortfristigaskulder.value = parseInt(kortfristigaskulder.value);
    }

    if (!isNaN(parseInt(egetkapital.value) + parseInt(långfristigaskulder.value) + parseInt(kortfristigaskulder.value))) {
        document.querySelector("#SummaEgetKapitalOchSkulderÅr0").value = parseInt(egetkapital.value) + parseInt(långfristigaskulder.value) + parseInt(kortfristigaskulder.value);
        buttonÅr0.remove();
        chapterData.push({
            anläggningstillgångar: parseInt(anläggningstillgångar.value),
            omsättningstillgångar: parseInt(omsättningstillgångar.value),
            egetkapital: parseInt(egetkapital.value),
            långfristigaskulder: parseInt(långfristigaskulder.value),
            kortfristigaskulder: parseInt(kortfristigaskulder.value)
        });
        createChapter();
    }

});


function createChapter() {
    let chapter = document.createElement("div");
    chapter.classList.add("chapter");
    chapter.innerHTML = `<h2>Resultaträkning${år}</h2>`;

    let grid = document.createElement("div");
    grid.classList.add("input-grid");

    let resultaträkning = [
        { id: "Försäljningsbetalningar", input: document.createElement("input"), label: "Försäljningsbetalningar" },
        { id: "Kundfordringar", input: document.createElement("input"), label: "Kundfordringar" },
        { id: "TotalaFörsäljningsintäkter", input: document.createElement("input"), label: "Totala Försäljningsintäkter" },
        { id: "KostnadSåldaVaror", input: document.createElement("input"), label: "Kostnad sålda varor" },
        { id: "Bruttoresultat", input: document.createElement("input"), label: "Bruttoresultat" },
        { id: "Avskrivningar", input: document.createElement("input"), label: "Avskrivningar" },
        { id: "ÖvrigaKostnader", input: document.createElement("input"), label: "Övriga Kostnader" },
        { id: "Rörelseresultat", input: document.createElement("input"), label: "Rörelseresultat" },
        { id: "Ränteintäkter", input: document.createElement("input"), label: "Ränteintäkter" },
        { id: "Räntekostnader", input: document.createElement("input"), label: "Räntekostnader" },
        { id: "Skattekostnader", input: document.createElement("input"), label: "Skattekostnader" },
        { id: "ÅretsResultat", input: document.createElement("input"), label: "Årets Resultat" },
        { id: "Investeringar", input: document.createElement("input"), label: "Investeringar" },
        { id: "Utdelningar", input: document.createElement("input"), label: "Utdelningar" },
        { id: "Nyemission", input: document.createElement("input"), label: "Nyemission" },
        { id: "NyaLån", input: document.createElement("input"), label: "Nya Lån" },
    ];
    grid.innerHTML = `<h3>FörsäljningsIntäkter</h3>`;

    for (let index = 0; index < resultaträkning.length; index++) {
        let label = document.createElement("label");
        label.innerText = resultaträkning[index].label;
        grid.append(label);

        resultaträkning[index].input.type = "text";
        
        switch (resultaträkning[index].id) {
            case "TotalaFörsäljningsintäkter":
            case "Bruttoresultat":
            case "Rörelseresultat":
                {
                    resultaträkning[index].input.disabled = true;
                    grid.append(resultaträkning[index].input);
                    let p = document.createElement("p");
                    p.classList.add("currency");
                    p.innerText = "000 kr";
                    grid.append(p);
                    break;
                }
                case "ÅretsResultat":
                {
                    resultaträkning[index].input.disabled = true;
                    grid.append(resultaträkning[index].input);
                    let p = document.createElement("p");
                    p.classList.add("currency");
                    p.innerText = "000 kr";
                    grid.append(p);

                    let eknomiskaHändelser = document.createElement("h3");
                    eknomiskaHändelser.innerText = "Ekonomiska Händelser";
                    grid.append(eknomiskaHändelser);
                    break;
                }
            default:
                {
                    resultaträkning[index].input.placeholder = "Lorem";
                    grid.append(resultaträkning[index].input);
                    let p = document.createElement("p");
                    p.classList.add("currency");
                    p.innerText = "000 kr";
                    grid.append(p);
                    break;
                }
        }
    }
    
    let button = document.createElement("button");
    button.addEventListener("click", function () {
        
        let resultaträkning = {
            // Lägg in matte här
        };

        chapter.innerHTML = `
        <h2>Balansräkning År ${år}</h2>
        <div class="input-grid">
        <h3>Tillgångar</h3>
        
        <label>Anläggningstillgångar</label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Omsättningstillgångar(Kassa Bank)</label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <label><b>Summa Tillgångar</b></label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <h3>Eget Kapital och Skulder</h3>
        
        <label>Eget Kapital</label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Långfristiga skulder (Bank)</label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Kortfristiga skulder (Leverantörer)</label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        
        <label><b>Summa Eget Kapital och Skulder</b></label>
        <input type="text" value="${0}" disabled>
        <p class="currency">000 kr</p>
        </div>
        `;

        år ++;
        createChapter();
    });

    chapter.append(grid);
    content.append(chapter);
}

function calculate() {
    
}