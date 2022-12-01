
function checkCategoryRoute() {
    var hash = window.location.hash;
    const catUrlBase = '#/kat/';
    if (hash.startsWith(catUrlBase)) {
        const categoryId = parseInt(hash.substring(catUrlBase.length, hash.length));
        fetchNewsByCategory(categoryId);
    }
}

window.onload = () => {
    fetchNews();
    fetchCategories();
}

window.addEventListener('hashchange', () => {
    checkCategoryRoute();
});