document.getElementById("mySubmit").onclick = function() {
    // Retrieving input values
    let pjct = parseFloat(document.getElementById("pjct").value);
    let sname = parseFloat(document.getElementById("sname").value);
    let abtmt = parseFloat(document.getElementById("abtmt").value);
    let ftype = parseFloat(document.getElementById("ftype").value);
    let skt = parseFloat(document.getElementById("skt").value);
    let vsrebar = parseFloat(document.getElementById("vsrebar").value);
    let vblay = parseFloat(document.getElementById("vblay").value);
    let vrtype = parseFloat(document.getElementById("vrtype").value);
    let numlegs = parseFloat(document.getElementById("numlegs").value);
    let hsrebar = parseFloat(document.getElementById("hsrebar").value);
    let hblay = parseFloat(document.getElementById("hblay").value);
    let wwt = parseFloat(document.getElementById("wwt").value);
    let hww = parseFloat(document.getElementById("hww").value);
    let skbw = parseFloat(document.getElementById("skbw").value);
    let skbl = parseFloat(document.getElementById("skbl").value);
    let ppa = parseFloat(document.getElementById("ppa").value);
    let adl = parseFloat(document.getElementById("adl").value);
    let ssdl = parseFloat(document.getElementById("ssdl").value);
    let hef = parseFloat(document.getElementById("hef").value);
    let tslsk = parseFloat(document.getElementById("tslsk").value);
    let uscap = parseFloat(document.getElementById("uscap").value);
    let sys = parseFloat(document.getElementById("sys").value);
    let csf = parseFloat(document.getElementById("csf").value);
    let ecsf = parseFloat(document.getElementById("ecsf").value);
    let yhs = parseFloat(document.getElementById("yhs").value);
    let eyss = parseFloat(document.getElementById("eyss").value);
    let af = parseFloat(document.getElementById("af").value);
    let srf = parseFloat(document.getElementById("srf").value);
    let dctsf = parseFloat(document.getElementById("dctsf").value);


    // Calculating results

    if(ftype == "Spread Footing"){
        let sc = wwt*hww;
    }
    else{
        let sc = Math.min((af*(0.75*uscap*ppa)+wwt*hww*dctsf*144*Math.sqrt(csf*1000)),af*ssdl)
    }
    document.getElementById("sc").textContent = bpos.toFixed(2) + " kip";
    
    let vra;
    if(skt== "Isolated Shear Key"){
        vra = Math.max(sc/(1.8*eyss),0.5*skbw*skbl*144/eyss)
    }
    else if(niskc == "GOOD" && niskc2 == "GOOD" ){
        vra = Max((sc-0.4*144*skbw*skbl*144/eyss))
    }
    else{
        vra = "WRONG KEY TYPE"
    }
    document.getElementById("vra").textContent = bpos.toFixed(2) + " in^2";

    let hra;
    if(skt == "Isolated Shear Key"){
        hra = 2*vra;
    }
    else{
        hra = Math.max(2*vra,sc/eyss)
    }
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    let nvr;
    if(vblay == 1){
        vra/vlook[vsrebar][2]
    }
    else if(vblay == 2){
        vra/(2*vlook[vsrebar][2])
    }
    else{
        vra/(3*vlook[vsrebar][2])
    }

    document.getElementById("nvr").textContent = bpos.toFixed(2) + "";

    let nhr = ;
    document.getElementById("nhr").textContent = bpos.toFixed(2) + "";

    let tdl = ;
    document.getElementById("tdl").textContent = bpos.toFixed(2) + " ft";

    let lhhh = ;
    document.getElementById("lhhh").textContent = bpos.toFixed(2) + " ft";

    let lmh = ;
    document.getElementById("lmh").textContent = bpos.toFixed(2) + " ft";

    ////////

    let nvr2 ; 
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";
    
    let nhr2 = ;
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    let tdl2 = ;
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    let niskc = ;
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    let hdl = ;
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    let niskc2 = ;
    document.getElementById("hra").textContent = bpos.toFixed(2) + " in^2";

    

    
    vlook = [
        [3,0.11,0.375,12.000,7.125],
        [4,0.2,0.5,12.000,9.5],
        [5,0.31,0.625,15.000,11.875],
        [6,0.44,0.750,18.000,14.250],
        [7,0.6,0.875,22.500,16.625],
        [8,0.79,1.000,29.625,19.000],
        [9,1.00,1.128,37.500,21.432],
        [10,1.27,1.270,47.625,24.130],
        [11,1.56,1.410,58.500,26.790],
        [14,2.25,1.693,81.000,32.167],
        [18,4.00,2.257,105.000,42.833]

    ]
    
    
    
    
    
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
