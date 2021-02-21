window.addEventListener("load",init)

function init(){
    document.getElementById("kaloria").addEventListener("keyup",szamol)
}

function szamol(){
    
    let a=0.46
    let c=0.5
    let b=(document.getElementById("kaloria").value)
    let d=(document.getElementById("kaloria").value)
    if(!/^[0-9]+$/.test(b)&& !/^[0-9]+$/.test(d)){
    
    
    
        document.getElementById("ertek").innerHTML="Nem szamot adtal meg!"
        
    }else {
        
        

        
    let eredmeny=Math.round(a*b)
    let eredmeny1=Math.round(c*d)
    document.getElementById("ertek").innerHTML=eredmeny+"-"+eredmeny1+" kcal"
    
    }
}





