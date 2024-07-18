localStorage.setItem("portofolio-filter", "");

let data_local;
let list_filter;

// portofolio filter function
const parsing_portofolio = (data) => {
  let element = document.getElementById("portofolio-container");
  let portofolio = "";
  let filteredItem = [];

  if (localStorage.getItem("portofolio-filter") != "") {
    filteredItem = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].category == localStorage.getItem("portofolio-filter")) {
        filteredItem.push(data[index]);
      }
    }
  } else {
    filteredItem = [];
    for (let index = 0; index < data.length; index++) {
      filteredItem.push(data[index]);
    }
  }

  if (filteredItem.length != 0) {
    for (let index = 0; index < filteredItem.length; index++) {
      portofolio += `
           <div class="col">
                <div class="card border-warning border-3">
                <img src="${filteredItem[index].imageUrl}" class="card-img-top" alt="portofolio-image">
                <div class="card-body">
                    <h5 class="card-title">${filteredItem[index].title}</h5>
                    <p class="card-text">${filteredItem[index].lastUpdate}</p>
                </div>
                </div>
            </div>
          `;
    }
  }

  element.innerHTML = portofolio;
};

const get_portofolios = () => {
  fetch("data/portofolio.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_portofolio(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const filter_portofolio = (category) => {
  if (category != "All") {
    localStorage.setItem("portofolio-filter", category);
    parsing_portofolio(data_local);
  } else {
    localStorage.setItem("portofolio-filter", "");
    parsing_portofolio(data_local);
  }
};

get_portofolios();
