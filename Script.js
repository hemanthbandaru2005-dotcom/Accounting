function addAsset(){

  let assetName =
    document.getElementById("assetName").value;

  let assetType =
    document.getElementById("assetType").value;

  let purchaseValue =
    document.getElementById("purchaseValue").value;

  let purchaseDate =
    document.getElementById("purchaseDate").value;

  let currentValue =
    document.getElementById("currentValue").value;

  let currentDate =
    document.getElementById("currentDate").value;

  let description =
    document.getElementById("description").value;

  if(assetName == ""){
    alert("Enter Asset Name");
    return;
  }

  let table =
    document.getElementById("assetTable");

  let row = table.insertRow();

  row.innerHTML = `
    <td>${assetName}</td>
    <td>${assetType}</td>
    <td>${purchaseValue}</td>
    <td>${purchaseDate}</td>
    <td>${currentValue}</td>
    <td>${currentDate}</td>
    <td>${description}</td>
  `;

  // Clear Fields
  document.getElementById("assetName").value = "";
  document.getElementById("assetType").value = "";
  document.getElementById("purchaseValue").value = "";
  document.getElementById("purchaseDate").value = "";
  document.getElementById("currentValue").value = "";
  document.getElementById("currentDate").value = "";
  document.getElementById("description").value = "";
}
