function myFunction() {
    // Retrieving input values
    let bof = parseFloat(document.getElementById("bof").value);
    let tod = parseFloat(document.getElementById("tod").value);
    let tof = parseFloat(document.getElementById("tof").value);
    let wob = parseFloat(document.getElementById("wob").value);
    let ed = parseInt(document.getElementById("ed").value);
    let alpha = parseFloat(document.getElementById("alpha").value);
    let theta = parseFloat(document.getElementById("theta").value);
    let dc = parseFloat(document.getElementById("dc").value);
    let dw = parseFloat(document.getElementById("dw").value);
    let lltrk = parseFloat(document.getElementById("lltrk").value);
    let lllane = parseFloat(document.getElementById("lllane").value);
    let prmt = parseFloat(document.getElementById("prmt").value);

    // Convert angles to radians
    const alphaRadians = alpha * Math.PI / 180;
    const thetaRadians = theta * Math.PI / 180;
    const cosineAlpha = Math.cos(alphaRadians);
    const tangentTheta = Math.tan(thetaRadians);

    // Calculate wskw
    let wskw;
    if (cosineAlpha === 0) {
        console.error("Error: Division by zero.");
        return; // Exit the function if division by zero is encountered
    } else {
        wskw = wob / cosineAlpha;
    }
   // document.getElementById("wskw").textContent = wskw.toFixed(2) + " ft";

    // Calculate habut
    let habut = tod - bof - tof;
   // document.getElementById("habut").textContent = habut.toFixed(2) + " ft";

    // Calculate n
    let n = Math.floor((wob - 2 * ed) / 12);
   // document.getElementById("n").textContent = n;

    // Helper function to get MPF List
    function getMpfList(n) {
        let mpfList = [];
        for (let i = 1; i <= n; i++) {
            let mpf;
            if (i === 1) {
                mpf = 1.2;
            } else if (i === 2) {
                mpf = 1;
            } else if (i === 3) {
                mpf = 0.83;
            } else {
                mpf = 0.65;
            }
            mpfList.push(mpf);
        }
        return mpfList;
    }

    // Helper function to get Live Load Distance List
    function getLLdistanceList(ed, cosineAlpha, n) {
        let aList = [];
        for (let i = 1; i <= n; i++) {
            let a = ((8 + ed) + (i - 1) * 12) / cosineAlpha;
            aList.push(a);
        }
        return aList;
    }

    // Helper function to get Habut List
    /* function getHabutList(habut, n) {
        let habutList = [];
        for (let i = 1; i <= n; i++) {
            habutList.push(habut);
        }
        return habutList;
    } */

    // Helper function to get WSKW List
  /*  function getWskwList(wskw, n) {
        let wskwList = [];
        for (let i = 1; i <= n; i++) {
            wskwList.push(wskw);
        }
        return wskwList;
    } */

    // Helper function to get Live Load Top Distance List
    function getLLtopdistanceList(aList, habut, tangentTheta, wskw) {
        let bList = [];
        for (let i = 0; i < aList.length; i++) {
            let a = aList[i];
            let b = Math.min(a + habut * tangentTheta, wskw).toFixed(2);
            bList.push(b);
        }
        return bList;
    }

    // Helper function to get Equivalent LL Lane
    function getEquivalentLLlane(mpfList, wskw, bList) {
        let eqllList = [];
    
        for (let i = 0; i < mpfList.length; i++) {
            let mpf = mpfList[i];
            let b = bList[i] || 1; // Avoid division by zero
            let eqll = ((mpf * wskw) / b).toFixed(2);
            eqllList.push(eqll) ;
           
        }
        return eqllList;
        
    }

    // Helper function to get maximum LL lane width for design (HL-93)
    function getMaxLLlanewidth(eqllList) {
        if (eqllList.length === 0) return null;
        return Math.max(...eqllList); // Return the maximum value in the array
    }

    // Helper function to get maximum PL lane width (P-15)
    function getMaxPLlanewidth(eqllList) {
        if (eqllList.length === 0) return null;
        return Math.max(eqllList[0],eqllList[1]); // This assumes you only care about the first and the second PL lane width
    }

    // Calculate the maximum LL and PL widths
    let mpfList = getMpfList(n);
    let llDistanceList = getLLdistanceList(ed, cosineAlpha, n);
   // let habutList = getHabutList(habut, n);
   // let wskwList = getWskwList(wskw, n);
    let llTopDistanceList = getLLtopdistanceList(llDistanceList, habut, tangentTheta, wskw);
    let equivalentLLLane = getEquivalentLLlane(mpfList, wskw, llTopDistanceList);
    let maxLL = getMaxLLlanewidth(equivalentLLLane);
    let maxPL = getMaxPLlanewidth(equivalentLLLane);

    // Helper function to get total Live Load (HL-93 Truck and Lane) without Impact
    function getDesignLL(maxLL, lltrk, lllane) {
        return maxLL * (lltrk + lllane);
    }

    // Helper function to get total Live Load (P-15 Truck) without Impact
    function getPermitLL(maxPL, prmt) {
        return maxPL * prmt;
    }

    // Calculate design LL and permit LL
    let designLL = getDesignLL(maxLL, lltrk, lllane);
    let permitLL = getPermitLL(maxPL, prmt);

    // Display results
    document.getElementById("llTopDistanceList").textContent = llTopDistanceList + " ft" ;
    document.getElementById("equivalentLLLane").textContent = equivalentLLLane + " Lanes";
    document.getElementById("maxLL").textContent = maxLL.toFixed(2) + " Lanes";
    document.getElementById("maxPL").textContent = maxPL.toFixed(2) + " Lanes";
    document.getElementById("DesignLL").textContent = designLL.toFixed(2) + " kip";
    document.getElementById("PermitLL").textContent = permitLL.toFixed(2) + " kip";

    // Logging for debugging
    console.log("MPF List:", mpfList);
    console.log("LL Distance List:", llDistanceList);
    console.log("Habut List:", habut);
    console.log("WSKW List:", wskw);
    console.log("LL Top Distance List:", llTopDistanceList);
    console.log("Equivalent LL Lane List:", equivalentLLLane);
}