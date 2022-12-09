function populateHeader() {
const pages = ['Home', 'Menu', 'Contact']; //import pages.length ? instead of static list
const nav = document.querySelector('nav');

pages.forEach(page => {
        const navItem = document.createElement('div');
        navItem.classList = 'navItem';
        navItem.id = page;
        console.log(page);
        navItem.textContent = page;
        nav.appendChild(navItem);
})
};
export default populateHeader;