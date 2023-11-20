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
    /*0 */{ id: "Försäljningsbetalningar", input: document.createElement("input"), label: "Försäljningsbetalningar" },
    /*1 */{ id: "Kundfordringar", input: document.createElement("input"), label: "Kundfordringar" },
    /*2 */{ id: "TotalaFörsäljningsintäkter", input: document.createElement("input"), label: "Totala Försäljningsintäkter" },   //brög
    /*3 */{ id: "KostnadSåldaVaror", input: document.createElement("input"), label: "Kostnad sålda varor" },                    
    /*4 */{ id: "Bruttoresultat", input: document.createElement("input"), label: "Bruttoresultat" },                            //brög
    /*5 */{ id: "Avskrivningar", input: document.createElement("input"), label: "Avskrivningar" },
    /*6 */{ id: "ÖvrigaKostnader", input: document.createElement("input"), label: "Övriga Kostnader" },
    /*7 */{ id: "Rörelseresultat", input: document.createElement("input"), label: "Rörelseresultat" },                          //brög
    /*8 */{ id: "Ränteintäkter", input: document.createElement("input"), label: "Ränteintäkter" },
    /*9 */{ id: "Räntekostnader", input: document.createElement("input"), label: "Räntekostnader" },
    /*10*/{ id: "Skattekostnader", input: document.createElement("input"), label: "Skattekostnader" },
    /*11*/{ id: "ÅretsResultat", input: document.createElement("input"), label: "Årets Resultat" },                             //brög
    /*12*/{ id: "Investeringar", input: document.createElement("input"), label: "Investeringar" },
    /*13*/{ id: "Utdelningar", input: document.createElement("input"), label: "Utdelningar" },
    /*14*/{ id: "Nyemission", input: document.createElement("input"), label: "Nyemission" },
    /*15*/{ id: "NyaLån", input: document.createElement("input"), label: "Nya Lån" },
    /*16*/{ id: "Amorteringar", input: document.createElement("input"), label: "Amorteringar" }
    ];
    grid.innerHTML = `<h3>FörsäljningsIntäkter</h3>`;

    for (let index = 0; index < resultaträkning.length; index++) {

        resultaträkning[index].input.type = "text";
        
        switch (resultaträkning[index].id) {
            case "TotalaFörsäljningsintäkter":
            case "Bruttoresultat":
            case "Rörelseresultat":
                {
                    let label = document.createElement("label");
                    label.innerHTML = `<b>${resultaträkning[index].label}</b>`;
                    grid.append(label);

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
                    let label = document.createElement("label");
                    label.innerHTML = `<b>${resultaträkning[index].label}</b>`;
                    grid.append(label);

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
                    let label = document.createElement("label");
                    label.innerText = resultaträkning[index].label;
                    grid.append(label);

                    resultaträkning[index].input.placeholder = "Lorem";
                    resultaträkning[index].autocomplete = "off";
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
    button.innerText = "KLAR";
    button.addEventListener("click", function () {
        
        let balansräkning = {
            // Lägg in matte här
            //                        Anläggningstillgångar + Investeringar - Avskrivningar
            anläggningstillgångar   : chapterData[år-1].anläggningstillgångar+parseInt(resultaträkning[12].input.value)-parseInt(resultaträkning[5].input.value),
            //                        Kunfodringar
            kundfodringar           : parseInt(resultaträkning[1].input.value),
            //                        Kassa och bank år 0 + totala försäljningsintäkter + Ränte och finanisella intäkter - Ränte och finanisella Kostnader - övriga kostander - Skattekostnader
            omsättningstillgångar   : parseInt(chapterData[år-1].omsättningstillgångar) + parseInt(resultaträkning[0].input.value) + parseInt(resultaträkning[8].input.value) - parseInt(resultaträkning[9].input.value) - parseInt(resultaträkning[6].input.value) - parseInt(resultaträkning[10].input.value),
            //
            summa_tillgångar        : 0,
            //                        Eget kapital år 0 + Årets resultat Resultat räkning  - uttdelning + nymission
            eget_kapital            : chapterData[år-1].egetkapital + 0 - parseInt(resultaträkning[13].input.value) + parseInt(resultaträkning[14].input.value),
            //                        Långsiktiga banklån + Nya Banklån - amorteringar
            långfristiga_skulder    : chapterData[år-1].långfristigaskulder + parseInt(resultaträkning[15].input.value) - parseInt(resultaträkning[16].input.value),
            //                        Kortfristiga Skulder
            kortfristiga_skulder    : chapterData[år-1].kortfristigaskulder,
            //
            summa_kapital_skulder   : 0
        };
        balansräkning.summa_tillgångar = balansräkning.anläggningstillgångar + balansräkning.kundfodringar + balansräkning.omsättningstillgångar;
        balansräkningsumma_kapital_skulder = balansräkning.eget_kapital + balansräkning.långfristiga_skulder + balansräkning.kortfristiga_skulder;
        balansräkning.eget_kapital += balansräkning.summa_tillgångar;
        chapterData.push(balansräkning);

        chapter.innerHTML = `
        <h2>Balansräkning År ${år}</h2>
        <div class="input-grid">
        <h3>Tillgångar</h3>
        
        <label>Anläggningstillgångar</label>
        <input type="text" value="${balansräkning.anläggningstillgångar}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Omsättningstillgångar(Kassa Bank)</label>
        <input type="text" value="${balansräkning.omsättningstillgångar}" disabled>
        <p class="currency">000 kr</p>
        
        <label><b>Summa Tillgångar</b></label>
        <input type="text" value="${balansräkning.summa_tillgångar}" disabled>
        <p class="currency">000 kr</p>
        
        <h3>Eget Kapital och Skulder</h3>
        
        <label>Eget Kapital</label>
        <input type="text" value="${balansräkning.eget_kapital}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Långfristiga skulder (Bank)</label>
        <input type="text" value="${balansräkning.långfristiga_skulder}" disabled>
        <p class="currency">000 kr</p>
        
        <label>Kortfristiga skulder (Leverantörer)</label>
        <input type="text" value="${balansräkning.kortfristiga_skulder}" disabled>
        <p class="currency">000 kr</p>
        
        <label><b>Summa Eget Kapital och Skulder</b></label>
        <input type="text" value="${balansräkning.summa_kapital_skulder}" disabled>
        <p class="currency">000 kr</p>
        </div>
        `;

        år ++;
        createChapter();
    });

    grid.append(button);

    chapter.append(grid);
    content.append(chapter);
}

function calculate() {
    
}