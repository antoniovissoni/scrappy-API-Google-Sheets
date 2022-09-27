// Web App URL generated by AppScript 
const api_url='https://script.googleusercontent.com/macros/echo?user_content_key=dNNmkDcx0rNPN_mL88zcOJl6LMXhkalenYKOuV5_b630tXQLPbWn6B3e-iy6J_8lVoTzA_X-7wRKeGHw9KKirP2MKl_fwHuhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJFrNCMLoCNpcEdmZdeAGp0nijdUr3xZb6GG7_5FpmXGCWiKBbVpMyf1Nx33rOdqFVZWaS8bRAgWMg4WUnPuq8jlvo2gfvfKSQ&lib=MjR8DwA1PwOjOiHdtpuMXawqTneynEAKY';
    
// basic API calling
fetch(api_url)
    
    // calls API
    .then ((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Network response error");
        }
    })

    // logs data in console
    .then(data => {
        console.log(data);
        displayData(data);
    })

    // error catching
    .catch((error) => {
        console.error('Fetch error: ', error);
    })

// main function
function displayData(data) {

    // iterates throught array
    for (i=0; i<data.datastream.length; i++) {
        let display = (
            data.datastream[i].Position + " " +
            data.datastream[i].Name + " " +
            data.datastream[i].Country + " " +
            data.datastream[i].Population + " " +
            data.datastream[i].Area + " " +
            data.datastream[i].Density + " " +
            data.datastream[i].Type + "<br>"
            )
        document.write(display);
        console.log("Added: ", display);
    }  
}