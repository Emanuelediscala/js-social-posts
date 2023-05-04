const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://fastly.picsum.photos/id/513/300/300.jpg?hmac=YkEyB3G8RcZzK_PVWkH7nPd0g3Ms7puLKwAHCmTfgew"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let container = document.getElementById("container")

// GENERO ELEMENTI SU UN CLICLO FOR
// INIZIO A CREARE LE VARIABILI

posts.forEach((element) => {
    container.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button"  data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
});

let Ids = []

// vado a riempire l'array degli ID
posts.forEach((element,index) => {
    const id = element.id
    Ids.push(id);
});
console.log(Ids);
// DEFINISCO BUTTONS

let likeIteration = document.querySelector(".likes__cta")
    likeIteration.addEventListener("click", function() {
        likeIteration.classList.toggle("bg-blue")
        console.log(likeIteration);
    })






















;

//     let post = document.createElement("div")
//     let postHeader = document.createElement("div")
//     let metaImg = document.createElement("img")
//     let metaData = document.createElement("div")
//     let metaName = document.createElement("p")
//     let metaTime = document.createElement("p")
//     let bodyText = document.createElement("p")
//     let bodyImg = document.createElement("img")
//     let footer = document.createElement ("div")
//     let likeReaction = document.createElement("i")
//     let ppleLikedthatpost = document.createElement("span")
//     // inserisco valori alle variabili
//     metaImg.src += element.author.image;
//     metaName.innerText += element.author.name;
//     metaTime.innerText += "3 ore fa"
//     bodyText.innerText += element.content;
//     bodyImg.src += element.media;
//     likeReaction.classList.add("like-button__icon","fas","fa-thumbs-up")
//     console.log(likeReaction);
// ;
