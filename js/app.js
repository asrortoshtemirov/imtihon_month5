const UrlUsername = "https://api.github.com/users/asrortoshtemirov";
const UrlRepos = "https://api.github.com/users/asrortoshtemirov/repos";
const UrlFollowers = "https://api.github.com/users/asrortoshtemirov/followers";

const overview = document.querySelector(".overview");
const repository = document.querySelector(".repository");
const headerbox3 = document.querySelector(".header_box3");
const herobox2 = document.querySelector(".hero__box2");
const herorepositorie = document.querySelector((".hero__repositorie"));
const btnLine = document.querySelector(".btn_line");
const btnLine2 = document.querySelector(".btn_line2");
const heroboxlist = document.querySelector(".hero__box-list");
const btn3 = document.querySelector(".btn3");
const herofollowbox = document.querySelector(".hero__follow_box");
const heroboxff = document.querySelector(".hero__box-ff");
const box = document.querySelector(".box")

headerbox3.addEventListener("click",(e)=>{
  if (e.target.classList.contains("repository")){
    btnLine.style.display = "none"
    btnLine2.style.display = "inline-block"
    herorepositorie.style.display = "inline-block"
    herobox2.style.display = "none"
    herofollowbox.style.display = "none"
  }
  if (e.target.classList.contains("overview")){
    btnLine.style.display = "inline-block"
    btnLine2.style.display = "none"
    herorepositorie.style.display = "none"
    herobox2.style.display = "inline-block"
    herofollowbox.style.display = "none"
  }
});

heroboxff.addEventListener("click",(e)=>{
  if (e.target.classList.contains("btn3")){
    btnLine.style.display = "none"
    btnLine2.style.display = "none"
    herorepositorie.style.display = "none"
    herobox2.style.display = "none"
    herofollowbox.style.display = "flex"
  }
})

const render1 = (data)=>{
  heroboxlist.innerHTML = data?.map((item)=>`
    <li class="hero__box-item">
      <div class="hero__box_item-box">
        <div class="hero__box_item-box-public">
          <a href="#">
            <span class="hero__box_item-box_first">${item?.name}</span>
          </a>
          <span class="hero__box_item-box_text">${item?.visibility}</span>
        </div>
        <p class="hero__box_item-box_block">
          <span class="hero__box_item-box_text-span"></span>
          <span>CSS</span>
        </p>
      </div>
    </li>
    `).join("");
};

const getData = () => {
  fetch(UrlRepos)
  .then((res)=>res.json())
  .then((data)=>{
    render1(data)
  })
  .catch((error)=>{
    console.log(error);
  })
};
getData();

const render2 = (data) => {
  box.innerHTML = data?.map((items) => `
    <div class="hero__repos2">
      <div class="hero__repos2-block1">
        <div class="hero__repos-block_box">
          <h3 class="hero__repos2-title">
            <a href="#">
              <span>${items?.name}</span>
            </a>
          </h3>
          <span class="hero__repos-span_public">${items?.visibility}</span>
        </div>
        <div class="hero__repos-block_box2">
          <span class="hero__repos-box_span"></span>
          <span>CSS</span>
          <span>${items?.updated_at}</span>
        </div>
      </div>
      <div class="hero__repos2-block2">
        <span class="hero__repos2-block2_span">Star</span>
      </div>
    </div>
  `).join("");
};

const getData2 = ()=>{
  fetch(UrlRepos)
  .then((res) => res.json())
  .then((data) =>{
    render2(data)
  })
  .catch((error) => {
    console.log(error);
  })
}
getData2();

const render3 = (data) =>{
  herofollowbox.innerHTML = data?.map((idem)=>`
    <div class="hero__follow-img_block">
      <div>
        <a href="#">
          <img class="hero__follow-img" src="${idem?.avatar_url}" alt="follow-img">
        </a>
      </div>
      <div class="hero__follow-name">
        <a href="#">${idem?.login}</a>
      </div>
    </div>
    <div class="hero__follow-btn_block">
      <button class="hero__follow-btn">
        Unfollow
      </button>
    </div>
  `).join("")
};

const getData3 = () => {
  fetch(UrlFollowers)
  .then((res)=>res.json())
  .then((data)=>render3(data))
  .catch((error)=>{
    console.log(error);
  })
};
getData3();