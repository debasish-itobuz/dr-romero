const ul = document.getElementById("myLinks");
const bar = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const doctorsList = document.querySelector(".our-team-content-list");
const doctorContainer = document.querySelector(".our-team-content-images");
const viewAllDoctor = document.querySelector(".viewAllDoctor");

const doctors = [
  {
    name: " Dr. Kirti",
    role: "Cardiologists",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD MS",
  },
  {
    name: " Dr. Andrew",
    role: "Neurologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Barlina",
    role: "Neurologist",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MD",
  },

  {
    name: " Dr. Brendon",
    role: "Cardiologists",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Karolina",
    role: "Nefrologists",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD",
  },
  {
    name: " Dr. Rex",
    role: "Cardiologists",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS MS",
  },
  {
    name: " Dr. Andrew",
    role: "Nefrologists",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Kirti",
    role: "Gastroenterologist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MBBS MD",
  },
  {
    name: " Dr. Andrew",
    role: "Dermatologists",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Kirti",
    role: "Gynecologist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD MS",
  },
  {
    name: " Dr. Barlina",
    role: "ENT Specialist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD",
  },
  {
    name: " Dr. Brendon",
    role: "ENT Specialist",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Barlina",
    role: "Paediatrician",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MS",
  },
  {
    name: " Dr. Brendon",
    role: "Pulmonologist",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Andrew",
    role: "Endocrinologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Kirti",
    role: "Oncologist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD MS",
  },
  {
    name: " Dr. Ilia",
    role: "Cardiologists",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MBBS MD",
  },
  {
    name: " Dr. Brad",
    role: "Nefrologists",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Saas",
    role: "Gastroenterologist",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MS",
  },
  {
    name: " Dr. Drak",
    role: "Dermatologists",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Andrew",
    role: "Gynecologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MD",
  },
  {
    name: " Dr. Barlina",
    role: "ENT Specialist",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MD MS",
  },
  {
    name: " Dr. Andh",
    role: "Paediatrician",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. And",
    role: "Pulmonologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Prix",
    role: "Pulmonologist",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MBBS MD",
  },
  {
    name: " Dr. Kirti",
    role: "Endocrinologist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD MS",
  },
  {
    name: " Dr. And",
    role: "Oncologist",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MBBS",
  },
];

cross.style.display = "none";

function display() {
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}

const doctorCard = (item) => {
  return `<div class="profileImage">
  <img src=${item.imgUrl} alt="image" height="180px" width="176px">
  <div class="profileDetails">
    <p>${item.name}</p>
    <div style="display: flex; justify-content: space-between; align-items: center;">${item.details} <img
        src="./images/content/images/team/arrow.svg" alt="arrow"> </div>
  </div>
</div>`;
};

function viewAll() {
  doctorContainer.innerHTML = "";
  doctors.forEach((item, index) => {
    if (index >= 6) return;
    const outerDiv = document.createElement("div");
    outerDiv.innerHTML = doctorCard(item);
    doctorContainer.append(outerDiv);
  });
}

function showDoctors(role) {
  const newDoctors = doctors.filter((item) => item.role === role);
  doctorContainer.innerHTML = "";
  newDoctors.forEach((item) => {
    const outerDiv = document.createElement("div");
    outerDiv.innerHTML = doctorCard(item);
    doctorContainer.append(outerDiv);
  });
}

viewAll();

doctorsList.addEventListener("click", (e) => {
  if (e.target.className === "our-team-content-item") {
    showDoctors(e.target.innerText);
  }
});

viewAllDoctor.addEventListener("click", viewAll);

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