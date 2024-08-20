

function selectBPT(){
    
    bptyp = document.getElementById("bpt").value;
    if(bptyp == "Steel Plate Support"){
        document.getElementById("sps").style.display = "block";
      
        document.getElementById("csps").style.display = "none";
        
    
    }

    else if(bptyp == "Concrete / Shotcrete Support"){
            document.getElementById("csps").style.display = "block";
    
            document.getElementById("sps").style.display = "none";
    
    }
    
    else{
        document.getElementById("csps").style.display = "none";
        document.getElementById("sps").style.display = "none";
    }
    }
    selectBPT()
    
    
        document.getElementById("mySubmit").onclick = function(){
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
                let element = document.getElementById("plp");
                document.getElementById("plp").style.color = "green";
                document.getElementById("plp").style.backgroundColor = "none";
                document.getElementById("plp").style.fontWeight = "bold";
                document.getElementById("plp").style.marginLeft = "10px";
                element.title = "GOOD!"; // Add hover note
            } else {
                plp = " Provide Larger Plate";
                let element = document.getElementById("plp");
                document.getElementById("plp").style.color = "red";
                document.getElementById("plp").style.backgroundColor = "none";
                document.getElementById("plp").style.fontWeight = "bold";
                document.getElementById("plp").style.marginLeft = "10px";
                element.title = "Increase Plate thickness or Reduce Test Load"; // Add hover note
        
            }
            document.getElementById("plp").textContent = plp;
        }
    


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
                document.getElementById("plp2").style.color = "green";
                document.getElementById("plp2").style.backgroundColor = "none";
                document.getElementById("plp2").style.fontWeight = "bold";
                document.getElementById("plp2").style.marginLeft = "10px";
                element.title = "GOOD!"; // Add hover note
            } else {
                plp2 = " Provide Larger Plate";
                let element = document.getElementById("plp2");
                document.getElementById("plp2").style.color = "red";
                document.getElementById("plp2").style.backgroundColor = "none";
                document.getElementById("plp2").style.fontWeight = "bold";
                document.getElementById("plp2").style.marginLeft = "10px";
                element.title = "Increase Plate thickness or Reduce Test Load"; // Add hover note
        
            }
            document.getElementById("plp2").textContent = plp2;
        
            let css;
            if(ABCS >= cs){
                css = "Concrete Strength is adequate";
                let element = document.getElementById("css");
                document.getElementById("css").style.color = "green";
                document.getElementById("css").style.backgroundColor = "none";
                document.getElementById("css").style.fontWeight = "bold";
                document.getElementById("css").style.marginLeft = "10px";
                element.title = "GOOD!"; // Add hover note
            }
            else{
                css = "Concrete Strength is inadquate";
                let element = document.getElementById("css");
                document.getElementById("css").style.color = "red";
                document.getElementById("css").style.backgroundColor = "none";
                document.getElementById("css").style.fontWeight = "bold";
                document.getElementById("css").style.marginLeft = "10px";
                element.title = "Increase Concrete Strength or Increase Bearing Plate Size"; // Add hover note
            }
            document.getElementById("css").textContent = css;
        }





