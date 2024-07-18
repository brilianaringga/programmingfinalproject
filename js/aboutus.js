const parsing_skills = (data) => {
  let element = document.getElementById("skills-container");
  let skills = "";

  for (let index = 0; index < data.length; index++) {
    skills += `
        <div class="col-12 col-md-6">
            <div class="row m-0 mb-2">
                <div class="col-auto p-3 bg-dark fw-bold text-warning">${
                  data[index].percentage
                }%</div>
                <div class="col bg-warning d-flex align-items-center">
                ${data[index].skillName}
                </div>
                <div class="float-end bg-success" style="width: ${
                  100 - data[index].percentage
                }%"></div>
            </div>
        </div>
          `;
  }

  element.innerHTML = skills;
};

const get_skills = () => {
  fetch("data/skill.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_skills(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const parsing_teams = (data) => {
  let element = document.getElementById("teams-container");
  let teams = "";

  for (let index = 0; index < data.length; index++) {
    teams += `
          <div class="col text-center mb-2">
            <img
              src="${data[index].photoUrl}"
              class="object-fit-none border border-success border-5 rounded-circle mb-2 w-80"
              alt="team-photo"
            />
            <div class="row m-0 p-2 bg-secondary text-center rounded">
              <h3 class="text-light">${data[index].title}</h3>
            </div>
          </div>
            `;
  }

  element.innerHTML = teams;
};

const get_teams = () => {
  fetch("data/teams.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_teams(data.data);
      data_local = data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

get_skills();
get_teams();
