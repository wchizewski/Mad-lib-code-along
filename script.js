// Mad lib with js by Will

// Event listener
document.getElementById("madBtn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
    // Input
    let verbIng = document.getElementById("verbIng").value;
    let adjective = document.getElementById("adjective").value;
    let noun = document.getElementById("noun").value;
    let pastTenseVerb = document.getElementById("pastTenseVerb").value;
    let adjective2 = document.getElementById("adjective2").value;

    // Process
    let result = 'I was ' + verbIng + ' with my friend when we saw a(n) ' + adjective + ' ' + noun + ' in the trees. We were so ' +  adjective2 + '. We ' + pastTenseVerb + ' as fast as we could to safety.'

    // Output
    document.getElementById("result").innerHTML = result;
    document.getElementById("resultDiv").style.display = "block";

}

