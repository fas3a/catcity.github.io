const cats=[
    {
        img: "cat-2.jpeg",
        name: "Golden",
        price: "NGN 100,000"

},
{
    img: "cat-3.jpeg",
    name: "Pretty",
    price: "NGN 120,000"
},
{
    img: "cat-4.jpeg",
    name: "Angel",
    price: "NGN 140,000"
},
{
    img: "cat-5.jpeg",
    name: "Nigth Walker",
    price: "NGN 90,000"
},
{
    img: "cat-6.jpeg",
    name: "Milky",
    price: "NGN 100,000"
},
{
    img: "cat-7.jpeg",
    name: "Ranger",
    price: "NGN 180,000"
},
{
    img: "cat-8.jpeg",
    name: "Runner",
    price: "NGN 50,000"

},
{
img: "cat-1.jpeg",
name: "Terrifiyer",
price: "NGN 20,000"
},
{
img: "cat-10.jpeg",
name: "Floppy",
price: "NGN 70,000"
},
{
img: "cat-11.jpeg",
name: "Snikky",
price: "NGN 90,000"
},
{
img: "cat-12.jpeg",
name: "Diver",
price: "NGN 110,000"
},
{
img: "cat-13.jpeg",
name: "Sweeter",
price: "NGN 40,000"
},
]

let catsSection = document.getElementById("gallery-wrap");
let gallerySection = " ";
cats.forEach((e) => {
    gallerySection += `
    <div class="card card-lg shadow-sm col-md-3 my-3">
                  <img src="./images/${e.img}" alt="" class="card-img-top img-fluid">
                  <div class="card-body">
                      <h4 class="card-title">${e.name}</h4>
                      <p class="card-text">Price: <span class="badge bg-primary"> ${e.price} </span></p>
                  </div>
              </div>`
    catsSection.innerHTML = gallerySection
})