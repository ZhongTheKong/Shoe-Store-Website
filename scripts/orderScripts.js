document.addEventListener("click", newBalanceTotalFunction);
function newBalanceTotalFunction () {
	var inputField=document.getElementById("quantity1");
	var quantity1Value=inputField.value;
	var price1Value=79.99;
	newBalanceTotalFunction=quantity1Value*price1Value;
	newBalanceTotalFunctionActual=newBalanceTotalFunction.toFixed(2)
	newBalanceTotal.innerHTML="$"+newBalanceTotalFunctionActual;
}

document.addEventListener("click", freshFoamSportTotalFunction);
function freshFoamSportTotalFunction () {
	var inputField=document.getElementById("quantity2");
	var quantity2Value=inputField.value;
	var price2Value=79.99;
	freshFoamSportTotalFunction=quantity2Value*price2Value;
	freshFoamSportTotalFunctionActual=freshFoamSportTotalFunction.toFixed(2)
	freshFoamSportTotal.innerHTML="$"+freshFoamSportTotalFunctionActual;
}

document.addEventListener("click", loSuedeTotalFunction);
function loSuedeTotalFunction () {
	var inputField=document.getElementById("quantity3");
	var quantity3Value=inputField.value;
	var price3Value=64.99;
	loSuedeTotalFunction=quantity3Value*price3Value;
	loSuedeTotalFunctionActual=loSuedeTotalFunction.toFixed(2)
	loSuedeTotal.innerHTML="$"+loSuedeTotalFunctionActual;
}

document.addEventListener("click", edsulOxfordTotalFunction);
function edsulOxfordTotalFunction () {
	var inputField=document.getElementById("quantity4");
	var quantity4Value=inputField.value;
	var price4Value=59.99;
	edsulOxfordTotalFunction=quantity4Value*price4Value;
	edsulOxfordTotalFunctionActual=edsulOxfordTotalFunction.toFixed(2)
	edsulOxfordTotal.innerHTML="$"+edsulOxfordTotalFunctionActual;
}

document.addEventListener("click", workOxfordTotalFunction);
function workOxfordTotalFunction () {
	var inputField=document.getElementById("quantity5");
	var quantity5Value=inputField.value;
	var price5Value=84.99;
	workOxfordTotalFunction=quantity5Value*price5Value;
	workOxfordTotalFunctionActual=workOxfordTotalFunction.toFixed(2)
	workOxfordTotal.innerHTML="$"+workOxfordTotalFunctionActual;
}

document.addEventListener("click", northfieldOxfordTotalFunction);
function northfieldOxfordTotalFunction () {
	var inputField=document.getElementById("quantity6");
	var quantity6Value=inputField.value;
	var price6Value=89.99;
	northfieldOxfordTotalFunction=quantity6Value*price6Value;
	northfieldOxfordTotalFunctionActual=northfieldOxfordTotalFunction.toFixed(2)
	northfieldOxfordTotal.innerHTML="$"+northfieldOxfordTotalFunctionActual;
}

document.addEventListener("click", linedClogTotalFunction);
function linedClogTotalFunction () {
	var inputField=document.getElementById("quantity7");
	var quantity7Value=inputField.value;
	var price7Value=59.99;
	linedClogTotalFunction=quantity7Value*price7Value;
	linedClogTotalFunctionActual=linedClogTotalFunction.toFixed(2)
	linedClogTotal.innerHTML="$"+linedClogTotalFunctionActual;
}

document.addEventListener("click", shearlingClogTotalFunction);
function shearlingClogTotalFunction () {
	var inputField=document.getElementById("quantity8");
	var quantity8Value=inputField.value;
	var price8Value=169.99;
	shearlingClogTotalFunction=quantity8Value*price8Value;
	shearlingClogTotalFunctionActual=shearlingClogTotalFunction.toFixed(2)
	shearlingClogTotal.innerHTML="$"+shearlingClogTotalFunctionActual;
}

document.addEventListener("click", donationFunction);
function donationFunction () {
	if (document.getElementById("donationInput1").checked) {
		donationFunction=0.00
		donation.innerHTML="$"+donationFunction.toFixed(2)
	}
	if (document.getElementById("donationInput2").checked) {
		donationFunction=1.00
		donation.innerHTML="$"+donationFunction.toFixed(2)
	}
	if (document.getElementById("donationInput3").checked) {
		donationFunction=5.00
		donation.innerHTML="$"+donationFunction.toFixed(2)
	}
	if (document.getElementById("donationInput4").checked) {
		donationFunction=10.00
		donation.innerHTML="$"+donationFunction.toFixed(2)
	}
}

document.addEventListener("click", shoeCostSubtotalFunction);
function shoeCostSubtotalFunction () {
	shoeCostSubtotalFunction=newBalanceTotalFunction+freshFoamSportTotalFunction+loSuedeTotalFunction+edsulOxfordTotalFunction+workOxfordTotalFunction+northfieldOxfordTotalFunction+linedClogTotalFunction+shearlingClogTotalFunction;
	shoeCostSubtotalFunctionActual=shoeCostSubtotalFunction.toFixed(2)
	shoeCostSubtotal.innerHTML="$"+shoeCostSubtotalFunctionActual;
}

document.addEventListener("click", shoeCostTaxFunction);
function shoeCostTaxFunction () {
	shoeCostTaxFunction=shoeCostSubtotalFunction*0.08
	shoeCostTaxFunctionActual=shoeCostTaxFunction.toFixed(2)
	shoeCostTax.innerHTML="$"+shoeCostTaxFunctionActual;
}

document.addEventListener("click", shoeCostTotalFunction);
function shoeCostTotalFunction () {
	shoeCostTotalFunction=shoeCostSubtotalFunction+shoeCostTaxFunction+donationFunction
	shoeCostTotalFunctionActual=shoeCostTotalFunction.toFixed(2)
	shoeCostTotal.innerHTML="$"+shoeCostTotalFunctionActual;
}
