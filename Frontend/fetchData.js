const backendURL = 'http://localhost:3000';

function fetchCategories() {
    fetch(`${backendURL}/news/categories`)
    .then(response => {
        response.json().then(jsonData => {
            console.log(jsonData);
            
            for (const category of jsonData) {
                var categoryHTML = `\
                    <li class="nav-item active"> \
                        <a class="nav-link" href="#">${category.katNev}</a> \
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