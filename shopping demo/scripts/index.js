const data = {
    pro_name: ["Chakka", "Fakka", "Jhakka", "Takka"],
    pro_img: ["/sampimg.png", "/sampimg.png", "/sampimg.png", "/sampimg.png"],
    pro_desc: ["Lorem ipsum, dolor sit amet conse" +
        " tetur adipisicing elit. Magnam laborum corrupti asperiores ullam recusandae nisi, il" +
        " lum id facilis dicta omnis labore dignissimos est perspiciatis dolores alias sed obca" +
        "ecati porro beatae."]
}

let dataset = [
    [
        //cart
        item1 = {
            i_name: "xxxx",
            i_quantity: 00,
            i_price: 00
        },
        item2 = {
            i_name: "xyxy",
            i_quantity: 00,
            i_price: 00
        }


    ],
    //products
    [
        product1 = {
            p_id: "p01",
            p_name: "Chakka",
            p_image: "/sampimg.png",
            p_desc: "Lorem ipsum, dolor sit amet conse" +
                " tetur adipisicing elit. Magnam laborum corrupti asperiores ullam recusandae nisi, il" +
                " lum id facilis dicta omnis labore dignissimos est perspiciatis dolores alias sed obca" +
                "ecati porro beatae.",
            p_price: 95
        },
        product2 = {
            p_id: "p02",
            p_name: "Fakka",
            p_image: "/sampimg.png",
            p_desc: "Lorem ipsum, dolor sit amet conse" +
                " tetur adipisicing elit. Magnam laborum corrupti asperiores ullam recusandae nisi, il" +
                " lum id facilis dicta omnis labore dignissimos est perspiciatis dolores alias sed obca" +
                "ecati porro beatae.",
            p_price: 100
        },
        product3 = {
            p_id: "p03",
            p_name: "Jhakka",
            p_image: "/sampimg.png",
            p_desc: "Lorem ipsum, dolor sit amet conse" +
                " tetur adipisicing elit. Magnam laborum corrupti asperiores ullam recusandae nisi, il" +
                " lum id facilis dicta omnis labore dignissimos est perspiciatis dolores alias sed obca" +
                "ecati porro beatae.",
            p_price: 455
        },
        product4 = {
            p_id: "p04",
            p_name: "Takka",
            p_image: "/sampimg.png",
            p_desc: "Lorem ipsum, dolor sit amet conse" +
                " tetur adipisicing elit. Magnam laborum corrupti asperiores ullam recusandae nisi, il" +
                " lum id facilis dicta omnis labore dignissimos est perspiciatis dolores alias sed obca" +
                "ecati porro beatae.",
            p_price: 380
        }
    ]
]




function createCard(card_cont, i) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let cardImage = document.createElement("img");
    cardImage.src = "/resources" + dataset[1][i].p_image;
    let innerContainer = document.createElement("div");
    innerContainer.className = "container inner";
    let productName = document.createElement("h4");
    productName.innerHTML = dataset[1][i].p_name;
    productName.style.display = "inline";
    let productPrice = document.createElement("h5");
    productPrice.innerHTML = dataset[1][i].p_price + "tk";
    productPrice.style.float = "right";
    let productDescription = document.createElement("p");

    productDescription.innerHTML = dataset[1][i].p_desc;
    innerContainer.appendChild(productName);
    innerContainer.appendChild(productPrice);
    innerContainer.appendChild(productDescription);

    let addToCart = document.createElement("button");
    addToCart.className = "btn-primary cart";
    addToCart.innerHTML = "Add To Cart"
    
    /* 
    **************CHANGED BUTTON***********
    
        <div class="btn-primary" id="customBtnDiv" style="display: inline;">
            <button>+</button>
            <button style="width: 30%; display: inline;">xxx</button>
            <button>-</button>
        </div>
    </div>
    */
    let customBtnDiv = document.createElement("div");
    customBtnDiv.className = "btn-primary";
   // customBtnDiv.style.width="100%";
    //customBtnDiv
    customBtnDiv.id = "customBtnDiv";
    let plusBtn = document.createElement("button");
    plusBtn.id = "plusBtn";
    plusBtn.innerHTML = "+++";
    let countDisplay = document.createElement("button");
    countDisplay.id = "countDisplay";
    plusBtn.innerHTML = "00000";
    plusBtn.style.width="30px";
    let minusBtn = document.createElement("button");
    minusBtn.id = "minusBtn";
    plusBtn.innerHTML = "----";

    customBtnDiv.appendChild(plusBtn);
    customBtnDiv.appendChild(countDisplay);
    customBtnDiv.appendChild(minusBtn);

    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(innerContainer);
    cardDiv.appendChild(addToCart);
    cardDiv.appendChild(customBtnDiv);
    card_cont.appendChild(cardDiv);

    // let btnCart=  document.getElementsByClassName("btn-primary cart");
    addToCart.addEventListener("click", function btnClick() {
        // let btnCart=  document.getElementsByClassName("btn-primary cart");
        let counter = document.getElementById("cartBadge");
        updateBadge(counter, 1);

    });

}
function updateBadge(counter, num) {
    let previousCount = Number(counter.innerHTML);
    counter.innerHTML = previousCount + num;

}
function start(card_cont) {
    for (i = 0; i < dataset[1].length; i++) {
        createCard(card_cont, i);
    }
}



start(document.getElementById("card-container"))