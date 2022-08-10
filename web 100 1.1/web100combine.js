//============================================= LAND PAGE ====================
//==== we create reasponsive list ====
const humbergerLp = document.querySelector(".humberger-Lp") //(== select the humberger bar classes)
const headerMenu = document.querySelector(".header-menu") //(== select catalog list classes)
const headerLink= document.querySelectorAll(".header-links") // (== select link of the catalog classes)

humbergerLp.addEventListener ("click", ()=> {
    //=== console.log("hey am humberger")
    humbergerLp.classList.toggle("active")
    headerMenu.classList.toggle("active")
})

headerLink.forEach((link)=>{
    link.addEventListener("click", ()=>{
         //console.log("hey am link")
      humbergerLp.classList.toggle("active")
      headerMenu.classList.toggle("active")
    })})
//============================================= LAND PAGE ====================

//============================================= CATLOG ====================
//=====Data collection for the page ===
const ishaProducts = [
    {
        id : 1 ,
        title : "lemmonCake",
        category: "wedding",
        price: "30,000",
        img: "image/pin1.jpg",
    },
    {
        id : 2 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin2.jpg",
    },
    {
        id : 3 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin3.jpg",
    },
    {
        id : 4 ,
        title : "lemmonCake",
        category: "wedding",
        price: "20,000",
        img: "image/pin4.jpg",
    },
    {
        id : 5 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin5.jpg",
    },
    {
        id : 6 ,
        title : "lemmonCake",
        category: "special_orders",
        price: "20,000",
        img: "image/pin6.jpg",
    }
    ,
    {
        id : 7 ,
        title : "lemmonCake",
        category: "wedding",
        price: "20,000",
        img: "image/pin7.jpg",
    }
    ,
    {
        id : 8 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin8.jpg",
    }
    ,
    {
        id : 9 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin9.jpg",
    }
    ,
    {
        id : 10 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin10.jpg",
    }
    ,
    {
        id : 11 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin11.jpg",
    }
    ,
    {
        id : 12 ,
        title : "lemmonCake",
        category: "wedding",
        price: "20,000",
        img: "image/pin12.jpg",
    }
    ,
    {
        id : 13 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin13.jpg",
    }
    ,
    {
        id : 14 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin14.jpg",
    }
    ,
    {
        id : 15 ,
        title : "lemmonCake",
        category: "wedding",
        price: "20,000",
        img: "image/pin15.jpg",
    }
    ,
    {
        id : 16 ,
        title : "lemmonCake",
        category: "special_orders",
        price: "20,000",
        img: "image/pin16.jpg",
    }
    ,
    {
        id : 17 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin17.jpg",
    }
    ,
    {
        id : 18 ,
        title : "lemmonCake",
        category: "special_orders",
        price: "20,000",
        img: "image/pin18.jpg",
    }
    ,
    {
        id : 19 ,
        title : "lemmonCake",
        category: "party",
        price: "20,000",
        img: "image/pin19.jpg",
    }
    ,
    {
        id : 20 ,
        title : "lemmonCake",
        category: "birthday",
        price: "20,000",
        img: "image/pin20.jpg",
    }
    ,
    {
        id : 21 ,
        title : "lemmonCake",
        category: "wedding",
        price: "20,000",
        img: "image/pin21.jpg",
    }
    ,
    {
        id : 22 ,
        title : "lemmonCake",
        category: "special_order",
        price: "20,000",
        img: "image/pin22.jpg",
    }
    ,
    {
        id : 23 ,
        title : "lemmonCake",
        ccategory: "party",
        price: "20,000",
        img: "image/pin23.jpg",
    }
]
//====== js galley part of the page =====

const humberger = document.querySelector(".humberger") //(== select the humberger bar classes)
const catalogyList = document.querySelector(".catalogy-list") //(== select catalog list classes)
const catalogLink= document.querySelectorAll(".catalog-link") // (== select link of the catalog classes)

humberger.addEventListener ("click", ()=> {
    //=== console.log("hey am humberger")
    humberger.classList.toggle("active")
    catalogyList.classList.toggle("active")
})
//Dom for the galley-show 
const galleyShow = document.querySelector(".galley-show")
const moreItems = document.querySelector(".more-Items")

//event listener on the link actions
catalogLink.forEach((link)=>{
    link.addEventListener("click", (event)=>{
        moreItems.classList.add("remove") //its remove scroll propety
        //=====console.log("hey am link")
        humberger.classList.toggle("active")
        catalogyList.classList.toggle("active")
        //====== togggle add the classlist,it has true&false (once its true be false )
       const catalog =  event.currentTarget.dataset.id
       //console.log(catalog)
       //set the catalogLinks as the filter buttons
        const menuCatalog = ishaProducts.filter((productItems)=>{
            if( productItems.category == catalog ){
                return productItems
            }
        })
       // console.log(menuCatalog)
       if (catalog == "all_cakes") {
            DisplayloadMenu(ishaProducts)
            moreItems.classList.remove("remove") //its remove scroll propety
       }
       else {
            DisplayloadMenu(menuCatalog)
            moreItems.classList.add("remove") //its remove scroll propety
            galleyShow.classList.remove("overflow") //its adds scroll property
       }
    })
})
//======== galley END =======
//======== galley display =====


//======every time content load its display all contents
window.addEventListener("DOMContentLoaded", ()=>{
     DisplayloadMenu(ishaProducts)
})


//filter method


//==== DOM Menu ====
function DisplayloadMenu(ishaProducts){ 
    let loadMenu = ishaProducts.map(item =>{
        return ` <aside class="galley-items">
        <img src=${item.img} alt="${item.title}" class="product-image">
        <div class="product-price">
            <h5 id="price">${item.price}</h5>
        </div>
        <button> <i class="fa-solid fa-plus"></i>
        </button>
    </aside>
        `
    })
   loadMenu =loadMenu.join('')
    galleyShow.innerHTML = loadMenu
}
//======more items load =====
moreItems.addEventListener("click", ()=>{
    galleyShow.classList.toggle("overflow") //its adds scroll property
    moreItems.classList.toggle("remove") //its remove scroll propety
})

//============================================= CATAlOG END ====================
//============================================= USER REVIEW ====================

//====== customer information ======
const customerReview = [
    {
     "name":"Navy",
     "image": "image/user1.png",
     "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Aspernatur repudiandae iste suscipit hic itaque ipsam omnis"},
    {
    "name":"Aisha",
    "image": "image/user2.png",
    "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Aspernatur repudiandae iste suscipit hic itaque ipsam omnis"},
    {
    "name":"kay",
    "image": "image/user3.png",
    "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Aspernatur repudiandae iste suscipit hic itaque ipsam omnis"}
 ]
 
// ====== Dom ===== //
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const random = document.getElementById("random")
const userCard = document.querySelector(".user-card")
let initial = 0 ;
//==== event listener for all buttons

previous.addEventListener("click", ()=>{
  // console.log("am previous")
  if (initial > 0){ --initial}
  else {initial}
  reviewDisplay() 
})

next.addEventListener("click", ()=>{
 if (initial < 2){ initial++}
  else { initial }
  reviewDisplay()
})
random.addEventListener("click", ()=>{
   initial = Math.floor(Math.random()*3)
   reviewDisplay()
})
//===window when load

window.addEventListener("DOMContentLoaded", ()=>{
   //console.log("am window")
  reviewDisplay()
})

function reviewDisplay(){
  let displayReviews =
    `<div class="userAvatar">
    <img src=${customerReview[initial].image} alt="${customerReview[initial].name}" class="user-image">
  </div>
<div class="user-words">
 <h6>name: ${customerReview[initial].name}</h6>
    <p><span>"</span>${customerReview[initial].comment}
    </p>`
      return   userCard.innerHTML = displayReviews
    }
//============================================= USER REVIEW END====================