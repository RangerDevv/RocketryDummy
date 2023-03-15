let Btn_1 = document.getElementById("Btn_1")
let Btn_2 = document.getElementById("Btn_2")
let Btn_3 = document.getElementById("Btn_3")
let Btn_4 = document.getElementById("Btn_4")
let Btn_5 = document.getElementById("Btn_5")
let Btn_6 = document.getElementById("Btn_6")
let Prev = document.getElementById("Prev")
let Heading = document.getElementById("Heading")
let Next = document.getElementById("Next")
let Desc = document.getElementById("Desc")
let Image = document.getElementById("Planet_Img")
let Distance = document.getElementById("distance")
let Price = document.getElementById("price")


let array = [
    {
        "Title": "Sightseeing",
        "Description": "Free floating in space is an incredible experience that is unlike anything else you can do. Imagine weightlessly soaring through the vast expanse of space, taking in the stunning views of the stars, planets, and galaxies around you. With no gravity to hold you down, you'll be able to move and explore in ways that are impossible on Earth. Space tourists will have the opportunity to experience the thrill and excitement of free floating in space, and to see the universe in a whole new way. Book your trip to experience the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": 500000
    },
    {
        "Title": "Earth",
        "Description": "Come experience the wonder and beauty of our home planet, Earth! As the only world with liquid water on its surface, Earth offers a unique environment that has allowed life to flourish for billions of years. With diverse habitats like deserts, forests, and tundras, there's always something new to discover. And don't forget about our trusty companion, the Moon! With its stable climate and fascinating geological features, the Moon adds even more excitement to your Earthly travels.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": 1000000
    },
    {
        "Title": "Moon",
        "Description": "The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system. It is a rocky, terrestrial body that has a heavily cratered surface and is covered in a layer of fine, powdery soil called regolith. It has no atmosphere and experiences extreme temperature fluctuations, with temperatures on its surface ranging from boiling hot to freezing cold. Despite these challenges, the Moon is an exciting destination for space tourists who want to experience the thrill of being on another world. Book your trip to the Moon today and take part in the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": 5500000
    },
    {
        "Title": "Mars",
        "Description": "Ready for a truly out-of-this-world adventure? Look no further than Mars! This dry, rocky planet may be cold, but it's full of mysteries waiting to be uncovered. Named for the Roman god of war, Mars is a fierce and captivating planet that's just begging to be explored. With two unique and potato-shaped moons, Phobos and Deimos, and a history of robotic exploration, Mars is the ultimate destination for space enthusiasts looking for a challenge.",
        "src":"../Image/Planet4-removebg-preview.png",
        "color": "#a03f03",
        "price": 8230780
    },
    {
        "Title": "Jupiter",
        "Description": "Do you crave the thrill of the unknown? Look no further than Jupiter, the largest planet in our solar system! Surrounded by dozens of moons and several faint rings, Jupiter is a world full of surprises. While its extreme temperatures, pressures, and materials may make it unsuitable for life, they also make it an ideal destination for those seeking the ultimate adventure. With its massive size and vibrant atmosphere, Jupiter is truly a sight to behold.",
        "src":"./Image/Planet1-removebg-preview.png",
        "color": "#452e1a",
        "price":14030450
    },
    {
        "Title": "Saturn",
        "Description": "Ready to take your space travel to the next level? Look no further than Saturn, the second-largest planet in our solar system! With its stunning ring system and dozens of moons, Saturn offers a unique and unforgettable travel experience. While its extreme temperatures, pressures, and materials may make it unsuitable for life, they also make it an ideal destination for those seeking the ultimate adventure. Whether you're looking to explore its vast system of moons or gaze in wonder at its magnificent rings, Saturn is the perfect destination for the ultimate space enthusiast.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":26780000
    },
]

let Plans = [
    // "",
    // "","The premium plan would offer a truly luxurious space travel experience, with a larger and more advanced rocket, extended stays in orbit, and access to exclusive facilities and services. This plan might include private cabins, gourmet meals, and personalized training and support from experienced astronauts. The price for this plan could be upwards of $500,000.",
    {
        "Title": "Basic",
        "Description": "This plan would include a trip on a small, reliable rocket with a few amenities such as food and water. The rocket would travel to low Earth orbit and provide passengers with a few minutes of weightlessness and stunning views of Earth. The price for this plan might be around $100,000. Maximum of 2 people per trip. Perfect for couples or friends.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":100000
    },
    {
        "Title": "Standard",
        "Description": "The standard plan would offer a more extensive trip on a larger and more advanced rocket. This plan might include multiple days in orbit, with opportunities for spacewalks and other activities. It would also include more comfortable accommodations and a wider range of food options. The price for this plan might be around $105,000. Maximum of 6 people per trip. Perfect for families or groups of friends.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":105000
    },
    {
        "Title": "Premium",
        "Description": "This plan will have access to our top-of-the-line spacecraft, equipped with the latest technology and comfortable amenities. You will also have access to our exclusive training program, where you will learn how to navigate and operate your spacecraft, as well as participate in simulated space missions to prepare you for the real thing. Additionally, you will be able to bring along a guest of your choice on your journey, and you will both receive VIP treatment at all of our space stations and landing sites. The price for this plan might be around $805,000. Maximum of 8 people per trip. Perfect for huge families or huge groups of friends.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": 805000
    },
]

let Pg = 1
let Curr_Plnt = array[0]
let Curr_Pln = Plans[0]
// let TotalPrice = Curr_Pln.price + Curr_Plnt.price


function Btn1Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[0]
        Desc.innerText = array[0].Description
        Distance.innerText = "256,600 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
    if (Pg == 2) {
        Curr_Pln = Plans[0]
        Desc.innerText = Plans[0].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}
function Btn2Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[1]
        Desc.innerText = array[1].Description
        // Distance = 10000
        Distance.innerText = "267,568 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber

    }
    if (Pg == 2) {
        Curr_Pln = Plans[1]
        Desc.innerText = Plans[1].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}function Btn3Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[2]
        Desc.innerText = array[2].Description
        Distance.innerText = "384,400 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
    if (Pg == 2) {
        Curr_Pln = Plans[2]
        // Desc.innerText = Plans[2]
        Desc.innerText = Plans[2].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}function Btn4Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[3]
        Desc.innerText = array[3].Description
        Distance.innerText = "97.821 million km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}function Btn5Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[4]
        Desc.innerText = array[4].Description
        Distance.innerText = "778 million km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}function Btn6Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[5]
        Desc.innerText = array[5].Description
        Distance.innerText = "1.5839 billion km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}

window.onload = function() {
    if (Pg==1) {
        Btn_1.innerText = "SightSeeing"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Desc.innerText = "Click on the text to select your destination then click the continue button."
        Prev.style.display = "none"
        Image.src = "./Image/KSC-20200828-PH-MWC01_0075_medium.jpg"
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
    }
}

const abbrNum = (number, decPlaces) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces)
  
    // Enumerate number abbreviations
    var abbrev = ['k', 'm', 'b', 't']
  
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3)
  
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces
  
        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1
          i++
        }
  
        // Add the letter for the abbreviation
        number += abbrev[i]
  
        // We are done... stop
        break
      }
    }
  
    return number
  }

function Updte() {
    if (Pg==1) {
        Btn_1.innerText = "SightSeeing"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Heading.innerText = "Select your destination"
        Desc.innerText = Curr_Plnt.Description
        Prev.style.display = "none"
        // Use Css to set all the buttons to display block
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "block"
        Btn_4.style.display = "block"
        Btn_5.style.display = "block"
        Btn_6.style.display = "block"
        Image.src = "./Image/KSC-20200828-PH-MWC01_0075_medium.jpg"
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        Heading.innerText = "Select your pricing plan"
        Desc.innerText = Curr_Pln.Description
        Price.innerText = "0"
        Prev.style.display = "block"
        // use CSS styling to hide all that is not needed
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "block"
        Btn_4.style.display = "none"
        Btn_5.style.display = "none"
        Btn_6.style.display = "none"
        // get a relavant image from unsplash
        Image.src = "./Image/iss056e142871_alt_medium.jpg"
    } if(Pg==3) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = " "
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        const Ttlprc2 = TotalAmt.toLocaleString("en-US");
        Desc.innerText = Desc.innerText = "You have selected, " + Curr_Plnt.Title + " as your destination in space. You also selected " + Curr_Pln.Title + " plan as your pricing plan. Your total price is $" + (Ttlprc2) + ". Do you want to continue?" 
        Heading.innerText = "Check your information"
        let abb = abbrNum(TotalAmt,2)
        Price.innerText = "$"+ abb
        Next.style.display = "block"
        // use CSS styling to hide all that is not needed
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "none"
        Btn_4.style.display = "none"
        Btn_5.style.display = "none"
        Btn_6.style.display = "none"
        Image.src = "./Image/201411230015HQ_medium.jpg"
    } if(Pg==4) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = " "
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        Desc.innerText = Desc.innerText = "Booked! Thank you for choosing RocketSpace! 🚀" 
        Heading.innerText = "Success! ✌️"
        Next.style.display = "none"
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        let abb = abbrNum(TotalAmt,2)
        Price.innerText = abb
        // use CSS styling to hide all that is not needed
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "none"
        Btn_4.style.display = "none"
        Btn_5.style.display = "none"
        Btn_6.style.display = "none"
        Image.src = "./Image/NHQ202212160009_medium.jpg"
    }
}

Next.onclick = function() {
    Price.innerText = Curr_Plnt.price
    Pg += 1
    Updte()
}

Prev.onclick = function() {
    if( Pg< 1){
        Pg = 1
    }
    Price.innerText = Curr_Plnt.price
    Pg -= 1
    Updte()
}