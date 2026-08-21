/**
 * Google Sheets API Service
 * Sends booking data directly to Google Sheets
 */

// Your Google Apps Script Web App URL (you'll add this after setup)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';

/**
 * Check if Google Sheets is configured
 */
export function isSheetsConfigured() {
  return GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.length > 0;
}

/**
 * Send booking data to Google Sheets
 * @param {Object} formData - Booking form data
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendToGoogleSheets(formData) {
  if (!isSheetsConfigured()) {
    console.error('Google Sheets integration not configured');
    return {
      success: false,
      error: 'Google Sheets integration not configured'
    };
  }

  try {
    // Prepare data for Google Sheets
    const bookingData = {
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      patientName: formData.patientName || '',
      mobile: formData.mobile || '',
      whatsapp: formData.sameAsPhone ? formData.mobile : (formData.whatsapp || ''),
      email: formData.email || '',
      service: formData.service || '',
      patientAge: formData.patientAge || '',
      gender: formData.gender || '',
      condition: formData.condition || '',
      address: formData.address || '',
      area: formData.area || '',
      pincode: formData.pincode || '',
      preferredDate: formData.preferredDate || '',
      preferredTime: formData.preferredTime || '',
      notes: formData.notes || '',
      status: 'New' // Default status
    };

    // Send data to Google Sheets via Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error is thrown
    return { success: true };

  } catch (error) {
    console.error('Failed to save booking data');
    return {
      success: false,
      error: 'Failed to save booking data'
    };
  }
}

/**
 * Format booking data for display/email
 */
export function formatBookingData(formData) {
  return `
New Booking Request
==================

Patient Information:
- Name: ${formData.patientName}
- Mobile: ${formData.mobile}
- WhatsApp: ${formData.sameAsPhone ? formData.mobile : (formData.whatsapp || 'N/A')}
- Email: ${formData.email || 'N/A'}
- Age: ${formData.patientAge || 'N/A'}
- Gender: ${formData.gender || 'N/A'}

Service Details:
- Service: ${formData.service}
- Condition: ${formData.condition || 'N/A'}

Appointment:
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}

Location:
- Address: ${formData.address}
- Area: ${formData.area}
- Pincode: ${formData.pincode}

Additional Notes:
${formData.notes || 'None'}

Booking Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`;
}
