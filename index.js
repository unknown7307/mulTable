function multablefunc(){ 
    let number = document.getElementById("mulTable").value;
    let para ="";

    for(let i =1;i<=10;i++){
        para = para + "<p>"+number + "*" + i + "=" + number * i+"</p>";
    }
    document.getElementById("para").innerHTML = para;
}

let resetBtn = document.getElementsByClassName("btn")[1];
resetBtn.onclick = ()=>{
para.style.display = "none";
}