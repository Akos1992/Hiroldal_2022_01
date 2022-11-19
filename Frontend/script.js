let dummyNews = [{id: 1, title: 'Vidám percek', category: 1, 
text: 'Gulyás Gergely a tegnapi kormányinfón kihirdette az általános vidám perceket visszavonásig.', headline: true, author: 'Maró Melinda', image:''},
{id: 2, title: 'Vidám percek2', category: 1, 
text: 'Gulyás Gergely a tegnapi kormányinfón kihirdette az általános vidám perceket visszavonásig.', headline: true, author: 'Maró Melinda', image:''}];

let content = '';

dummyNews.forEach(p => {
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
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#main").innerHTML = content;
  }, false);
