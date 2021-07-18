import { reloadPage } from "./utils";

const Header = {

  after_render : () => {
    const body = document.querySelector('.body');
    const spanRound = document.querySelector('.span--round');
    let darkMode = localStorage.getItem('darkMode');

    const darkModeEnable = () => {
      body.classList.add('darkMode');
      spanRound.classList.add('transform');
      localStorage.setItem('darkMode', 'enabled');
    }

    const darkModeDisable = () => {
      body.classList.remove('darkMode');
      spanRound.classList.remove('transform');
      localStorage.setItem('darkMode', null);
    }

    if(darkMode === 'enabled') {
      darkModeEnable();
    }

    document.querySelector('.button--darkmode').addEventListener('click', () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") darkModeEnable();
      else darkModeDisable();
    });  
  },

  render : () => {
    return `
      <nav class='nav'>
        <button class="button button--random" type="button"> 
          random 
          <span class="span span--icon fas fa-sync-alt"> </span>
        </button> 
  
        <button class="button button--darkmode" type="button">
          <span class="span span--round"> </span>
        </button>
      </nav>
    `;
  }, 
};

export default Header;
