document.getElementById("mySubmit").onclick = function(){
    FTL = document.getElementById("FTL").value;
    BPW = document.getElementById("BPW").value;
    BPL = document.getElementById("BPL").value;
    BPT = document.getElementById("BPT").value;
    BPHD = document.getElementById("BPHD").value;
    CL = document.getElementById("CL").value;
    AHD = document.getElementById("AHD").value;
    BPYS = document.getElementById("BPYS").value;
    BSRF = document.getElementById("BSRF").value;

    bpos = FTL/((Math.PI*(AHD**2)/4)-(Math.PI*(BPHD**2)/4));
    const one = document.getElementById("bpos").textContent = " "+ bpos
    
    loewp = FTL/2;
    const two = document.getElementById("loewp").textContent = " "+loewp;

    esq = ((Math.PI*AHD**2)/4)**0.5;
    const three = document.getElementById("esq").textContent =  " "+esq;

    moi = ((BPL-BPHD)*(BPT**3))/12;
    const four = document.getElementById("moi").textContent =  " "+moi;

    lolfc = Math.cos(45 * Math.PI/180) * AHD/2;
    const five = document.getElementById("lolfc").textContent =  " "+lolfc;

    moma = (CL/2 - esq/2);
    const six = document.getElementById("moma").textContent =  " "+moma;

    macob = (FTL/2) * moma;
    const seven = document.getElementById("macob").textContent =  " "+macob;

    asop = BPYS * BSRF;
    const eight = document.getElementById("asop").textContent =  " "+asop;

    sop = macob*(BPT/2)/moi;
    const nine = document.getElementById("sop").textContent =  " "+sop;

    sreq = macob/(BSRF*BPYS);
    const ten = document.getElementById("Sreq").textContent =  " "+sreq;

    sprov = ((BPL-BPHD)*BPT**2)/6;
    const eleven = document.getElementById("Sprov").textContent =  " "+sprov;

    if(sop <= asop && sreq <= sprov){
        plp = "O.K.";
    } 
    else{
        plp = "Provide Larger Plate";
    }
    const twelve = document.getElementById("plp").textContent =  " "+plp;


}

