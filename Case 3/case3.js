document.getElementById("non-isolated").style.display = "none";
        document.getElementById("isolated").style.display = "block";
function myFunction() {
    // Retrieving input values
   // Retrieving input values
   //let pjct = document.getElementById("pjct").value;
   //let sname = document.getElementById("sname").value;
   //let abtmt = document.getElementById("abtmt").value;
   let ftype = document.getElementById("ftype").value;
   let skt = document.getElementById("skt").value;
   let vsrebar = parseInt(document.getElementById("vsrebar").value);
   let vblay = parseInt(document.getElementById("vblay").value);
   let vrtype = document.getElementById("vrtype").value;
   let numlegs = parseInt(document.getElementById("numlegs").value);
   let hsrebar = parseInt(document.getElementById("hsrebar").value);
   let hblay = parseInt(document.getElementById("hblay").value);
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

    const vlook = [
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
    // Calculating results
    if(skt == "Isolated Shear Key"){
        document.getElementById("non-isolated").style.display = "none";
        document.getElementById("isolated").style.display = "block";
    }
    else{
        document.getElementById("isolated").style.display = "none";
        document.getElementById("non-isolated").style.display = "block";

    }
    
    
    //document.getElementById("pjct").textContent = " " + pjct;
    //document.getElementById("sname").textContent = " "+ sname;
    //document.getElementById("abtmt").textContent = " " + abtmt;
    //console.log(document.getElementById("pjct"))


    let sc;
    if(ftype == "Spread Footing"){
        sc = wwt*hww;
    }
    else{
        sc = Math.min((af*(0.75*uscap*ppa)+wwt*hww*dctsf*144*Math.sqrt(csf*1000)),af*ssdl)
    }
    document.getElementById("sc").textContent = sc.toFixed(2) + " kip";
 /////

    let niskc;
    if(skt == "Non Isolated Shear Key" && sc>0.4*skbw*skbl*144){
        niskc = "GOOD"
    }
    let niskc2;
    if(skt == "Non Isolated Shear Key" && sc <= Math.min(0.25*ecsf*144*skbl*skbw,1.5*skbl*skbw*144)){
        niskc2 = "GOOD";
    }
    
    
    let vra;
    if(skt== "Isolated Shear Key"){
        vra = Math.max(sc/(1.8*eyss),0.05*skbw*skbl*144/eyss)
    }
    else if(niskc == "GOOD" && niskc2 == "GOOD" ){
        vra = Math.max((sc-0.4*144*skbw*skbl)/(1.4*eyss),0.05*skbl*skbw*144/eyss)
    }
    else{
        vra = "WRONG KEY TYPE"
    }
    document.getElementById("vra").textContent = vra.toFixed(2) + " in^2";

    let hra;
    if(skt == "Isolated Shear Key"){
        hra = 2*vra;
    }
    else{
        hra = Math.max(2*vra,sc/eyss)
    }
    document.getElementById("hra").textContent = hra.toFixed(2) + " in^2";


 if(skt == "Isolated Shear Key"){
    let nvr;
    if(vblay == 1){
        nvr = Math.ceil(vra/vlook[vsrebar][1])
    }
    else if(vblay == 2){
        nvr = Math.ceil(vra/(2*vlook[vsrebar][1]))
    }
    else{
        nvr = Math.ceil(vra/(3*vlook[vsrebar][1]))
    }
    document.getElementById("nvr").textContent = nvr.toFixed(2) + "";

    let nhr;
    if(vblay == 1){
        nhr = Math.ceil(hra/vlook[hsrebar][1])
    }
    else if(vblay == 2){
        nhr = Math.ceil(hra/(2*vlook[hsrebar][1]))
    }
    else{
        nhr = Math.ceil(hra/(3*vlook[hsrebar][1]))
    }
    document.getElementById("nhr").textContent = nhr.toFixed(2) + "";


    let tdl;
    if(vblay == 1){
        tdl = (vra/(nvr*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    else if(vblay == 2){
       tdl = (1.2*vra/(nvr*2*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    else{
        tdl = (1.33*vra/(nvr*3*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    document.getElementById("tdl").textContent = tdl.toFixed(3) + " ft";

    let lhhh;
    if(vrtype == "Hooked"){
        lhhh = ((hef+tslsk)*0.6+vlook[vsrebar][4])/12;
        document.getElementById("lhhh").textContent = lhhh.toFixed(2) + " ft";
    }
    else{
        lhhh = "N/A"
        document.getElementById("lhhh").textContent = lhhh;
    }

    let lmh;
    if(vrtype == "Headed"){
        lmh = ((hef+tslsk)*0.6+3)/12
    }
    else{
        lmh = "N/A"
    }
    document.getElementById("lmh").textContent = lmh.toFixed(2) + " ft";
 }
 else{
    ////////////////////////////////////////////////////////////////////////////////

    let nvr2;
    if(vblay == 1){
        nvr2 = Math.ceil(vra/(numlegs*vlook[vsrebar][1]))
    }
    else if(vblay == 2){
        nvr2 = Math.ceil(vra/(numlegs*2*vlook[vsrebar][1]))
    }
    else{
        nvr2 = Math.ceil(vra/(numlegs*3*vlook[vsrebar][1]))
    }
    document.getElementById("nvr2").textContent = nvr2
    
    let nhr2;
    if(hblay == 1){
        nhr2 = Math.ceil(hra/vlook[hsrebar][1])
    }
    else if(hblay == 2){
        nhr2 = Math.ceil(hra/(2*vlook[hsrebar][1]))
    }
    else{
        nhr2 = Math.ceil(hra/(3*vlook[hsrebar][1]))
    }
    document.getElementById("nhr2").textContent = nhr2;

    let tdl2;
    if(vblay == 1){
        tdl2 = (vra/(nvr2*numlegs*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    else if(vblay == 2){
       tdl2 = (1.2*vra/(nvr2*2*numlegs*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    else{
        tdl2 = (1.33*vra/(nvr2*3*numlegs*vlook[vsrebar][1])*vlook[vsrebar][3])/12
    }
    document.getElementById("tdl2").textContent = tdl2.toFixed(3) + " ft";

   
    document.getElementById("niskc").textContent = niskc;

    let hdl;
    if(vblay == 1){
        hdl = vra/(nvr2*numlegs*vlook[vsrebar][1])*vlook[vsrebar][4]/12
    }
    else if(vblay == 2){///check if the formula for this one is correct with Dawit
        hdl = (1.2*vra/(nvr2*numlegs*2*vlook[vsrebar][1])*vlook[vsrebar][4]/12)
    }
    else{
        hdl = (1.33*vra/(nvr2*numlegs*3*vlook[vsrebar][1])*vlook[vsrebar][4]/12)
    }
    document.getElementById("hdl").textContent = hdl.toFixed(3) + " in^2";

   
    document.getElementById("niskc2").textContent = niskc2;

 }

    
    
    
    
    
    
    
    
}
