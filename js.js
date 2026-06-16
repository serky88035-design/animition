const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if( entry.isIntersecting){
            entry.target.classList.add("animate")
        }
        else{
            entry.target.classList.remove("animate")
        }
    })
} , {threshold: 0.2});

document.querySelectorAll("h1, .z1, h2, .z2").forEach(el =>{
    observer.observe(el);
});