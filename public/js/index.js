"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
}


// async function getRandomImage() {
//     const client_id = "YOUR_KEY_HERE";
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json();
//         const receivedPhotoUrl = returnedData.urls.regular;

//         const imgDiv = document.querySelector(".background-img");
//         imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
//         console.log(returnedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

async function getRandomImage() {
    const endpoint = "http://localhost:7345/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;
 
        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}



getRandomImage();
const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard"
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },
    {
        quote: "Do not worry, instead, do what springs immediately to hand",
        author: "Cooper Dozier"
    },
    {
        quote: "I have but three things to teach: simplicity, patience, compassion",
        author: "Lao Tzu"
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 6000)
}

setTimeout(loopThroughQuotes, 6000);