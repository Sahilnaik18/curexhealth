// ===== CALLMEBOT WHATSAPP API CONFIGURATION =====
const WHATSAPP_PHONE = '919480044015'; // Your phone number (country code + number, no + or spaces)
const WHATSAPP_API_KEY = 'YOUR_API_KEY_HERE'; // Get from CallMeBot (send message to get this)

// ===== MAIN FUNCTION =====
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Prepare row data for Google Sheet
    const rowData = [
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.patientName || '',
      data.mobile || '',
      data.whatsapp || '',
      data.email || '',
      data.service || '',
      data.patientAge || '',
      data.gender || '',
      data.condition || '',
      data.address || '',
      data.area || '',
      data.pincode || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.notes || '',
      data.status || 'New'
    ];

    // Save to Google Sheet
    sheet.appendRow(rowData);

    // Send WhatsApp notification via CallMeBot
    sendWhatsAppNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== SEND WHATSAPP VIA CALLMEBOT =====
function sendWhatsAppNotification(data) {
  try {
    const message = formatBookingMessage(data);
    const encodedMessage = encodeURIComponent(message);

    // CallMeBot API URL
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${encodedMessage}&apikey=${WHATSAPP_API_KEY}`;

    // Send request
    const response = UrlFetchApp.fetch(apiUrl);

    Logger.log('WhatsApp notification sent: ' + response.getContentText());

  } catch (error) {
    Logger.log('WhatsApp notification failed: ' + error.toString());
    // Don't throw - we still want booking to be saved
  }
}

// ===== FORMAT MESSAGE =====
function formatBookingMessage(data) {
  const message = `🏥 *NEW BOOKING*

👤 *Patient:* ${data.patientName}
📱 *Mobile:* ${data.mobile}
📧 *Email:* ${data.email || 'Not provided'}

💊 *Service:* ${data.service}
👤 *Age:* ${data.patientAge} | ${data.gender}

🏠 *Address:*
${data.address}
${data.area} - ${data.pincode}

📋 *Condition:* ${data.condition}

📅 *Date:* ${data.preferredDate}
🕐 *Time:* ${data.preferredTime}

📝 *Notes:* ${data.notes || 'None'}

⏰ *Booked at:* ${data.timestamp}`;

  return message.trim();
}

// ===== TEST FUNCTIONS =====
function testWhatsApp() {
  const testData = {
    timestamp: new Date().toLocaleString('en-IN'),
    patientName: 'Test Patient',
    mobile: '9876543210',
    whatsapp: '9876543210',
    email: 'test@example.com',
    service: 'Home Physiotherapy',
    patientAge: '45',
    gender: 'Male',
    condition: 'Back pain for 2 weeks',
    address: '123 Test Street, Building A',
    area: 'Andheri West',
    pincode: '400058',
    preferredDate: '2025-01-25',
    preferredTime: 'Morning (8 AM - 12 PM)',
    notes: 'Please call before coming'
  };

  sendWhatsAppNotification(testData);
  Logger.log('Test WhatsApp message sent! Check your phone.');
}

function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('en-IN'),
        patientName: 'Test Patient',
        mobile: '9876543210',
        whatsapp: '9876543210',
        email: 'test@example.com',
        service: 'Home Physiotherapy',
        patientAge: '45',
        gender: 'Male',
        condition: 'Back pain',
        address: '123 Test Street',
        area: 'Andheri West',
        pincode: '400058',
        preferredDate: '2025-01-25',
        preferredTime: 'Morning (8 AM - 12 PM)',
        notes: 'Test booking',
        status: 'New'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
