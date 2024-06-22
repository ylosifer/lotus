const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function changeImage(card) {
    var primaryImg = card.querySelector('.primary_image');
    var secondaryImg = card.querySelector('.secondary_image');
    
    primaryImg.style.display = 'none';
    secondaryImg.style.display = 'block';
}

function changeImageBack(card) {
    var primaryImg = card.querySelector('.primary_image');
    var secondaryImg = card.querySelector('.secondary_image');
    
    primaryImg.style.display = 'block';
    secondaryImg.style.display = 'none';
}



// ========================== Populate Cards ====================================
const cardData = [
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_4_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Face Serum",
        description: "Deeply Hydrates Skin | 100x Vitamin C | Reduces Pigmentation"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_11_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_11_1200x.jpg",
        title: "Sandalwood & Hyaluronic Acid Glow and Hydrating Sunscreen Serum | SPF50+ | PA+++",
        description: "Ultra High Sun Protection | Unique Sunscreen Serum Formula"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_6_1200x.jpg?",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_b22e97b2-76af-42f6-8245-95f5760c33f5_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_11_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_11_1200x.jpg",
        title: "Sandalwood & Hyaluronic Acid Glow and Hydrating Sunscreen Serum | SPF50+ | PA+++",
        description: "Ultra High Sun Protection | Unique Sunscreen Serum Formula"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_6_1200x.jpg?",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_b22e97b2-76af-42f6-8245-95f5760c33f5_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_11_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_11_1200x.jpg",
        title: "Sandalwood & Hyaluronic Acid Glow and Hydrating Sunscreen Serum | SPF50+ | PA+++",
        description: "Ultra High Sun Protection | Unique Sunscreen Serum Formula"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_6_1200x.jpg?",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_b22e97b2-76af-42f6-8245-95f5760c33f5_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_6_1200x.jpg?",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },
    {
        primaryImage: "//www.lotusbotanicals.com/cdn/shop/files/1_b22e97b2-76af-42f6-8245-95f5760c33f5_1200x.jpg",
        secondaryImage: "//www.lotusbotanicals.com/cdn/shop/files/2_4_700x.jpg",
        title: "Vitamin C Skin Brightening Day Crème",
        description: "Brightens Skin | Unique Gel Crème Formula | 100x Vitamin C"
    },

];


function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');

    const primaryImg = document.createElement('img');
    primaryImg.classList.add('primary_image');
    primaryImg.src = cardInfo.primaryImage;
    primaryImg.alt = "Primary Image";
    card.appendChild(primaryImg);

    const secondaryImg = document.createElement('img');
    secondaryImg.classList.add('secondary_image');
    secondaryImg.src = cardInfo.secondaryImage;
    secondaryImg.alt = "Secondary Image";
    card.appendChild(secondaryImg);

    const title = document.createElement('h2');
    title.textContent = cardInfo.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = cardInfo.description;
    card.appendChild(description);

    const button = document.createElement('button');
    button.classList.add('card-button');
    button.textContent = "Read More";
    card.appendChild(button);

    return card;
}

function populateCards() {
    const cardGrid = document.querySelector('.card-grid');

    cardData.forEach(function(cardInfo) {
        const cardElement = createCard(cardInfo);
        cardGrid.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', populateCards);
// ===================================================================================
