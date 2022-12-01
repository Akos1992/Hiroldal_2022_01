const backendURL = 'http://localhost:3000';

let newsWithoutHeadline = [];
let headlineNews;
let content = '';

function fetchNews() {
    fetch(`${backendURL}/news`)
        .then(response => {
            response.json().then(jsonData => {
                jsonData.forEach(p => {
                    if (!p.headline) {
                        newsWithoutHeadline.push(p);
                    } else {
                        headlineNews = p;
                    }
                })

                if (headlineNews && headlineNews.length > 0) {
                    content = `
                        <div class="row">
                            <div class="col-sm">
                                <a href="" style="text-decoration: none; width: 100%;" class="card">
                                    <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff&text=Ez+itt+egy+pr%C3%B3ba" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">${headlineNews.cikkCim}</h5>
                                        <p class="card-text">${headlineNews.cikkLead}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        `}
                if (newsWithoutHeadline.length > 0) {
                    content += `<div class="row">`;
                }

                newsWithoutHeadline.forEach(p => {
                    content += `
                        <div class="col-sm">
                            <a href="" style="text-decoration: none; width: 18rem;" class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff&text=Ez+itt+egy+pr%C3%B3ba" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${p.cikkCim}</h5>
                                    <p class="card-text">${p.cikkLead}</p>
                                </div>
                            </a>
                        </div>
                        `
                }
                )

                if (newsWithoutHeadline.length > 0) {
                    content += `</div>`;
                }
                document.querySelector("#main").innerHTML = content;
            })
        })
        .catch(err => {
            alert('Hiba a hírek lekérésekor')
            console.log(err);
        })
}

function fetchCategories() {
    fetch(`${backendURL}/news/categories`)
        .then(response => {
            response.json().then(jsonData => {
                for (const category of jsonData) {
                    var categoryHTML = `\
                    <li class="nav-item active"> \
                        <a class="nav-link" href="#/kat/${category.katID}">${category.katNev}</a> \
                    </li>`;
                    document.getElementById('categories').innerHTML += categoryHTML;
                }
            })

        })
        .catch(err => {
            alert('Hiba a kategóriák lekérésekor')
            console.log(err);
        })
}

function fetchNewsByCategory(categoryId) {
    fetch(`${backendURL}/news/categories/${categoryId}`)
        .then(response => {
            response.json().then(news => {
                document.querySelector('#main').innerHTML = 'HTML';
                for (const newsItem of news) {
                    var newsItemHTML = `<div class="col-sm">
                        <a href="" style="text-decoration: none; width: 18rem;" class="card">
                            <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff&text=Ez+itt+egy+pr%C3%B3ba" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${newsItem.cikkCim}</h5>
                                <p class="card-text">${newsItem.cikkLead}</p>
                            </div>
                        </a>
                    </div>`;
                    document.querySelector('#main').innerHTML = newsItemHTML;
                }

            });
        })
}