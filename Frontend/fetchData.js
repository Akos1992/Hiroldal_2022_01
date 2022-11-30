const backendURL = 'http://localhost:3000';

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
                            <img class="card-img-top" src="" alt="Card image cap">
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