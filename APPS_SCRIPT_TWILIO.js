// ===== TWILIO WHATSAPP CONFIGURATION =====
const TWILIO_ACCOUNT_SID = 'YOUR_ACCOUNT_SID_HERE'; // From Twilio Console
const TWILIO_AUTH_TOKEN = 'YOUR_AUTH_TOKEN_HERE';   // From Twilio Console
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Twilio sandbox number
const YOUR_WHATSAPP_NUMBER = 'whatsapp:+919480044015'; // Your WhatsApp (with country code)

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

    // Send WhatsApp notification via Twilio
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

// ===== SEND WHATSAPP VIA TWILIO =====
function sendWhatsAppNotification(data) {
  try {
    const message = formatBookingMessage(data);

    // Twilio API endpoint
    const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;

    // Request payload
    const payload = {
      'From': TWILIO_WHATSAPP_NUMBER,
      'To': YOUR_WHATSAPP_NUMBER,
      'Body': message
    };

    // Authorization header (Basic Auth)
    const authHeader = 'Basic ' + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN);

    // Request options
    const options = {
      method: 'post',
      payload: payload,
      headers: {
        'Authorization': authHeader
      },
      muteHttpExceptions: true
    };

    // Send request
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    Logger.log('Twilio Response Code: ' + responseCode);
    Logger.log('Twilio Response: ' + responseText);

    if (responseCode === 200 || responseCode === 201) {
      Logger.log('✅ WhatsApp notification sent successfully via Twilio');
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
  const message = `🏥 *NEW BOOKING - CUREXHEALTH*

👤 *Patient Details*
Name: ${data.patientName}
Age: ${data.patientAge} | Gender: ${data.gender}

📞 *Contact*
Mobile: ${data.mobile}
WhatsApp: ${data.whatsapp}
Email: ${data.email || 'Not provided'}

💊 *Service*
${data.service}

🏠 *Location*
${data.address}
${data.area} - ${data.pincode}

📋 *Condition*
${data.condition}

📅 *Appointment*
Date: ${data.preferredDate}
Time: ${data.preferredTime}

📝 *Notes*
${data.notes || 'None'}

⏰ *Booking Time*
${data.timestamp}

✅ Please confirm this booking!`;

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
  Logger.log('Test message sent! Check your WhatsApp and execution log.');
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
