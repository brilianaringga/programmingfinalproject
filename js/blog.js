localStorage.setItem("pages", "1");

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

// tags
const generate_post_component = (data) => {
  let result = "";

  if (data.type == "ads") {
    result = `
            <div class="card mb-3 p-3 bg-warning-subtle">
                <span class="fw-bold fs-5 fst-italic">
                    ${data.text}
                </span>
                <span class="text-end">${data.author}</span>
            </div>
        `;
  } else {
    result = `
            <div class="card mb-3 bg-warning-subtle">
                <img
                    src="${data.imageUrl}"
                    class="card-img-top"
                    alt="blog-photo"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${data.title}
                </span>
                    </h5>
                    <p class="card-text">
                        ${data.text}
                </span>
                    </p>
                    <div class="d-flex justify-content-between">
                        <span
                        ><i class="fa-solid fa-heart text-danger"></i>15</span
                        >
                        <span>by ${data.author} / ${data.comments} comments / ${data.date} </span>
                    </div>
                </div>
            </div>
        `;
  }

  return result;
};

const parsing_blogs = (data) => {
  let element1 = document.getElementById("posts-container1");
  let element2 = document.getElementById("posts-container2");
  let col1 = "";
  let col2 = "";

  for (let index = 0; index < data.length; index++) {
    if (index % 2 == 0) {
      col1 += generate_post_component(data[index]);
    } else {
      col2 += generate_post_component(data[index]);
    }
  }

  element1.innerHTML = col1;
  element2.innerHTML = col2;
};

const get_blogs = () => {
  fetch("data/posts.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_blogs(data.data);
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

get_blogs();
