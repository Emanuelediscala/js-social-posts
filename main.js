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
// DEFINISCO FUNZIONE CHE SOSTUISCE IMG CON DIV 




// GENERO ELEMENTI SU UN CLICLO FOR
// INIZIO A CREARE LE VARIABILI

posts.forEach((element,index) => {
    container.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                ${renderImg(index)}
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
                <a class="like-button  js-like-button"  data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
});

// DEFINISCO BUTTONS

let likeIteration = document.querySelectorAll(".like-button")
//    DEFINISCO CICLO FOR PER IL CLICK
    for (let i = 0; i < likeIteration.length; i++) {
        const element = likeIteration[i];
        element.addEventListener("click", function(){
            // FACCIO PARTIRE LA FUNZIONE DI INCREMENTO
            // if (element.classList.contains("like-button--liked")){
            //     decrementoLike(i);
            // }
            // else {
            //     incrementoLike(i)
            // }
            // OPERATORE TERNARIO
            element.classList.contains("like-button--liked") ? decrementoLike(i) : incrementoLike(i);    
            element.classList.toggle("like-button--liked")
            document.querySelectorAll(".js-likes-counter")[i].innerHTML = posts[i].likes
        })
    }
// DEFINISCO FUNZIONE INCREMENTO LIKE
    function incrementoLike(indice) {
        posts[indice].likes++;
        console.log(posts[indice].likes);
    } 

// DEFINISCO FUNZIONE DECREMENTO LIKE
function decrementoLike(indice) {
    posts[indice].likes--;
    console.log(posts[indice].likes);
} 


// DEFINISCO FUNZIONE PER CONTROLLO AVATAR
function renderImg(i) {
        const element = posts[i];
        if (element.author.image === null) { 
            let x =`<span class="profile-pic-default">LF</span>`
            return x            
        }
        let y = `<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">`
        return y 
    }






