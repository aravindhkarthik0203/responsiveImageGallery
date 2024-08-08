// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let thumbnails = document.querySelectorAll('.thumbnail .item');

// // config param
// let countItem = items.length;
// let itemActive = 0;
// // event next click
// next.onclick = function(){
//     itemActive = itemActive + 1;
//     if(itemActive >= countItem){
//         itemActive = 0;
//     }
//     showSlider();
// }
// //event prev click
// prev.onclick = function(){
//     itemActive = itemActive - 1;
//     if(itemActive < 0){
//         itemActive = countItem - 1;
//     }
//     showSlider();
// }
// // auto run slider
// let refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)
// function showSlider(){
//     // remove item active old
//     let itemActiveOld = document.querySelector('.slider .list .item.active');
//     let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
//     itemActiveOld.classList.remove('active');
//     thumbnailActiveOld.classList.remove('active');

//     // active new item
//     items[itemActive].classList.add('active');
//     thumbnails[itemActive].classList.add('active');

//     // clear auto time run slider
//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(() => {
//         next.click();
//     }, 5000)
// }

// // click thumbnail
// thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener('click', () => {
//         itemActive = index;
//         showSlider();
//     })
// })

// // document.getElementById('searchButton').addEventListener('click', function() {
// //     // Here you can add the logic to perform the search by categories
// //     var searchInputValue = document.getElementById('searchInput').value;
// //     // Perform search based on the value in the search input
// //     console.log("Search by category: " + searchInputValue);
// //     // Example: You can make an AJAX request to fetch images based on the category
// // });

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let searchInput = document.getElementById('searchInput');

// Your array of image names
let imageNames = ["Image 1", "Image 2", "Image 3", "Image 4"]; // Add your image names here

// Filtered items based on search
let filteredItems = items;
let filteredThumbnails = thumbnails;

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function(){
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}

// event prev click
prev.onclick = function(){
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

// Function to filter items based on search input
function filterItems() {
    let searchValue = searchInput.value.toLowerCase();
    filteredItems = Array.from(items).filter((item, index) => {
        return imageNames[index].toLowerCase().includes(searchValue);
    });
    filteredThumbnails = Array.from(thumbnails).filter((thumbnail, index) => {
        return imageNames[index].toLowerCase().includes(searchValue);
    });
    countItem = filteredItems.length;
    itemActive = 0;
    showSlider();
}

// Event listener for search input
searchInput.addEventListener('input', filterItems);

function showSlider(){
    // Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Active new item
    filteredItems[itemActive].classList.add('active');
    filteredThumbnails[itemActive].classList.add('active');

    // Clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

