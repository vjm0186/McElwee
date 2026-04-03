
/*  Begin Revision Comments */
        
/*  End Revision Comments */

  
/* Begin global varables */

const button01 = document.getElementById("btn01");   
const AboutText = document.getElementById("AboutText");  

/* End global varables */

button01.addEventListener("click", aboutDisplay); 


function aboutDisplay() {

  AboutText.style.visibility = "visible";
}

    
