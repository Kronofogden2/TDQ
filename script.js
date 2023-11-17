let content = document.querySelector(".content");

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

    if (!isNaN(parseInt(egetkapital.value) + parseInt(långfristigaskulder.value) + parseInt(kortfristigaskulder.value)))
    {
        document.querySelector("#SummaEgetKapitalOchSkulderÅr0").value = parseInt(egetkapital.value) + parseInt(långfristigaskulder.value) + parseInt(kortfristigaskulder.value);
        buttonÅr0.remove();
    }
});

/* function createChapter () {
    let chapter = document.createElement("div");
    chapter.classList.add("chapter");
    let chapterHeader = document.createElement("h2");
}

function calculate () {

} */