document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const scrollIndicator = document.querySelector('.scroll-indicator');
  
    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: scrollButton.offsetTop,
        behavior: 'smooth'
      });
    });
    
    if (isButtonVisible(scrollButton)) {
        scrollIndicator.classList.remove('active');
      } else {
        scrollIndicator.classList.add('active');
      }

    // window.addEventListener('DOMContentLoaded', function() {
    //   if (isButtonVisible(scrollButton)) {
    //     scrollIndicator.classList.remove('active');
    //   } else {
    //     scrollIndicator.classList.add('active');
    //   }
    // });
  
    window.addEventListener('scroll', function() {
      if (isButtonVisible(scrollButton)) {
        scrollIndicator.classList.remove('active');
      } else {
        scrollIndicator.classList.add('active');
      }
    });
  
    function isButtonVisible(element) {
      const buttonRect = element.getBoundingClientRect();
      return buttonRect.top >= 0 && buttonRect.bottom <= window.innerHeight;
    }
  });