// ===== META WHATSAPP CLOUD API CONFIGURATION =====
const META_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // Paste your token from Meta
const META_PHONE_ID = 'YOUR_PHONE_NUMBER_ID_HERE'; // Paste your Phone Number ID from Meta
const RECIPIENT_PHONE = '919480044015'; // Your WhatsApp number (country code + number, no + or spaces)

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

    // Send WhatsApp notification via Meta Cloud API
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

// ===== SEND WHATSAPP VIA META CLOUD API =====
function sendWhatsAppNotification(data) {
  try {
    const message = formatBookingMessage(data);

    // Meta WhatsApp Cloud API endpoint
    const url = `https://graph.facebook.com/v18.0/${META_PHONE_ID}/messages`;

    // Request payload
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: RECIPIENT_PHONE,
      type: 'text',
      text: {
        preview_url: false,
        body: message
      }
    };

    // Request options
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + META_ACCESS_TOKEN
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    // Send request
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    Logger.log('WhatsApp API Response Code: ' + responseCode);
    Logger.log('WhatsApp API Response: ' + responseText);

    if (responseCode === 200) {
      Logger.log('✅ WhatsApp notification sent successfully');
    } else {
      Logger.log('⚠️ WhatsApp notification failed: ' + responseText);
    }

  } catch (error) {
    Logger.log('❌ WhatsApp notification error: ' + error.toString());
    // Don't throw - we still want booking to be saved
  }
}

// ===== FORMAT MESSAGE =====
function formatBookingMessage(data) {
  // Clean text - Meta API doesn't support all markdown
  const message = `NEW BOOKING - CUREXHEALTH

PATIENT DETAILS
Name: ${data.patientName}
Age: ${data.patientAge} | Gender: ${data.gender}

CONTACT
Mobile: ${data.mobile}
WhatsApp: ${data.whatsapp}
Email: ${data.email || 'Not provided'}

SERVICE
${data.service}

LOCATION
${data.address}
${data.area} - ${data.pincode}

CONDITION
${data.condition}

APPOINTMENT
Date: ${data.preferredDate}
Time: ${data.preferredTime}

NOTES
${data.notes || 'None'}

BOOKING TIME
${data.timestamp}

Please confirm this booking!`;

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
  Logger.log('Test message sent! Check your WhatsApp and Apps Script logs.');
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
