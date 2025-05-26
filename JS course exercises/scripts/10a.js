const testButton = document.querySelector('.js-button'); 

    console.log(testButton.classList.contains('js-button'))
    
    const gamingButton = document.querySelector('.gaming-button');
    const musicButton = document.querySelector('.music-button');
    const techButton = document.querySelector('.tech-button');

    function toggleButton(name) {
      if (name.classList.contains('is-toggled')) {
        name.classList.remove('is-toggled');
      } else {
        name.classList.add('is-toggled');
      }
      if (name === gamingButton) {
        musicButton.classList.remove('is-toggled');
        techButton.classList.remove('is-toggled');
      } else if (name === musicButton) {
        gamingButton.classList.remove('is-toggled');
        techButton.classList.remove('is-toggled');
      } else if (name === techButton) {
        gamingButton.classList.remove('is-toggled');
        musicButton.classList.remove('is-toggled');
      }
    }