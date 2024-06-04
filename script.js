function Click(){
    var Value = document.getElementById("Url").value
    var Modificado_Value = String(Value).split("v=")[1].slice(0,11)
    document.getElementById("Create_Iframe").innerHTML = `
    <iframe
    src="https://api.vevioz.com/api/button/mp3/${Modificado_Value}"
    width="100%"
    height="100%"
    allowtransparency="true"
    scrolling="no"
    style="border: none"
    ></iframe> 
    `
}

