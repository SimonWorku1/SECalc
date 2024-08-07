document.getElementById("mySubmit2").onclick = function(){
    FTL2 = document.getElementById("FTL2").value;
    BPW2 = document.getElementById("BPW2").value;
    BPL2 = document.getElementById("BPL2").value;
    BPT2 = document.getElementById("BPT2").value;
    BPHD2 = document.getElementById("BPHD2").value;
    FC = document.getElementById("FC").value;
    AHD2 = document.getElementById("AHD2").value;
    BPYS2 = document.getElementById("BPYS2").value;
    BSRF2 = document.getElementById("BSRF2").value;
    CHD = document.getElementById("CHD").value;
    ABCS = document.getElementById("ABCS").value;

    pmoi = ((BPW2-BPHD2)*BPT2**3)/12;
    document.getElementById("pmoi").textContent = pmoi.toFixed(2) + " in^4";

    nbpa = (BPW2*BPL2)-(Math.PI * CHD**2)/4;
    document.getElementById("nbpa").textContent = nbpa.toFixed(2) + " sqin";

    cs = FTL2/nbpa;
    document.getElementById("cs").textContent = cs.toFixed(2) + " ksi";

    nbsobp = FTL2/((Math.PI/4)*((parseFloat(AHD2)+parseFloat(BPT2))**2 - BPHD2**2));
    document.getElementById("nbsobp").textContent = nbsobp.toFixed(2) + " ksi";

    let MaxBP, MinBP;
    if (BPW2 >= BPL2){
        MaxBP = BPW2;
        MinBP = BPL2;
    } else {
        MaxBP = BPL2;
        MinBP = BPW2;
    }
    boc = (cs*((MaxBP*MaxBP/2 *MaxBP/4)-((Math.PI*CHD*CHD/8)*((CHD/2)*(0.4244)))));
    document.getElementById("boc").textContent = boc.toFixed(2) + " kip";

    bosp = -nbsobp*(Math.PI*((parseFloat(AHD2) + parseFloat(BPT2))**3)/8)*0.2122065+((nbsobp*Math.PI)/8)*(BPHD2**3)*0.2122065;
    document.getElementById("bosp").textContent = bosp.toFixed(2) + " kip";

    macobp = boc + bosp;
    document.getElementById("macobp").textContent = macobp.toFixed(2) + " k-in";

    bs = macobp*(BPT2/2)/pmoi;
    document.getElementById("bs").textContent = bs.toFixed(2) + " ksi";

    abs = BSRF2*BPYS2;
    document.getElementById("abs").textContent = abs.toFixed(2) + " ksi";

    Sreq2 = macobp/(BSRF2*BPYS2);
    document.getElementById("Sreq2").textContent = Sreq2.toFixed(2) + " in^4";

    Sprov2 = ((MinBP-BPHD2)*BPT2**2)/6;
    document.getElementById("Sprov2").textContent = Sprov2.toFixed(2) + " in^4";

    let plp2;
    if(Sprov2 > Sreq2){
        plp2 = "Plate size is adequate";
        let element = document.getElementById("plp2");
        document.getElementById("plp2").style.color = "white";
        document.getElementById("plp2").style.backgroundColor = "green";
        document.getElementById("plp2").style.fontWeight = "bold";
        document.getElementById("plp2").style.marginLeft = "10px";
        element.title = "GOOD!"; // Add hover note
    } else {
        plp2 = " Provide Larger Plate";
        let element = document.getElementById("plp2");
        document.getElementById("plp2").style.color = "white";
        document.getElementById("plp2").style.backgroundColor = "red";
        document.getElementById("plp2").style.fontWeight = "bold";
        document.getElementById("plp2").style.marginLeft = "10px";
        element.title = "Increase Plate thickness or Reduce Test Load"; // Add hover note

    }
    document.getElementById("plp2").textContent = plp2;

    let css;
    if(ABCS >= cs){
        css = "Concrete Strength is adequate";
        let element = document.getElementById("css");
        document.getElementById("css").style.color = "white";
        document.getElementById("css").style.backgroundColor = "green";
        document.getElementById("css").style.fontWeight = "bold";
        document.getElementById("css").style.marginLeft = "10px";
        element.title = "GOOD!"; // Add hover note
    }
    else{
        css = "Concrete Strength is inadquate";
        let element = document.getElementById("css");
        document.getElementById("css").style.color = "white";
        document.getElementById("css").style.backgroundColor = "red";
        document.getElementById("css").style.fontWeight = "bold";
        document.getElementById("css").style.marginLeft = "10px";
        element.title = "Increase Concrete Strength or Increase Bearing Plate Size"; // Add hover note
    }
    document.getElementById("css").textContent = css;
}

