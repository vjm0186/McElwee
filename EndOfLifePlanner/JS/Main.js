
/*  Begin Revision Comments */
        
/*  End Revision Comments */

/* Begin global varables */
/* const ExitConfirm = false; */

/* Begin set Opacity value to "0" for the "Video/Audio is Available" button */
const AboutTextButton = document.getElementById('btn15');
let AboutTextButtonOpacity = "0";
AboutTextButtonOpacity = AboutTextButton.style.opacity = "0";

/* Begin Test AboutTextButtonOpacity for the "Video/Audio is Available" button */
/*
if (AboutTextButtonOpacity == "0") {
  console.log("1 AboutTextButtonOpacity No Video/Audio");
} else
{
 console.log("2 AboutTextButtonOpacity Yes Video/Audio");
}
*/
/* End Test AboutTextButtonOpacity for the "Video/Audio is Available" button */


const button01 = document.getElementById("btn01");  
const btnGT01 = document.getElementById("btnGT01");   
const button02 = document.getElementById("btn02");  
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
button01.addEventListener("click", aboutDisplay); 
button01.addEventListener("blur", aboutNoDisplay); 

/* button02.addEventListener("focus", PrepaidFuneralDisplay); */
button02.addEventListener("click", PrepaidFuneralDisplay); 
button02.addEventListener("blur", PrepaidFuneralNoDisplay); 

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
button15.addEventListener("click", VideoAudioDisplay); 
button15.addEventListener("blur", VideoAudioNoDisplay);
/* button15.addEventListener("blur", VideoAudioNoDisplay); */

button16.addEventListener("focus", ExitDisplay);
button16.addEventListener("click", ExitDisplay); 
button16.addEventListener("blur", ExitNoDisplay);

/* Begin About Functions */
function aboutDisplay() {
  console.log("Begin fun aboutDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);

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

  AboutTextButton.style.opacity = "1";
  AboutTextButtonOpacity = AboutTextButton.style.opacity = "1";

  button15.style.visibility = "visible";
  btnGT15.style.visibility = "visible";

  console.log("End fun aboutDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);

};

function aboutNoDisplay() {

  console.log("Begin aboutNoDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);

  if (AboutTextButtonOpacity == "0") {
    AboutText.style.visibility = "hidden";
  } else
  {
   AboutText.style.visibility = "visible";
  }

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

  /*
  AboutTextButtonOpacity= AboutTextButton.style.opacity = "0";
  
  if (AboutTextButtonOpacity == "0") {
    console.log("1 AboutTextButtonOpacity No Video/Audio");
  } else
  {
   console.log("2 AboutTextButtonOpacity Yes Video/Audio");
  }
 */
  console.log("End aboutNoDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);

};
/* End About Functions */

/* Begin Prepaid Funeral Functions */
function PrepaidFuneralDisplay() {

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
};

function PrepaidFuneralNoDisplay() {

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
function VideoAudioDisplay() {

  console.log("Begin function VideoAudioDisplay");

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
  Security.style.visibility = "hidden"
  VideoAudio.style.visibility = "visible";
  Exit.style.visibility = "hidden";

  console.log("fun VideoAudioDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);
  if (AboutTextButtonOpacity == "0") {
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


  /* alert("End the fun VideoAudioDisplay"); */
  console.log("End function VideoAudioDisplay");
};

function VideoAudioNoDisplay() {
  console.log("Begin fun VideoAudioNoDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);


  if (AboutTextButtonOpacity == "0") {
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
    button15.style.visibility = "hidden";
  {

   console.log("Begin fun VideoAudioNoDisplay - AboutTextButtonOpacity = " + AboutTextButtonOpacity);
  }
  
};
/* End VideoAudio Functions */

/* Begin Exit Functions */
function ExitDisplay() {

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
  Security.style.visibility = "hidden"
  VideoAudio.style.visibility = "hidden";
  Exit.style.visibility = "visible";

  window.close();
};

function ExitNoDisplay() {
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
  console.log("Begin fun ResetButtonStyles - AboutTextButtonOpacity = " + AboutTextButtonOpacity);


  AboutTextButton.style.opacity = "0";
  AboutTextButtonOpacity = "0";

  button01.style.color = "#000000";
  button01.style.background = "#D9CFA9";
  button01.style.fontSize = "20px";
  button01.style.fontWeight = "500";
  button01.style.textAlign = "center";
  button01.style.border = "none";
  button01.style.boxShadow = "none";
  btnGT01.style.visibility = "visible";
  AboutText.style.visibility = "hidden";
  button15.style.visibility = "hidden";

  console.log("End fun ResetButtonStyles - AboutTextButtonOpacity = " + AboutTextButtonOpacity);
}
/* End Exit Functions */