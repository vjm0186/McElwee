
/*  Begin Revision Comments */
        
/*  End Revision Comments */

  
/* Begin global varables */

const button01 = document.getElementById("btn01");   
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


/* Begin About Functions */
function aboutDisplay() {
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
};

function aboutNoDisplay() {
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
};
/* End About Functions */

/* Begin Prepaid Funeral Functions */
function PrepaidFuneralDisplay() {
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
};
/* End Prepaid Funeral Functions */

/* Begin Entombment Functions */
function EntombmentDisplay() {
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
};
/* End Entombment Functions */

/* Begin Documents Functions */
function DocumentsDisplay() {
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
};
/* End Documents Functions  */

/* Begin FilingWill Functions */
function FilingWillDisplay() {
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
};
/* End FilingWill Functions */

/* Begin Bank Functions */
function BankDisplay() {
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
};
/* End Bank Functions */

/* Begin Notifications Functions */
function NotificationsDisplay() {
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
};
/* End Notifications Functions */

/* Begin Income Functions */
function IncomeDisplay() {
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
};
/* End Income Functions */

/* Begin Expenses Functions */
function ExpensesDisplay() {
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
};
/* End Expenses Functions */

/* Begin TaxPreparer Functions */
function TaxPreparerDisplay() {
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
};
/* End TaxPreparer Functions */

/* Begin EstateAttoney Functions */
function EstateAttoneyDisplay() {
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
};
/* End EstateAttoney Functions */

/* Begin Probate Functions */
function ProbateDisplay() {
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
};
/* End Probate Functions */

/* Begin Probate Functions */
function PropertyDisplay() {
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
};
/* End Probate Functions */