// "contentParagraph" id'li paragrafın içeriğini güncelle
function updateParagraphContent() {
    document.getElementById("contentParagraph").innerText = "Cosmos!";
}

// "content-div" sınıfına sahip div'in ilk içeriğini güncelle
function updateDivContent() {
    document.getElementsByClassName("content-div")[0].innerHTML = "Hey";
}

// ilk satırın ikinci hücresinin arka plan rengini rengini değiştir
function changeCellColor() {
    const cell = document.querySelector("table tbody tr:first-child td:nth-child(2)");
    if (cell) {
        cell.style.backgroundColor = "yellow"; // Hücrenin arka plan rengini sarı yap
    }
}

// Tabloya yeni bir satır ekle
function addRow() {
    const tableBody = document.querySelector("table tbody");
    if (tableBody) {
        // Mevcut satır sayısını al ve yeni satır numarasını belirle
        const rowCount = tableBody.rows.length;
        const newRowNumber = rowCount + 1;

        // Yeni bir satır oluştur ve tablo gövdesine ekle
        const newRow = tableBody.insertRow();

        // İlk hücreyi oluştur ve içeriğini ayarla
        const newCell1 = newRow.insertCell();
        const cellContent1 = document.createTextNode(`${newRowNumber}.1`);
        newCell1.appendChild(cellContent1);

        // İkinci hücreyi oluştur ve içeriğini ayarla
        const newCell2 = newRow.insertCell();
        const cellContent2 = document.createTextNode(`${newRowNumber}.2`);
        newCell2.appendChild(cellContent2);
    }
}

// Tablodan son satırı kaldır
function removeRow() {
    const tableBody = document.querySelector("table tbody");
    if (tableBody && tableBody.rows.length > 0) {
        tableBody.deleteRow(-1); 
    }
}