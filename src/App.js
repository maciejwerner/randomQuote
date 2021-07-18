import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const render = async () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  body.classList.add('body');
  header.classList.add('header');
  main.classList.add('main');
  footer.classList.add('footer');
  
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);

  header.innerHTML =  await Header.render();
  await Header.after_render();

  main.innerHTML =  await Main.render();
  await Main.after_render();
  
  footer.innerHTML =  Footer.render();

};
window.addEventListener('load', render);
