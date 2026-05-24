let totalPurchase = 0;
let totalCurrent = 0;

function addAsset(){

  const assetName =
    document.getElementById("assetName").value;

  const assetType =
    document.getElementById("assetType").value;

  const purchaseValue =
    Number(document.getElementById("purchaseValue").value);

  const purchaseDate =
    document.getElementById("purchaseDate").value;

  const currentValue =
    Number(document.getElementById("currentValue").value);

  const currentDate =
    document.getElementById("currentDate").value;

  const description =
    document.getElementById("description").value;

  // Validation
  if(
    assetName === "" ||
    purchaseValue === 0 ||
    currentValue === 0
  ){
    alert("Please fill all required fields");
    return;
  }

  // Insert Row
  const table =
    document.getElementById("assetTable");

  const row = table.insertRow();

  row.innerHTML = `
    <td>${assetName}</td>
    <td>${assetType}</td>
    <td>${purchaseValue}</td>
    <td>${purchaseDate}</td>
    <td>${currentValue}</td>
    <td>${currentDate}</td>
    <td>${description}</td>
  `;

  // Totals
  totalPurchase += purchaseValue;
  totalCurrent += currentValue;

  document.getElementById("purchaseTotal").innerText =
    totalPurchase;

  document.getElementById("currentTotal").innerText =
    totalCurrent;

  document.getElementById("depreciation").innerText =
    totalPurchase - totalCurrent;

  clearFields();
}

function clearFields(){

  document.getElementById("assetName").value = "";
  document.getElementById("assetType").value = "";
  document.getElementById("purchaseValue").value = "";
  document.getElementById("purchaseDate").value = "";
  document.getElementById("currentValue").value = "";
  document.getElementById("currentDate").value = "";
  document.getElementById("description").value = "";
}
