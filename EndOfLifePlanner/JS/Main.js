
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

let button01Active = false;
let button02Active = false;
let button03Active = false;
let button04Active = false;
let button05Active = false;
let button06Active = false;
let button07Active = false;
let button08Active = false;
let button09Active = false;
let button10Active = false;
let button11Active = false;
let button12Active = false;
let button13Active = false;
let button14Active = false;

const button01 = document.getElementById("btn01");
const btnGT01 = document.getElementById("btnGT01");  

const button02 = document.getElementById("btn02");  
const btnGT02 = document.getElementById("btnGT02");  

const button03 = document.getElementById("btn03"); 
const btnGT03 = document.getElementById("btnGT03");

const button04 = document.getElementById("btn04"); 
const btnGT04 = document.getElementById("btnGT04");

const button05 = document.getElementById("btn05"); 
const btnGT05 = document.getElementById("btnGT05");

const button06 = document.getElementById("btn06"); 
const btnGT06 = document.getElementById("btnGT06");

const button07 = document.getElementById("btn07"); 
const btnGT07 = document.getElementById("btnGT07");

const button08 = document.getElementById("btn08");
const btnGT08 = document.getElementById("btnGT08");

const button09 = document.getElementById("btn09"); 
const btnGT09 = document.getElementById("btnGT09");

const button10 = document.getElementById("btn10");
const btnGT10 = document.getElementById("btnGT10");

const button11 = document.getElementById("btn11");
const btnGT11 = document.getElementById("btnGT11");

const button12 = document.getElementById("btn12");
const btnGT12 = document.getElementById("btnGT12");

const button13 = document.getElementById("btn13");
const btnGT13 = document.getElementById("btnGT13");

const button14 = document.getElementById("btn14");
const btnGT14 = document.getElementById("btnGT14");

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

button03.addEventListener("click", EntombmentDisplay); 
button03.addEventListener("blur", EntombmentNoDisplay);

button04.addEventListener("click", DocumentsDisplay); 
button04.addEventListener("blur", DocumentsNoDisplay);

button05.addEventListener("click", FilingWillDisplay); 
button05.addEventListener("blur", FilingWillNoDisplay);

button06.addEventListener("click", BankDisplay); 
button06.addEventListener("blur", BankNoDisplay);

button07.addEventListener("click", NotificationsDisplay); 
button07.addEventListener("blur", NotificationsNoDisplay);

button08.addEventListener("click", IncomeDisplay); 
button08.addEventListener("blur", IncomeNoDisplay);

button09.addEventListener("click", ExpensesDisplay); 
button09.addEventListener("blur", ExpensesNoDisplay);

button10.addEventListener("click", TaxPreparerDisplay); 
button10.addEventListener("blur", TaxPreparerNoDisplay);

button11.addEventListener("click", EstateAttoneyDisplay); 
button11.addEventListener("blur", EstateAttoneyNoDisplay);

button12.addEventListener("click", ProbateDisplay); 
button12.addEventListener("blur", ProbateNoDisplay);

button13.addEventListener("click", PropertyDisplay); 
button13.addEventListener("blur", PropertyNoDisplay);

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

  console.log(" ");
  console.log("Begin clickaboutDisplay");

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
  AboutText.style.visibility = "visible";
  

  /* Begin Add Video/Audio */
  VideoAudioTextButton.style.opacity = "1";
  VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "1";

  idDescriptionVideoAudio.textContent = "  About Discription";
  idelementsVideoAudio.src = "Video/Flag.mp4";

  button15.style.visibility = "visible";
  btnGT15.style.visibility = "visible";
  /* End Add Video/Audio */

  button01Active = false;
  button02Active = false;
  button03Active = false;
  button04Active = false;
  button05Active = false;
  button06Active = false;
  button07Active = false;
  button08Active = false;
  button09Active = false;
  button10Active = false;
  button11Active = false;
  button12Active = false;
  button13Active = false;
  button14Active = false;

  if(VideoAudioTextButtonOpacity == "1") {
    button01Active = true;
  };

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  console.log("button01Active              = " +  button01Active);

  console.log(" ");
  console.log("End clickaboutDisplay");
};

function bluraboutNoDisplay() {

  console.log(" ");
  console.log("Begin bluraboutNoDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* Begin Add Video/Audio */
  if (VideoAudioTextButtonOpacity == "0") {
    AboutText.style.visibility = "hidden";
  } else
  {
   AboutText.style.visibility = "visible";
  };
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

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  console.log(" ");
  console.log("End bluraboutNoDisplay");
};
/* End About Functions */

/* Begin Prepaid Funeral Functions */
function clickPrepaidFuneralDisplay() {

  console.log(" ");
  console.log("Begin clickPrepaidFuneralDisplay");

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
   /* End Add Video/Audio */
  };
 
  button01Active = false;
  button02Active = false;
  button03Active = false;
  button04Active = false;
  button05Active = false;
  button06Active = false;
  button07Active = false;
  button08Active = false;
  button09Active = false;
  button10Active = false;
  button11Active = false;
  button12Active = false;
  button13Active = false;
  button14Active = false;
  
  if(VideoAudioTextButtonOpacity == "1") {
    button02Active = true;
  };

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  console.log("button02Active              = " +  button02Active);

  console.log(" ");
  console.log("End clickPrepaidFuneralDisplay");

};

function blurPrepaidFuneralNoDisplay() {

  console.log(" ");
  console.log("Begin blurPrepaidFuneralNoDisplay");
  
  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* Begin Add Video/Audio */
  if (VideoAudioTextButtonOpacity == "0") {
    PrepaidFuneral.style.visibility = "hidden";
  } else
  {
    PrepaidFuneral.style.visibility = "visible";
  }
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

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  console.log(" ");
  console.log("End blurPrepaidFuneralNoDisplay");
};
/* End Prepaid Funeral Functions */

/* Begin Entombment Functions */
function EntombmentDisplay() {

  console.log(" ");
  console.log("Begin clickEntombmentDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

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

  button03.style.color = "#000000";
  button03.style.background = "#90e738";
  button03.style.fontSize = "20px";
  button03.style.fontWeight ="bold";
  button03.style.textAlign = "center";
  button03.style.borderBlockColor = "#000000";
  button03.style.borderTop = "2px";
  button03.style.borderWidth = "1px";
  button03.style.borderStyle = "solid";
  button03.style.borderRadius = "13px";
  button03.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
  button03.animation = "anim-shadow .3s forwards";
  btnGT03.style.visibility = "hidden";

  /* Begin Add Video/Audio */
  VideoAudioTextButton.style.opacity = "1";
  VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "1";

  if(VideoAudioTextButton.style.opacity == "1") {
   idDescriptionVideoAudio.textContent = "  Entombment Discription";
   idelementsVideoAudio.src = "Video/Flag.mp4";

   button15.style.visibility = "visible";
   btnGT15.style.visibility = "visible";
   /* End Add Video/Audio */
  };
 
  button01Active = false;
  button02Active = false;
  button03Active = false;
  button04Active = false;
  button05Active = false;
  button06Active = false;
  button07Active = false;
  button08Active = false;
  button09Active = false;
  button10Active = false;
  button11Active = false;
  button12Active = false;
  button13Active = false;
  button14Active = false;
  
  if(VideoAudioTextButtonOpacity == "1") {
    button03Active = true;
  };

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  console.log("button03Active              = " +  button03Active);

  console.log(" ");
  console.log("End clickEntombmentDisplay");

};

function EntombmentNoDisplay() {

  console.log(" ");
  console.log("Begin blurEntombmentNoDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* Begin Add Video/Audio */
  if (VideoAudioTextButtonOpacity == "0") {
    Entombment.style.visibility = "hidden";
  } else
  {
    Entombment.style.visibility = "visible";
  }
  /* End Add Video/Audio */

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

  console.log(" ");
  console.log("End blurEntombmentNoDisplay");
};
/* End Entombment Functions */

/* Begin Documents Functions */
function DocumentsDisplay() {

  console.log(" ");
  console.log("Begin cickDocumentsDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

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

  button04.style.color = "#000000";
  button04.style.background = "#90e738";
  button04.style.fontSize = "20px";
  button04.style.fontWeight ="bold";
  button04.style.textAlign = "center";
  button04.style.borderBlockColor = "#000000";
  button04.style.borderTop = "2px";
  button04.style.borderWidth = "1px";
  button04.style.borderStyle = "solid";
  button04.style.borderRadius = "13px";
  button04.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
  button04.animation = "anim-shadow .3s forwards";
  btnGT04.style.visibility = "hidden";4

  /* Begin Add Video/Audio */
  VideoAudioTextButton.style.opacity = "1";
  VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "1";

  if(VideoAudioTextButton.style.opacity == "1") {
   idDescriptionVideoAudio.textContent = "  Documents Discription";
   idelementsVideoAudio.src = "Video/Jeremia1-5.mp4";

   button15.style.visibility = "visible";
   btnGT15.style.visibility = "visible";
   /* End Add Video/Audio */
  };
 
  button01Active = false;
  button02Active = false;
  button03Active = false;
  button04Active = false;
  button05Active = false;
  button06Active = false;
  button07Active = false;
  button08Active = false;
  button09Active = false;
  button10Active = false;
  button11Active = false;
  button12Active = false;
  button13Active = false;
  button14Active = false;
  
  if(VideoAudioTextButtonOpacity == "1") {
    button04Active = true;
  };

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  console.log("button04Active              = " +  button04Active);

  console.log(" ");
  console.log("End cickDocumentsDisplay");

};

function DocumentsNoDisplay() {

  console.log(" ");
  console.log("Begin blurDocumentsNoDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  /* Begin Add Video/Audio */
  if (VideoAudioTextButtonOpacity == "0") {
    Documents.style.visibility = "hidden";
  } else
  {
    Documents.style.visibility = "visible";
  }
  /* End Add Video/Audio */

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

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);
  console.log("button04Active              = " +  button04Active);

  console.log(" ");
  console.log("End blurDocumentsNoDisplay");

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

  console.log(" ");
  console.log("Begin clickVideoAudioDisplay");

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
  Exit.style.visibility = "hidden";

  /* Begin keep active button Highlighted */
  /* End keep active button Highlighted */

  VideoAudio.style.visibility = "visible";
  button15.style.visibility = "hidden";
  btnGT15.style.visibility = "hidden";
  
  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  if (VideoAudioTextButtonOpacity == "0") {
    VideoAudio.style.visibility = "hidden";
    AboutText.style.visibility = "hidden";
    PrepaidFuneral.style.visibility = "hidden";
    Entombment.style.visibility = "hidden";
    Documents.style.visibility = "hidden";
    FilingWill.style.visibility = "hidden";
    BankText.style.visibility = "hidden";
    Notifications.style.visibility = "hidden";
    Income.style.visibility = "hidden";
    Expenses.style.visibility = "hidden";
    TaxPreparer.style.visibility = "hidden";
    EstateAttoney.tstyle.visibility = "hidden";
    Probate.style.visibility = "hidden";
    Property.style.visibility = "hidden";
    Security.style.visibility = "hidden";
  }

  if(button01Active) {
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
   AboutText.style.visibility = "hidden";
  };

  if(button02Active) {
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
    PrepaidFuneral.style.visibility = "hidden";
   };

   if(button03Active) {
    button03.style.color = "#000000";
    button03.style.background = "#90e738";
    button03.style.fontSize = "20px";
    button03.style.fontWeight ="bold";
    button03.style.textAlign = "center";
    button03.style.borderBlockColor = "#000000";
    button03.style.borderTop = "2px";
    button03.style.borderWidth = "1px";
    button03.style.borderStyle = "solid";
    button03.style.borderRadius = "13px";
    button03.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
    button03.animation = "anim-shadow .3s forwards";
    btnGT03.style.visibility = "hidden";
    Entombment.style.visibility = "hidden";
   };

   if(button04Active) {
    button04.style.color = "#000000";
    button04.style.background = "#90e738";
    button04.style.fontSize = "20px";
    button04.style.fontWeight ="bold";
    button04.style.textAlign = "center";
    button04.style.borderBlockColor = "#000000";
    button04.style.borderTop = "2px";
    button04.style.borderWidth = "1px";
    button04.style.borderStyle = "solid";
    button04.style.borderRadius = "13px";
    button04.style.boxShadow = "0px 0px 50px 20px rgba(58, 57, 110)";
    button04.animation = "anim-shadow .3s forwards";
    btnGT04.style.visibility = "hidden";
    Documents.style.visibility = "hidden";
   };

  console.log(" ");
  console.log("End clickVideoAudioDisplay");

};

function blurVideoAudioNoDisplay() {

  console.log(" ");
  console.log("Begin blurideoAudioNoDisplay");

  console.log(" ");
  console.log("VideoAudioTextButtonOpacity = " +  VideoAudioTextButtonOpacity);

  if (VideoAudioTextButtonOpacity == "0") {
    button15.style.visibility = "hidden";
    btnGT15.style.visibility = "hidden";

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
    btnGT15.style.visibility = "hidden";
    Exit.style.visibility = "hidden";
  } else
    /* button15.style.visibility = "hidden"; */
  {

    VideoAudioTextButtonOpacity =  VideoAudioTextButton.style.opacity = "0";
  };

  console.log(" ");
  console.log("End blurVideoAudioNoDisplay");
  
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
 
  console.log(" ");
  console.log("Begin ResetButtonStyle");
  /* Begin Video/Audio */
  button15.style.visibility = "hidden";
  btnGT15.style.visibility = "hidden";
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

  button03.style.color = "#000000";
  button03.style.background = "#D9CFA9";
  button03.style.fontSize = "20px";
  button03.style.fontWeight = "500";
  button03.style.textAlign = "center";
  button03.style.border = "none";
  button03.style.boxShadow = "none";
  btnGT03.style.visibility = "visible";
  Entombment.style.visibility = "hidden";

  button04.style.color = "#000000";
  button04.style.background = "#D9CFA9";
  button04.style.fontSize = "20px";
  button04.style.fontWeight = "500";
  button04.style.textAlign = "center";
  button04.style.border = "none";
  button04.style.boxShadow = "none";
  btnGT04.style.visibility = "visible";
  Documents.style.visibility = "hidden";

  button05.style.color = "#000000";
  button05.style.background = "#D9CFA9";
  button05.style.fontSize = "20px";
  button05.style.fontWeight = "500";
  button05.style.textAlign = "center";
  button05.style.border = "none";
  button05.style.boxShadow = "none";
  btnGT05.style.visibility = "visible";
  FilingWill.style.visibility = "hidden";

  button06.style.color = "#000000";
  button06.style.background = "#D9CFA9";
  button06.style.fontSize = "20px";
  button06.style.fontWeight = "500";
  button06.style.textAlign = "center";
  button06.style.border = "none";
  button06.style.boxShadow = "none";
  btnGT06.style.visibility = "visible";
  Bank.style.visibility = "hidden";

  button07.style.color = "#000000";
  button07.style.background = "#D9CFA9";
  button07.style.fontSize = "20px";
  button07.style.fontWeight = "500";
  button07.style.textAlign = "center";
  button07.style.border = "none";
  button07.style.boxShadow = "none";
  btnGT07.style.visibility = "visible";
  Notifications.style.visibility = "hidden";

  button08.style.color = "#000000";
  button08.style.background = "#D9CFA9";
  button08.style.fontSize = "20px";
  button08.style.fontWeight = "500";
  button08.style.textAlign = "center";
  button08.style.border = "none";
  button08.style.boxShadow = "none";
  btnGT08.style.visibility = "visible";
  Income.style.visibility = "hidden";

  button09.style.color = "#000000";
  button09.style.background = "#D9CFA9";
  button09.style.fontSize = "20px";
  button09.style.fontWeight = "500";
  button09.style.textAlign = "center";
  button09.style.border = "none";
  button09.style.boxShadow = "none";
  btnGT09.style.visibility = "visible";
  Expenses.style.visibility = "hidden";

  button10.style.color = "#000000";
  button10.style.background = "#D9CFA9";
  button10.style.fontSize = "20px";
  button10.style.fontWeight = "500";
  button10.style.textAlign = "center";
  button10.style.border = "none";
  button10.style.boxShadow = "none";
  btnGT10.style.visibility = "visible";
  TaxPreparer.style.visibility = "hidden";

  button11.style.color = "#000000";
  button11.style.background = "#D9CFA9";
  button11.style.fontSize = "20px";
  button11.style.fontWeight = "500";
  button11.style.textAlign = "center";
  button11.style.border = "none";
  button11.style.boxShadow = "none";
  btnGT11.style.visibility = "visible";
  EstateAttoney.style.visibility = "hidden";

  button12.style.color = "#000000";
  button12.style.background = "#D9CFA9";
  button12.style.fontSize = "20px";
  button12.style.fontWeight = "500";
  button12.style.textAlign = "center";
  button12.style.border = "none";
  button12.style.boxShadow = "none";
  btnGT12.style.visibility = "visible";
  Probate.style.visibility = "hidden";

  button13.style.color = "#000000";
  button13.style.background = "#D9CFA9";
  button13.style.fontSize = "20px";
  button13.style.fontWeight = "500";
  button13.style.textAlign = "center";
  button13.style.border = "none";
  button13.style.boxShadow = "none";
  btnGT13.style.visibility = "visible";
  Property.style.visibility = "hidden";

  button14.style.color = "#000000";
  button14.style.background = "#D9CFA9";
  button14.style.fontSize = "20px";
  button14.style.fontWeight = "500";
  button14.style.textAlign = "center";
  button14.style.border = "none";
  button14.style.boxShadow = "none";
  btnGT14.style.visibility = "visible";
  Security.style.visibility = "hidden";

  console.log(" ");
  console.log("End ResetButtonStyle");
  
};
/* End Exit Functions */