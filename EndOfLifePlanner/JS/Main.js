
/*  Begin Revision Comments */
        
/*  End Revision Comments */

/* Begin global varables */
/* const ExitConfirm = false; */

/* Begin set Opacity value to "0" for the "Video/Audio is Available" button */
let VideoAudioTextButton = document.getElementById('btn15');
let idDescriptionVideoAudio = document.getElementById("descriptionVideoAudio");
let idelementsVideoAudio = document.getElementById("elementsVideoAudio");
let VideoAudioTextButtonOpacity = "0";

VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "0";

idDescriptionVideoAudio.textContent = "  Discription: Welcome";

/*
if ( VideoAudioTextButtonOpacity == "0") {
  console.log("1  VideoAudioTextButtonOpacity No Video/Audio");
} else
{
 console.log("2  VideoAudioTextButtonOpacity Yes Video/Audio");
}
*/
/* End Test  VideoAudioTextButtonOpacity for the "Video/Audio is Available" button */


const button01 = document.getElementById("btn01");  
const btnGT01 = document.getElementById("btnGT01");   
const button02 = document.getElementById("btn02");  
const btnGT02 = document.getElementById("btnGT02");  

const button03 = document.getElementById("btn03"); 
const button04 = document.getElementById("btn04"); 
const button05 = document.getElementById("btn05");    
const button06 = document.getElementById("btn06"); 
const button07 = document.getElementById("btn07"); 
const button08 = document.getElementById("btn08"); 
const button09 = document.getElementById("btn09"); 
const button10 = document.getElementById("btn10");
const button11 = document.getElementById("btn11");
const button12 = document.getElementById("btn12");
const button13 = document.getElementById("btn13");
const button14 = document.getElementById("btn14");
const button15 = document.getElementById("btn15");
const btnGT15 = document.getElementById("btnGT15");  
const button16 = document.getElementById("btn16");
const Rightside = document.getElementById("Rightside");

const AboutText = document.getElementById("AboutText");  
const PrepaidFuneral = document.getElementById("PrepaidFuneral"); 
const Entombment = document.getElementById("Entombment"); 
const Documents = document.getElementById("Documents"); 
const FilingWill = document.getElementById("FilingWill"); 
const Bank = document.getElementById("Bank"); 
const Notifications = document.getElementById("Notifications"); 
const Income = document.getElementById("Income"); 
const Expenses = document.getElementById("Expenses"); 
const TaxPreparer = document.getElementById("TaxPreparer"); 
const EstateAttoney = document.getElementById("EstateAttoney"); 
const Probate = document.getElementById("Probate"); 
const Property = document.getElementById("Property"); 
const Security = document.getElementById("Security"); 
const VideoAudio = document.getElementById("VideoAudio"); 
const Exit = document.getElementById("Exit"); 

/* End global varables */

/* button01.addEventListener("focus", aboutDisplay); */
button01.addEventListener("click", clickaboutDisplay); 
button01.addEventListener("blur", bluraboutNoDisplay); 

/* button02.addEventListener("focus", PrepaidFuneralDisplay); */
button02.addEventListener("click", clickPrepaidFuneralDisplay); 
button02.addEventListener("blur", blurPrepaidFuneralNoDisplay); 

button03.addEventListener("focus", EntombmentDisplay);
button03.addEventListener("click", EntombmentDisplay); 
button03.addEventListener("blur", EntombmentNoDisplay);

button04.addEventListener("focus", DocumentsDisplay);
button04.addEventListener("click", DocumentsDisplay); 
button04.addEventListener("blur", DocumentsNoDisplay);

button05.addEventListener("focus", FilingWillDisplay);
button05.addEventListener("click", FilingWillDisplay); 
button05.addEventListener("blur", FilingWillNoDisplay);

button06.addEventListener("focus", BankDisplay);
button06.addEventListener("click", BankDisplay); 
button06.addEventListener("blur", BankNoDisplay);

button07.addEventListener("focus", NotificationsDisplay);
button07.addEventListener("click", NotificationsDisplay); 
button07.addEventListener("blur", NotificationsNoDisplay);

button08.addEventListener("focus", IncomeDisplay);
button08.addEventListener("click", IncomeDisplay); 
button08.addEventListener("blur", IncomeNoDisplay);

button09.addEventListener("focus", ExpensesDisplay);
button09.addEventListener("click", ExpensesDisplay); 
button09.addEventListener("blur", ExpensesNoDisplay);

button10.addEventListener("focus", TaxPreparerDisplay);
button10.addEventListener("click", TaxPreparerDisplay); 
button10.addEventListener("blur", TaxPreparerNoDisplay);

button11.addEventListener("focus", EstateAttoneyDisplay);
button11.addEventListener("click", EstateAttoneyDisplay); 
button11.addEventListener("blur", EstateAttoneyNoDisplay);

button12.addEventListener("focus", ProbateDisplay);
button12.addEventListener("click", ProbateDisplay); 
button12.addEventListener("blur", ProbateNoDisplay);

button13.addEventListener("focus", PropertyDisplay);
button13.addEventListener("click", PropertyDisplay); 
button13.addEventListener("blur", PropertyNoDisplay);

button14.addEventListener("focus", SecurityDisplay);
button14.addEventListener("click", SecurityDisplay); 
button14.addEventListener("blur", SecurityNoDisplay);

/* button15.addEventListener("focus", VideoAudioDisplay); */
button15.addEventListener("click", clickVideoAudioDisplay); 
button15.addEventListener("blur", blurVideoAudioNoDisplay);
/* button15.addEventListener("blur", VideoAudioNoDisplay); */

/* button16.addEventListener("focus", ExitDisplay); */
button16.addEventListener("click", clickExitDisplay); 
button16.addEventListener("blur", blurExitNoDisplay);

/* Begin About Functions */
function clickaboutDisplay() {
  console.log("Begin clickaboutDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  ResetButtonStyles();

  AboutText.style.visibility = "visible";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";

  button01.style.color = "#000000";
  button01.style.background = "#90e738";
  button01.style.fontSize = "20px";
  button01.style.fontWeight ="bold";
  button01.style.textAlign = "center";
  button01.style.borderBlockColor = "#000000";
  button01.style.borderTop = "2px";
  button01.style.borderWidth = "1px";
  button01.style.borderStyle = "solid";
  button01.style.borderRadius = "13px";
  button01.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
  button01.animation = "anim-shadow .3s forwards";
  btnGT01.style.visibility = "hidden";

  /* Begin Add Video/Audio */
  VideoAudioTextButton.style.opacity = "1";
  VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "1";

  idDescriptionVideoAudio.textContent = "  About Discription";
  idelementsVideoAudio.src = "Video/Flag.mp4";

  button15.style.visibility = "visible";
  btnGT15.style.visibility = "visible";
  /* End Add Video/Audio */

  console.log("End clickaboutDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

};

function bluraboutNoDisplay() {

  console.log("Begin bluraboutNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* Begin Add Video/Audio */
  if (VideoAudioTextButtonOpacity == "0") {
    AboutText.style.visibility = "hidden";
  } else
  {
   AboutText.style.visibility = "visible";
  }
  /* End Add Video/Audio */

  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
  btnGT01.style.visibility = "hidden";

  console.log("End bluraboutNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

};
/* End About Functions */

/* Begin Prepaid Funeral Functions */
function clickPrepaidFuneralDisplay() {

  console.log("Begin clickPrepaidFuneralDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "visible";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";

  button02.style.color = "#000000";
  button02.style.background = "#90e738";
  button02.style.fontSize = "20px";
  button02.style.fontWeight ="bold";
  button02.style.textAlign = "center";
  button02.style.borderBlockColor = "#000000";
  button02.style.borderTop = "2px";
  button02.style.borderWidth = "1px";
  button02.style.borderStyle = "solid";
  button02.style.borderRadius = "13px";
  button02.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
  button02.animation = "anim-shadow .3s forwards";
  btnGT02.style.visibility = "hidden";

  /* Begin Add Video/Audio */
  VideoAudioTextButton.style.opacity = "1";
  VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "1";

  if(VideoAudioTextButton.style.opacity == "1") {
   idDescriptionVideoAudio.textContent = "  Prepaid Funeral Discription";
   idelementsVideoAudio.src = "Video/Jeremia1-5.mp4";

   button15.style.visibility = "visible";
   btnGT15.style.visibility = "visible";
  }
 
  /* End Add Video/Audio */

  console.log("End clickPrepaidFuneralDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
};

function blurPrepaidFuneralNoDisplay() {

  console.log("Begin blurPrepaidFuneralNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  
  /* ????? */
  /* Begin Add Video/Audio */
  /*
  if(VideoAudioTextButtonOpacity == 1) {
    PrepaidFuneral.style.visibility = "visible";
  }
  if(VideoAudioTextButtonOpacity == 0) {
    PrepaidFuneral.style.visibility = "hidden";
  }
  */

  /*
  if (VideoAudioTextButtonOpacity == 0) {
    PrepaidFuneral.style.visibility = "hidden";
    console.log("VideoAudioTextButtonOpacity = 0 " +  VideoAudioTextButtonOpacity);
  } else
  {
    PrepaidFuneral.style.visibility = "visible";
    console.log("VideoAudioTextButtonOpacity  not = 0 " +  VideoAudioTextButtonOpacity);
  }
  */

  /* End Add Video/Audio */
  

  AboutText.style.visibility = "hidden";
  /* PrepaidFuneral.style.visibility = "hidden"; */
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";

 
  console.log("End blurPrepaidFuneralNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
};
/* End Prepaid Funeral Functions */

/* Begin Entombment Functions */
function EntombmentDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "visible"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function EntombmentNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Entombment Functions */

/* Begin Documents Functions */
function DocumentsDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "visible";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function DocumentsNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Documents Functions  */

/* Begin FilingWill Functions */
function FilingWillDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "visible";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function FilingWillNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End FilingWill Functions */

/* Begin Bank Functions */
function BankDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "visible";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function BankNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Bank Functions */

/* Begin Notifications Functions */
function NotificationsDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "visible";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function NotificationsNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Notifications Functions */

/* Begin Income Functions */
function IncomeDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "visible";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function IncomeNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Income Functions */

/* Begin Expenses Functions */
function ExpensesDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "visible";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function ExpensesNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Expenses Functions */

/* Begin TaxPreparer Functions */
function TaxPreparerDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "visible";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function TaxPreparerNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End TaxPreparer Functions */

/* Begin EstateAttoney Functions */
function EstateAttoneyDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "visible";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function EstateAttoneyNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End EstateAttoney Functions */

/* Begin Probate Functions */
function ProbateDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "visible";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function ProbateNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Probate Functions */

/* Begin Property Functions */
function PropertyDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "visible";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function PropertyNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Property Functions */

/* Begin Security Functions */
function SecurityDisplay() {

  ResetButtonStyles();

  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "visible";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};

function SecurityNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
};
/* End Security Functions */

/* Begin VideoAudio Functions */
function clickVideoAudioDisplay() {

  console.log("Begin clickVideoAudioDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* PrepaidFuneral.style.visibility = "hidden"; */
  Entombment.style.visibility = "hidden"; 
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden"
  VideoAudio.style.visibility = "visible";
  Exit.style.visibility = "hidden";

  console.log("clickVideoAudioDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  if ( VideoAudioTextButtonOpacity == "0") {
    AboutText.style.visibility = "hidden";
    VideoAudio.style.visibility = "hidden";
  } else
  {
   button01.style.color = "#000000";
   button01.style.background = "#90e738";
   button01.style.fontSize = "20px";
   button01.style.fontWeight ="bold";
   button01.style.textAlign = "center";
   button01.style.borderBlockColor = "#000000";
   button01.style.borderTop = "2px";
   button01.style.borderWidth = "1px";
   button01.style.borderStyle = "solid";
   button01.style.borderRadius = "13px";
   button01.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
   button01.animation = "anim-shadow .3s forwards";
   btnGT01.style.visibility = "hidden";
   btnGT15.style.visibility = "hidden";
   AboutText.style.visibility = "hidden";
  }

  console.log("End clickVideoAudioDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
};

function blurVideoAudioNoDisplay() {
  console.log("Begin blurideoAudioNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  if (VideoAudioTextButtonOpacity == "0") {
    button01.style.color = "#000000";
    button01.style.background = "#D9CFA9";
    button01.style.fontSize = "20px";
    button01.style.fontWeight = "500";
    button01.style.textAlign = "center";
    button01.style.border = "none";
    button01.style.boxShadow = "none"
    btnGT01.style.visibility = "visible";
    AboutText.style.visibility = "hidden";
    button15.style.visibility = "hidden";

    AboutText.style.visibility = "hidden";
    PrepaidFuneral.style.visibility = "hidden";
    Entombment.style.visibility = "hidden";
    Documents.style.visibility = "hidden";
    FilingWill.style.visibility = "hidden";
    Bank.style.visibility = "hidden";
    Notifications.style.visibility = "hidden";
    Income.style.visibility = "hidden";
    Expenses.style.visibility = "hidden";
    TaxPreparer.style.visibility = "hidden";
    EstateAttoney.style.visibility = "hidden";
    TaxPreparer.style.visibility = "hidden";
    EstateAttoney.style.visibility = "hidden";
    Probate.style.visibility = "hidden";
    Property.style.visibility = "hidden";
    Security.style.visibility = "hidden";
    VideoAudio.style.visibility = "hidden";
    button15.style.visibility = "hidden";
    Exit.style.visibility = "hidden";
  } else
    /* button15.style.visibility = "hidden"; */
  {

    VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "0";

   console.log("End blurVideoAudioNoDisplay -  VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  }
  
};
/* End VideoAudio Functions */

/* Begin Exit Functions */
function clickExitDisplay() {
  
  window.close();

};

function blurExitNoDisplay() {
  AboutText.style.visibility = "hidden";
  PrepaidFuneral.style.visibility = "hidden";
  Entombment.style.visibility = "hidden";
  Documents.style.visibility = "hidden";
  FilingWill.style.visibility = "hidden";
  Bank.style.visibility = "hidden";
  Notifications.style.visibility = "hidden";
  Income.style.visibility = "hidden";
  Expenses.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  TaxPreparer.style.visibility = "hidden";
  EstateAttoney.style.visibility = "hidden";
  Probate.style.visibility = "hidden";
  Property.style.visibility = "hidden";
  Security.style.visibility = "hidden";
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "hidden";
  
};

function ResetButtonStyles() {
 
  /* Begin Video/Audio */
  button15.style.visibility = "hidden";
  /* End Video/Audio */

   VideoAudioTextButton.style.opacity = "0";
   VideoAudioTextButtonOpacity = "0";

  button01.style.color = "#000000";
  button01.style.background = "#D9CFA9";
  button01.style.fontSize = "20px";
  button01.style.fontWeight = "500";
  button01.style.textAlign = "center";
  button01.style.border = "none";
  button01.style.boxShadow = "none";
  btnGT01.style.visibility = "visible";
  AboutText.style.visibility = "hidden";

  button02.style.color = "#000000";
  button02.style.background = "#D9CFA9";
  button02.style.fontSize = "20px";
  button02.style.fontWeight = "500";
  button02.style.textAlign = "center";
  button02.style.border = "none";
  button02.style.boxShadow = "none";
  btnGT02.style.visibility = "visible";
  PrepaidFuneral.style.visibility = "hidden";
  
}
/* End Exit Functions */