// Web App URL generated by AppScript 
const api_url="https://script.googleusercontent.com/macros/echo?user_content_key=QUew00A3XSAr3vc-Z8XlQsYZCxvI76e-V4KEw-57QVOaIPmMd3bPPTn11ohkJ5mHLtEA21f6aRN9PaBuzHFHx40U1oOgbzzfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDuokQ1I_hlq5u12weOvG74bfJKjPjx2O9yCL8XSdDWw2oLdO_jUlH1ppx0qr8mDp2WKoq8vDxRTxKINIPule1iWOxYrDhed1Nz9Jw9Md8uu&lib=MjR8DwA1PwOjOiHdtpuMXawqTneynEAKY";
    
// basic API calling
fetch(api_url)
    .then(response => response.json())
    .then(data => console.log(data));
    
document.write("<p>API response in console</p>");
