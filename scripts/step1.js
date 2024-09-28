const selectJob = document.getElementById("job");
const amountRange = document.getElementById("amount_range");
const amountNumber = document.getElementById("amount_number");

selectJob.addEventListener("change", () => {
  const amount = document.getElementById("amount_range");
  const selectedVal = selectJob.value;

  switch (selectedVal) {
    case "SALARIE_PRIVE":
      amount.setAttribute("max", 400000);
      break;

    case "SALARIE_PUBLIC":
      amount.setAttribute("max", 600000);
      break;
    case "PROFESSION_LIBERALE":
      amount.setAttribute("max", 500000);
      break;
    case "COMMERCANT":
      amount.setAttribute("max", 200000);
      break;
    case "ARTISAN":
      amount.setAttribute("max", 300000);
      break;

    case "RETRAITE":
      amount.setAttribute("max", 250000);
      break;
    case "AUTRE":
      amount.setAttribute("max", 200000);
      break;
    default:
      break;
  }
});

amountRange.addEventListener("input", () => {
  amountNumber.value = amountRange.value;
});
