const ul = document.getElementById("myLinks");
const bar = document.querySelector(".bars");
const cross = document.querySelector(".cross");

cross.style.display = "none";

function display() {
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}

bar.addEventListener("click", () => {
  bar.style.display = "none";
  cross.style.display = "block";
  display();
});

cross.addEventListener("click", () => {
  cross.style.display = "none";
  bar.style.display = "block";
  display();
});

const doctors = [
  {
    name:" Dr. Andrew",
    role:"Neurologist",
    imgUrl:"./images/content/images/team/andrew.webp",
    details: "MBBS"
  },

  {
    name:" Dr. Kirti",
    role:"Cardiologists",
    imgUrl:"./images/content/images/team/kirti.webp",
    details: "MD"
  },
  {
    name:" Dr. Barlina",
    role:"Neurologist",
    imgUrl:"./images/content/images/team/lady.webp",
    details: "MD"
  },

  {
    name:" Dr. Brendon",
    role:"Cardiologists",
    imgUrl:"./images/content/images/team/brendon.webp",
    details: "MBBS"
  },
  {
    name:" Dr. Barlina",
    role:"Neurologist",
    imgUrl:"./images/content/images/team/lady.webp",
    details: "MD"
  },

  {
    name:" Dr. Brendon",
    role:"Cardiologists",
    imgUrl:"./images/content/images/team/brendon.webp",
    details: "MBBS"
  },
  {
    name:" Dr. Andrew",
    role:"Neurologist",
    imgUrl:"./images/content/images/team/andrew.webp",
    details: "MBBS"
  },

  {
    name:" Dr. Kirti",
    role:"Cardiologists",
    imgUrl:"./images/content/images/team/kirti.webp",
    details: "MD"
  },
]

const doctorCard = (item)=>{
  return `<div class="imghead">
  <img src=${item.imgUrl} alt="image" height="180px" width="176px">
  <div class="imgtail">
    <p>${item.name}</p>
    <div style="display: flex; justify-content: space-between; align-items: center;">${item.details} <img
        src="./images/content/images/team/arrow.svg" alt="arrow"> </div>
  </div>
</div>`
}

const doctorsList = document.querySelector('.our-team-content-list')
const doctorContainer = document.querySelector('.our-team-content-images')


function viewAll(){
  doctors.forEach((item)=>{
    const outerDiv = document.createElement('div')
    outerDiv.innerHTML = doctorCard(item)
    doctorContainer.append(outerDiv)
  })
}

viewAll()


function showDoctors(role) {
    // console.log(role)
    const newDoctor = doctors.filter((item)=>item.role === role)
    // console.log(newDoctor)
    doctorContainer.innerHTML =''
    newDoctor.forEach((item)=>{
      const outerDiv = document.createElement('div')
      outerDiv.innerHTML = doctorCard(item)
      doctorContainer.append(outerDiv)
    })

}

doctorsList.addEventListener('click', (e)=>{
  // console.log(e.target.className)
  if (e.target.className === 'our-team-content-item')
    {
      // console.log(e.target.innerText)
      showDoctors(e.target.innerText)
      
    }
})

