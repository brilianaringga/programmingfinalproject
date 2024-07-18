const parsing_categories = (data) => {
  let element = document.getElementById("categories-container");
  let categories = "";

  for (let index = 0; index < data.length; index++) {
    categories += `
        <div class="col-6">
            <i class="${data[index].icon}"></i>
            <p>${data[index].name}</p>
        </div>
            `;
  }

  element.innerHTML = categories;
};

const get_categories = () => {
  fetch("data/categories.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_categories(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// archieve
const parsing_archieves = (data) => {
  let element = document.getElementById("archieve-container");
  let skills = "";

  for (let index = 0; index < data.length; index++) {
    skills += `
          <div class="col-6">
              <i class="${data[index].icon}"></i>
              <p>${data[index].month} (${data[index].total})</p>
          </div>
              `;
  }

  element.innerHTML = skills;
};

const get_archieves = () => {
  fetch("data/archieve.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_archieves(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// ppopular post
const parsing_popularpost = (data) => {
  let element = document.getElementById("popular-container");
  let posts = "";

  for (let index = 0; index < data.length; index++) {
    posts += `
            <div class="col-12 p-3">
                <div class="row">
                    <img src="${data[index].photoUrl}" style="width: 60%; height:100px" alt="post-image" />
                </div>
                <div class="row">
                    <a href="${data[index].url}" >${data[index].text}</a>
                </div>
                <div class="row text-end mt-2">
                    <span>${data[index].date} <i class="fa-solid fa-heart text-danger"></i> ${data[index].likes}</span>
                </div>
                
                
            </div>
                `;
  }

  element.innerHTML = posts;
};

const get_popularpost = () => {
  fetch("data/popular-post.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_popularpost(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// tags
const parsing_tags = (data) => {
  let element = document.getElementById("tags-container");
  let tags = "";

  for (let index = 0; index < data.length; index++) {
    tags += `
              <div class="d-inline-flex px-2 py-1 bg-warning text-dark mb-2">
                ${data[index].name}
              </div>
                  `;
  }

  element.innerHTML = tags;
};

const get_tags = () => {
  fetch("data/tags.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_tags(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

get_categories();

get_archieves();

get_popularpost();

get_tags();
