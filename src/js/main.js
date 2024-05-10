const ul = document.getElementById("myLinks");
const bar = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const doctorsList = document.querySelector(".our-team-content-list");
const doctorContainer = document.querySelector(".our-team-content-images");
const viewAllDoctor = document.querySelector(".viewAllDoctor");
const searchDoctor = document.querySelector(".our-team-input");
const patients = document.querySelector(".aqua");
const surgeries = document.querySelector(".bisque");
const brilliantDocs = document.querySelector(".pink");

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
    name: " Dr. Alex",
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
    name: " Dr. Bran",
    role: "Dermatologists",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Quet",
    role: "Gynecologist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD MS",
  },
  {
    name: " Dr. Balina",
    role: "ENT Specialist",
    imgUrl: "./images/content/images/team/kirti.webp",
    details: "MD",
  },
  {
    name: " Dr. Dron",
    role: "ENT Specialist",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Sabista",
    role: "Paediatrician",
    imgUrl: "./images/content/images/team/lady.webp",
    details: "MS",
  },
  {
    name: " Dr. Holf",
    role: "Pulmonologist",
    imgUrl: "./images/content/images/team/brendon.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Rex",
    role: "Endocrinologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MBBS",
  },
  {
    name: " Dr. Puz",
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
    name: " Dr. Rew",
    role: "Gynecologist",
    imgUrl: "./images/content/images/team/andrew.webp",
    details: "MD",
  },
  {
    name: " Dr. Balina",
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
    name: " Dr. Yusuf",
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
    name: " Dr. Lim",
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

let val = 0;
const patientsIntervalId = setInterval(() => {
  if (val < 100) {
    val = val + 10;
    patients.innerText = val;
  }

  else if (val >= 100) {
    patients.innerText = (val / 1000).toFixed(1) + "k";
    val += 100;
  }
  
  if (val === 5000) {
    patients.innerText = "5k";
    clearInterval(patientsIntervalId);
  }
}, 100);

const surgeriesIntervalId = setInterval(() => {
  surgeries.innerText = Number(surgeries.innerText) + 1;
  if (Number(surgeries.innerText) === 627) clearInterval(surgeriesIntervalId);
}, 1);

const briliiantIntervalId = setInterval(() => {
  brilliantDocs.innerText = Number(brilliantDocs.innerText) + 1;
  if (Number(brilliantDocs.innerText) === 37)
    clearInterval(briliiantIntervalId);
}, 60);

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
    <div class="profileArrow">${item.details} <img
        src="./images/content/images/team/arrow.svg" alt="arrow" height="35px" width="35px"> </div>
  </div>
</div>`;
};

function displayDoctors(doctors) {
  doctorContainer.innerHTML = "";
  doctors.forEach((item) => {
    // if (index >= 6) return;
    const outerDiv = document.createElement("div");
    outerDiv.innerHTML = doctorCard(item);
    doctorContainer.append(outerDiv);
  });
}

function showDoctors(role) {
  const newDoctors = doctors.filter((item) => item.role === role);
  // doctorContainer.innerHTML = "";
  // newDoctors.forEach((item, index) => {
  //   if (index >= 6) return;
  //   const outerDiv = document.createElement("div");
  //   outerDiv.innerHTML = doctorCard(item);
  //   doctorContainer.append(outerDiv);
  // });
  displayDoctors(newDoctors);
}

function searchDoctors(value) {
  const newDoctors = doctors.filter(
    (item) =>
      item.role.toLowerCase().includes(value.toLowerCase()) ||
      item.name.toLowerCase().includes(value.toLowerCase())
  );
  // doctorContainer.innerHTML = "";
  // newDoctors.forEach((item, index) => {
  //   if (index >= 6) return;
  //   const outerDiv = document.createElement("div");
  //   outerDiv.innerHTML = doctorCard(item);
  //   doctorContainer.append(outerDiv);
  // });
  displayDoctors(newDoctors);
}

displayDoctors(doctors);

doctorsList.addEventListener("click", (e) => {
  if (e.target.className === "our-team-content-item") {
    showDoctors(e.target.innerText);
    searchDoctor.value = "";
  }
});

viewAllDoctor.addEventListener("click", () => {
  displayDoctors(doctors);
  searchDoctor.value = "";
});

searchDoctor.addEventListener("input", (e) => {
  // console.log(e.target.value)
  searchDoctors(e.target.value);
});

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
