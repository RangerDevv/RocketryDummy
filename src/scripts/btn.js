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
        "Title": "ISS",
        "Description": "Welcome to the International Space Station (ISS), an incredible destination for adventurous space tourists! The ISS is an artificial satellite orbiting the Earth, providing a one-of-a-kind space experience for those looking to travel beyond our planet. As the largest object created by humans in space, the ISS offers spacious living quarters and laboratories for conducting scientific research in microgravity. With modules dedicated to various fields like biology, physics, and astronomy, visitors to the ISS can explore the wonders of the universe through the eyes of astronauts. The ISS orbits the Earth at a height of approximately 250 miles and travels at a breakneck speed of around 17,500 miles per hour, offering breathtaking views of our planet from space. This incredible feat of engineering and international cooperation among the United States, Russia, Europe, Japan, and Canada is a symbol of human ingenuity and represents our commitment to exploring and understanding the universe we live in. Don't miss out on the chance to embark on a once-in-a-lifetime space adventure to the ISS!",
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
        "Description": "This plan would include a trip on a small, reliable rocket with a few amenities such as food and water. The rocket would travel to low Earth orbit and provide passengers with a few minutes of weightlessness and stunning views of Earth. The price for this plan might be around $100,000. Maximum of 2 people per trip. Perfect for couples or friends. <br> <br> <h2 class='text-2xl'><strong>Rocket:</strong></h2> <br> The Starblazer: This sleek and reliable rocket is the perfect choice for couples or friends looking to experience the thrill of space travel on a budget. As part of RocketSpace’ basic plan, The Starblazer will take you on a journey to low Earth orbit, where you’ll enjoy a few minutes of weightlessness and stunning views of our home planet. With its advanced propulsion system and state-of-the-art navigation technology, The Starblazer provides a safe and comfortable ride at an affordable price. ",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":100000
    },
    {
        "Title": "Standard",
        "Description": "The standard plan would offer a more extensive trip on a larger and more advanced rocket. This plan might include multiple days in orbit, with opportunities for spacewalks and other activities. It would also include more comfortable accommodations and a wider range of food options. The price for this plan might be around $105,000. Maximum of 6 people per trip. Perfect for families or groups of friends. <br> <br> <h2 class='text-2xl'><strong>Rocket:</strong></h2> <br> The Comet Chaser: This agile and nimble rocket is built for chasing comets and other celestial objects in space. With its powerful engines and advanced maneuvering capabilities, the Comet Chaser can keep up with even the fastest-moving objects in space. Designed to accommodate 4-6 people, this rocket has a spacious interior and can carry up to 300kg of weight, making it perfect for small groups of friends or family on a mission to explore the cosmos and embark on a memorable journey.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":450000
    },
    {
        "Title": "Premium",
        "Description": "This plan will have access to our top-of-the-line spacecraft, equipped with the latest technology and comfortable amenities. You will also have access to our exclusive training program, where you will learn how to navigate and operate your spacecraft, as well as participate in simulated space missions to prepare you for the real thing. Additionally, you will be able to bring along a guest of your choice on your journey, and you will both receive VIP treatment at all of our space stations and landing sites. The price for this plan might be around $805,000. Maximum of 8 people per trip. Perfect for huge families or huge groups of friends. <br> <br> <h2 class='text-2xl'><strong>Rocket:</strong></h2> <br> The Planet Explorer: This state-of-the-art rocket is designed to provide the ultimate in luxury and comfort as you explore new planets in our solar system and beyond. The Planet Explorer is equipped with advanced life support systems and cutting-edge scientific instruments to ensure your safety and enjoyment. Relax in our spacious and well-appointed cabins, enjoy gourmet meals prepared by our onboard chefs, and take in stunning views of the cosmos from our observation deck. With The Planet Explorer, your journey through space will be an unforgettable experience.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": 805000
    },
]

let Pg = 1
let Curr_Plnt = array[0]
let Curr_Pln = Plans[0]


function Btn1Clk() {
    if (Pg == 1) {
        Curr_Pln = Plans[0]
        Desc.innerHTML = Plans[0].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber
    }
    if (Pg == 2) {
        Curr_Plnt = array[0]
        Desc.innerHTML = array[0].Description
        Distance.innerHTML = "256,600 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber
    }
}
function Btn2Clk() {
    if (Pg == 1) {
        Curr_Pln = Plans[1]
        Desc.innerHTML = Plans[1].Description
        // Distance = 10000
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber

    }
    if (Pg == 2) {
        Curr_Plnt = array[1]
        Desc.innerHTML = array[1].Description
        Distance.innerHTML = "267,568 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber
    }
}function Btn3Clk() {
    if (Pg == 1) {
        Curr_Pln = Plans[2]
        Desc.innerHTML = Plans[2].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber    
    }
    if (Pg == 2) {
        Curr_Plnt = array[2]
        Desc.innerHTML = array[2].Description
        Distance.innerHTML = "384,400 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber
    }
}function Btn4Clk() {
    if (Pg == 1) {
        Curr_Pln = Plans[3]
        Desc.innerHTML = Plans[3].Description
        Distance.innerHTML = "97.821 million km"
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber    
    }
    if (Pg == 2) {
        Curr_Plnt = array[3]
        Desc.innerHTML = array[3].Description
        Distance.innerHTML = "1.496 billion km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber
    }
}function Btn5Clk() {
    if (Pg == 2) {
        Curr_Plnt = array[4]
        Desc.innerHTML = array[4].Description
        Distance.innerHTML = "778 million km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber    
    }
}function Btn6Clk() {
    if (Pg == 2) {
        Curr_Plnt = array[5]
        Desc.innerHTML = array[5].Description
        Distance.innerHTML = "1.5839 billion km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerHTML = "$"+formattedNumber    
    }
}

window.onload = function() {
    if (Pg==1) {
        Btn_1.innerHTML = "Standard"
        Btn_2.innerHTML = "Economy"
        Btn_3.innerHTML = "Premium"
        Btn_4.innerHTML = " "
        Btn_5.innerHTML = " "
        Btn_6.innerHTML = " "
        Heading.innerHTML = "Select your pricing plan"
        Desc.innerHTML = Curr_Pln.Description
        Price.innerHTML = "0"
        Prev.style.display = "none"
        // use CSS styling to hide all that is not needed
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "block"
        Btn_4.style.display = "none"
        Btn_5.style.display = "none"
        Btn_6.style.display = "none"
        // get a relavant image from unsplash
        Image.src = "./Image/iss056e142871_alt_medium.jpg"
    }
}

const abbrNum = (number, decPlaces) => {
    decPlaces = Math.pow(10, decPlaces)
    var abbrev = ['k', 'm', 'b', 't']
    for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3)
  
      if (size <= number) {
        number = Math.round((number * decPlaces) / size) / decPlaces
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1
          i++
        }
        number += abbrev[i]
        break
      }
    }
  
    return number
  }

function Updte() {
    if (Pg==1) {
        Btn_1.innerHTML = "Standard"
        Btn_2.innerHTML = "Economy"
        Btn_3.innerHTML = "Premium"
        Btn_4.innerHTML = " "
        Btn_5.innerHTML = " "
        Btn_6.innerHTML = " "
        Heading.innerHTML = "Select your pricing plan"
        Desc.innerHTML = Curr_Pln.Description
        Price.innerHTML = "0"
        Prev.style.display = "none"
        // use CSS styling to hide all that is not needed
        Btn_1.style.display = "block"
        Btn_2.style.display = "block"
        Btn_3.style.display = "block"
        Btn_4.style.display = "none"
        Btn_5.style.display = "none"
        Btn_6.style.display = "none"
        // get a relavant image from unsplash
        Image.src = "./Image/iss056e142871_alt_medium.jpg"
    } if(Pg==2) {
        if (Curr_Pln == Plans[0]) {
            Btn_1.innerHTML = "SightSeeing"
            Btn_2.innerHTML = "ISS"
            Btn_1.style.display = "block"
            Btn_2.style.display = "block"
            Btn_3.style.display = "none"
            Btn_4.style.display = "none"
            Btn_5.style.display = "none"
            Btn_6.style.display = "none"
        }
        if (Curr_Pln == Plans[1]) {
            Btn_1.innerHTML = "SightSeeing"
            Btn_2.innerHTML = "ISS"
            Btn_3.innerHTML = "Moon"
            Btn_4.innerHTML = "Mars"
            Btn_1.style.display = "block"
            Btn_2.style.display = "block"
            Btn_3.style.display = "block"
            Btn_4.style.display = "block"
            Btn_5.style.display = "none"
            Btn_6.style.display = "none"
        }
        if (Curr_Pln == Plans[2]) {
            Btn_1.innerHTML = "SightSeeing"
            Btn_2.innerHTML = "ISS"
            Btn_3.innerHTML = "Moon"
            Btn_4.innerHTML = "Mars"
            Btn_5.innerHTML = "Jupiter"
            Btn_6.innerHTML = "Saturn"
            Btn_1.style.display = "block"
            Btn_2.style.display = "block"
            Btn_3.style.display = "block"
            Btn_4.style.display = "block"
            Btn_5.style.display = "block"
            Btn_6.style.display = "block"
        }
        Heading.innerHTML = "Select your destination"
        Desc.innerHTML = Curr_Plnt.Description
        Prev.style.display = "block"
        Image.src = "./Image/KSC-20200828-PH-MWC01_0075_medium.jpg"
    } if(Pg==3) {
        Btn_1.innerHTML = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerHTML = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerHTML = " "
        Btn_4.innerHTML = " "
        Btn_5.innerHTML = " "
        Btn_6.innerHTML = " "
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        const Ttlprc2 = TotalAmt.toLocaleString("en-US");
        Desc.innerHTML = "You have selected, " + Curr_Plnt.Title + " as your destination in space. You also selected " + Curr_Pln.Title + " plan as your pricing plan. Your total price is $" + (Ttlprc2) + ". Do you want to continue?" 
        Heading.innerHTML = "Check Your Information"
        let abb = abbrNum(TotalAmt,2)
        Price.innerHTML = "$"+ abb
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
        Btn_1.innerHTML = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerHTML = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerHTML = " "
        Btn_4.innerHTML = " "
        Btn_5.innerHTML = " "
        Btn_6.innerHTML = " "
        Desc.innerHTML = Desc.innerHTML = "Booked! Thank you for choosing RocketSpace! 🚀" 
        Heading.innerHTML = "Success! ✌️"
        Next.style.display = "none"
        Prev.innerText = "Cancel"
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        let abb = abbrNum(TotalAmt,2)
        Price.innerHTML = abb
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
    Price.innerHTML = Curr_Pln.price
    Pg += 1
    Updte()
}

Prev.onclick = function() {
    if( Pg< 1){
        Pg = 1
    }
    Price.innerHTML = Curr_Pln.price
    Pg -= 1
    Updte()
}