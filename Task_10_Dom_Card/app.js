const cardData = [
            {
                name: "Ahmed Mohamed",
                description: "MERN Stack",
                imageUrl: "https://avatars.githubusercontent.com/u/186093996?v=4"
            },
            {
                name: "Hager Ahmed",
                description: "Data Analysis",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monarch_In_May.jpg/1200px-Monarch_In_May.jpg"
            },
            {
                name: "Ali Mohamed",
                description: "Graphic Designer",
                imageUrl: "https://images.stockcake.com/public/f/8/7/f871e333-4dce-4705-b813-ac45d213a522_large/creative-designer-working-stockcake.jpg"
            }
        ];

        // CREATE MAIN CARD
        const cardsContainer = document.createElement("div");
        cardsContainer.setAttribute("id", "cards");

        // SELECT BODY
        const mainBody = document.querySelector("body");
        
        // CREATE CARD BY FOR LOOP
        for (const cardD of cardData) {
            
            // SECONDRY CARD
            const cardDiv = document.createElement("div");
            const heading = document.createElement("h2");
            const paragraph = document.createElement("p");
            const image = document.createElement("img");

            cardDiv.setAttribute("class", "card"); 
            image.setAttribute("src", cardD.imageUrl);
            image.setAttribute("alt", cardD.name);

            const nameText = document.createTextNode(cardD.name);
            const descriptionText = document.createTextNode(cardD.description);

            heading.appendChild(nameText);
            paragraph.appendChild(descriptionText);

            cardDiv.appendChild(image);
            cardDiv.appendChild(heading);
            cardDiv.appendChild(paragraph);

            cardsContainer.appendChild(cardDiv);
        }

        mainBody.appendChild(cardsContainer);


        const allCards = document.querySelectorAll(".card");
        
        allCards.forEach(card => {
            card.style.backgroundColor = "#e8f0fe";
            card.style.border = "1px solid #a3bcf9"; 
        });