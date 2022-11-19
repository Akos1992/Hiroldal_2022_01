let dummyNews = [{id: 1, title: 'Vidám percek', category: 1, 
text: 'Gulyás Gergely a tegnapi kormányinfón kihirdette az általános vidám perceket visszavonásig.', headline: false, author: 'Maró Melinda', image:''},
{id: 2, title: 'Vidám percek2', category: 1, 
text: 'Gulyás Gergely a tegnapi kormányinfón kihirdette az általános vidám perceket visszavonásig.', headline: true, author: 'Maró Melinda', image:''}];

let content = '';
let newsWithoutHeadline = [];
let headlineNews;

dummyNews.forEach(p => {
    if (!p.headline) {
        newsWithoutHeadline.push(p);
    } else {
        headlineNews = p;
    }
})

content =
        `
        <div class="row">
            <div class="col-sm">
                <div class="card" style="width: 100%">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${headlineNews.title}</h5>
                        <p class="card-text">${headlineNews.category}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        `
if (newsWithoutHeadline.length > 0) {
    content += `<div class="row">`;
}

newsWithoutHeadline.forEach(p => {
        content += `
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">${p.category}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `
    }
)

if (newsWithoutHeadline.length > 0) {
    content += `</div>`;
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#main").innerHTML = content;
  }, false);
