document.addEventListener('DOMContentLoaded', function () {
    const scanButton = document.getElementById('scanButton');
    const resultDiv = document.getElementById('result');

    let scannedData = [];

    scanButton.addEventListener('click', function () {
        // เพิ่มโค้ดสำหรับการเข้าถึงกล้องและสแกนบาร์โค้ดที่นี่
        // ตัวอย่าง: ใช้ getUserMedia API เพื่อเข้าถึงกล้อง
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // เพิ่มโค้ดสำหรับการสแกนบาร์โค้ด
                // ตัวอย่าง: ใช้ BarcodeScanner.js หรือ Quagga.js
                const scannedValue = 'ข้อมูลบาร์โค้ดที่สแกนได้';

                // เพิ่มข้อมูลลงในแถวล่าง
                scannedData.push(scannedValue);
                updateResult();
            })
            .catch(function (error) {
                console.error('ไม่สามารถเข้าถึงกล้องได้:', error);
                resultDiv.innerHTML = 'ไม่สามารถเข้าถึงกล้องได้';
            });
    });

    function updateResult() {
        resultDiv.innerHTML = '<strong>ผลลัพธ์:</strong><br>' + scannedData.join('<br>');
    }
});
