document.getElementById("mySubmit").onclick = function() {
    // Retrieving input values
    let FTL = parseFloat(document.getElementById("FTL").value);
    let BPW = parseFloat(document.getElementById("BPW").value);
    let BPL = parseFloat(document.getElementById("BPL").value);
    let BPT = parseFloat(document.getElementById("BPT").value);
    let BPHD = parseFloat(document.getElementById("BPHD").value);
    let CL = parseFloat(document.getElementById("CL").value);
    let AHD = parseFloat(document.getElementById("AHD").value);
    let BPYS = parseFloat(document.getElementById("BPYS").value);
    let BSRF = parseFloat(document.getElementById("BSRF").value);

    // Calculating results
    let bpos = FTL / ((Math.PI * (AHD ** 2) / 4) - (Math.PI * (BPHD ** 2) / 4));
    document.getElementById("bpos").textContent = bpos.toFixed(2) + " ksi";

    let loewp = FTL / 2;
    document.getElementById("loewp").textContent = loewp.toFixed(2) + " kips";

    let esq = Math.sqrt((Math.PI * AHD ** 2) / 4);
    document.getElementById("esq").textContent = esq.toFixed(2) + " inches";

    let moi = ((BPL - BPHD) * (BPT ** 3)) / 12;
    document.getElementById("moi").textContent = moi.toFixed(2) + " in^4";

    let lolfc = Math.cos(45 * Math.PI / 180) * AHD / 2;
    document.getElementById("lolfc").textContent = lolfc.toFixed(2) + " inches";

    let moma = (CL / 2 - esq / 2);
    document.getElementById("moma").textContent = moma.toFixed(2) + " inches";

    let macob = (FTL / 2) * moma;
    document.getElementById("macob").textContent = macob.toFixed(2) + " k-in";

    let asop = BPYS * BSRF;
    document.getElementById("asop").textContent = asop.toFixed(2) + " ksi";

    let sop = macob * (BPT / 2) / moi;
    document.getElementById("sop").textContent = sop.toFixed(2) + " ksi";

    let sreq = macob / (BSRF * BPYS);
    document.getElementById("Sreq").textContent = sreq.toFixed(2) + " in^3";

    let sprov = ((BPL - BPHD) * BPT ** 2) / 6;
    document.getElementById("Sprov").textContent = sprov.toFixed(2) + " in^3";

    // Checking condition for plate size
    let plp;
    if (sop <= asop && sreq <= sprov) {
        plp = "Plate size is adequate";
        document.getElementById("plp").style.color = "white";
        document.getElementById("plp").style.backgroundColor = "green";
        document.getElementById("plp").style.fontWeight = "bold";
        document.getElementById("plp").style.marginLeft = "10px";
    } else {
        plp = " Provide Larger Plate";
        document.getElementById("plp").style.color = "white";
        document.getElementById("plp").style.backgroundColor = "red";
        document.getElementById("plp").style.fontWeight = "bold";
        document.getElementById("plp").style.marginLeft = "10px";
    }
    document.getElementById("plp").textContent = plp;
};
