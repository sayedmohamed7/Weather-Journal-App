/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
// Personal API key.
const appID = "7d96c9a0cb5c230fbdaf0bc37486f0dd";

// Element selectors
const button = document.getElementById("generate");
const zipElem = document.getElementById("zip");

// Create a new date instance dynamically with JS
let d = new Date();
// Month names array
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let newDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

/* Asynchronous Code */
// Asynchronous function to fetch the data from the app endpoint.
const getData = async () => {
    const req = await fetch(`${baseURL}${zipElem.value}&appid=${appID}&units=metric`);
    try {
        const res = await req.json();
        console.log(res);
        return res;
    } catch (err) {
        console.log(`error: ${err}`);
    }
};

// Button event listener, execute when it is clicked.
button.addEventListener("click", () => {
    zipElem.value ?
        getData().then((data) => {
            postData("/", {
                temp: data.main.temp,
                date: newDate,
                feelings: document.getElementById("feelings").value
            });
            updateUI();
        })
        :
        // User must enter a value.
        alert('Please enter zip code!');
    ;
});

// Holding the data to POST.
const postData = async (url = "", data = {}) => {
    const req = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        // Convert the data to string.
        body: JSON.stringify(data)
    });

    try {
        return req;
    } catch (err) {
        console.log(`error: ${err}`);
    }
};

// Updates the UI dynamically
const updateUI = async () => {
    const req = await fetch("/all");

    try {
        const res = await req.json();
        console.log(res);
        // Just update their necessary values
        document.getElementById("temp").innerHTML = `🌡️ Temperature: ${res.temperature}°C`;
        document.getElementById("date").innerHTML = `📅 Date: ${res.date}`;
        document.getElementById("content").innerHTML = `❤️ I Feel: ${res.userInput}`;
    } catch (err) {
        console.log(`error: ${err}`);
    }
};


/*** END OF CODE ***/