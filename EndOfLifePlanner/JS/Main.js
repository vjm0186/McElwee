
/*  Begin Revision Comments */
        
/*  End Revision Comments */

  
/* Begin global varables */

const button01 = document.getElementById("btn01");   
const button02 = document.getElementById("btn02");  
const button03 = document.getElementById("btn03"); 
const button04 = document.getElementById("btn04");   

const AboutText = document.getElementById("AboutText");  
const PrepaidFuneral = document.getElementById("PrepaidFuneral"); 
const Entombment = document.getElementById("Entombment"); 
const Documents = document.getElementById("Documents"); 

/* End global varables */

button01.addEventListener("focus", aboutDisplay);
button01.addEventListener("click", aboutDisplay); 
button01.addEventListener("blur", aboutNoDisplay); 

button02.addEventListener("focus", PrepaidFuneralDisplay);
button02.addEventListener("click", PrepaidFuneralDisplay); 
button02.addEventListener("blur", PrepaidFuneralNoDisplay); 

button03.addEventListener("focus", EntombmentDisplay);
button03.addEventListener("click", EntombmentDisplay); 
button03.addEventListener("blur", EntombmentNoDisplay);

button04.addEventListener("focus", DocumentsDisplay);
button04.addEventListener("click", DocumentsDisplay); 
button04.addEventListener("blur", DocumentsNoDisplay);


/* Begin About Functions */
function aboutDisplay() {
  AboutText.style.visibility = "visible";
  PrepaidFuneral.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};

function aboutNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};
/* End About Functions */

/* Begin Prepaid Funeral Functions */
function PrepaidFuneralDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "visible";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};

function PrepaidFuneralNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};
/* End Prepaid Funeral Functions */

/* Begin Entombment Functions */
function EntombmentDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "visible"; 
  Documents.style.visibility = "hidden";
};

function EntombmentNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};
/* End Entombment Functions */

/* Begin DocumentsFunctions */
function DocumentsDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "visible";
};

function DocumentsNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
};
/* End Entombment Functions */