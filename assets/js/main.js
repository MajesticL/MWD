document.querySelectorAll('a[href^="#"]:not(.card-link)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.card-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const card = link.closest('.card');
        const info = card.querySelector('.card-more-info');
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "block";
        } else {
            info.style.display = "none";
        }
    })
});
