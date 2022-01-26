const text_tabs = document.querySelectorAll('#text_tab');
const leading_icon_tabs = document.querySelectorAll('#leading_icon_tab');
const top_icon_tabs = document.querySelectorAll('#top_icon_tab');


text_tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        text_tabs.forEach(tab => tab.classList.remove('tab__container--active'));
        tab.classList.add('tab__container--active');
    });
});

leading_icon_tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        leading_icon_tabs.forEach(tab => tab.classList.remove('tab__container--active'));
        tab.classList.add('tab__container--active');
    });
});

top_icon_tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        top_icon_tabs.forEach(tab => tab.classList.remove('tab__container--active'));
        tab.classList.add('tab__container--active');
    });
});