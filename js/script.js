// footer tweet
const parsing_tweet = (data) => {
  let element = document.getElementById("tweet-container");
  let tweets = "";

  for (let index = 0; index < data.length; index++) {
    tweets += `
     <div class="tweet-item">
        <i class="${data[index].icon}"></i>
        <span>
        ${data[index].text}
        design
        </span>
    </div>
    `;
  }

  element.innerHTML = tweets;
};

const get_tweets = () => {
  fetch("data/footer-tweet.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_tweet(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// footer photos
const parsing_photo = (data) => {
  let element = document.getElementById("photo-container");
  let photos = "";

  for (let index = 0; index < data.length; index++) {
    photos += `
        <div class="col-4 vh-5 position-relative">
            <img src="${data[index].imgUrl}" alt="photo-stream-image" />
        </div>
      `;
  }

  element.innerHTML = photos;
};

const get_footer_photos = () => {
  fetch("data/footer-photo.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      parsing_photo(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// on document ready
get_tweets();
get_footer_photos();
