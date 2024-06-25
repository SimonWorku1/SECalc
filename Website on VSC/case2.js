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
    const one = document.getElementById("pmoi").textContent = " "+ pmoi;

    nbpa = (BPW2*BPL2)-(Math.PI * CHD**2)/4
    const two = document.getElementById("nbpa").textContent = " "+ nbpa;

    cs = FTL2/nbpa;
    const three = document.getElementById("cs").textContent = " "+ cs;

    nbsobp = FTL2/((Math.PI/4)*((parseFloat(AHD2)+parseFloat(BPT2))**2 - BPHD2**2))
    const four = document.getElementById("nbsobp").textContent = " "+ nbsobp;

    if (BPW2 >= BPL2){
        MaxBP = BPW2;
        MinBP = BPL2;
}
    else{
        MaxBP = BPL2;
        MinBP = BPW2;
    }
    boc = (cs*((MaxBP*MaxBP/2 *MaxBP/4)-((Math.PI*CHD*CHD/8)*((CHD/2)*(0.4244)))));
    const five = document.getElementById("boc").textContent = " "+ boc;

    bosp = -nbsobp*(Math.PI*((parseFloat(AHD2) + parseFloat(BPT2))**3)/8)*0.2122065+((nbsobp*Math.PI)/8)*(BPHD2**3)*0.2122065;
    const six = document.getElementById("bosp").textContent = " "+ bosp;

    macobp = boc + bosp;
    const seven = document.getElementById("macobp").textContent = " "+ macobp;

    bs = macobp*(BPT2/2)/pmoi;
    const eight = document.getElementById("bs").textContent = " "+ bs;

    abs = BSRF2*BPYS2;
    const nine = document.getElementById("abs").textContent = " "+ abs;

    Sreq2 = macobp/(BSRF2*BPYS2);
    const ten = document.getElementById("Sreq2").textContent = " "+ Sreq2;

    
    Sprov2 = ((MinBP-BPHD2)*BPT2**2)/6;
    const eleven = document.getElementById("Sprov2").textContent = " "+ Sprov2;

    if(Sprov2 > Sreq2){
        plp2 = "O.K.";
    }
    else{
        plp2 = "Provide Larger Plate";
    }
    const twelve = document.getElementById("plp2").textContent = " "+ plp2;


}       

