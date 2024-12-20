let loader = document.querySelector('.loader-wrapper');
    
if(loader) {
    setTimeout(() => {
        loader.classList.add('fade-out');
        // Allow scrolling after loader fades out
        document.body.style.overflow = '';  // Reset to default or 'auto' if you prefer
    }, 3000);
}