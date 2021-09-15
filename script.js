// Mad lib with js by Will

// Event listener
document.getElementById("madBtn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
    // Input
    let pluralNoun = document.getElementById("pluralNoun").value; 
    let adjective = document.getElementById("adjective").value;
    let presentTenseVerb = document.getElementById("presentTenseVerb").value;
    let noun = document.getElementById("noun").value;

    // Process
    let result = '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + presentTenseVerb + ' on the ' + noun + ' to solve this problem!"'

    // Output
    document.getElementById("result").innerHTML = result;


}

