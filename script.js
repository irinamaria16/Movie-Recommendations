function openArticles(){
    window.location.href = "index.html";
}

function openContact(){
    window.location.href = "contact.html";
}

function openReviews(){
    window.location.href = "reviews.html";
}

window.onload = function() {
    let images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.style.width = "300px"; 
        img.style.height = "444px"; 
        img.style.objectFit = "cover";
    });
};
