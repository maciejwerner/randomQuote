import { data, authorData } from './utils';

const Main = {

  after_render : () => {
    document.querySelector('.button__author').addEventListener('click', async () => {
      
      const author = document.querySelector('.button__author').dataset.author;
      const authorQuotes = await authorData(author);
    
      document.querySelector('.main').innerHTML = '';

      return document.querySelector('.main').innerHTML = `
        <ul class="main--container">
          ${ authorQuotes.map(quote => `
            <li>
              <blockquote class="blockquote">
                <p class="par card__par">
                  "${ quote.quoteText }"
                </p>
              </blockquote>
            </li>
          `).join('\n')}
        </ul>
      `;
    });
  },

  render : async () => {
    document.querySelector('.main').innerHTML = '';

    const { quoteAuthor, quoteGenre, quoteText } = await data();

    return document.querySelector('.main').innerHTML = `
      <ul class="main--container">
        <li>
          <blockquote class="blockquote">
            <p class="par card__par">
              "${ quoteText }"
            </p>
          </blockquote>

          <button class="button button__author" data-author="${ quoteAuthor }">
            <div class="button__author--desc">
              <h3 class="author__title"> ${ quoteAuthor } </h3>
              <h4 class="author__description"> ${ quoteGenre } </h4>
            </div>
            <div>
              <span class="span span--arrow fas fa-long-arrow-alt-right"> </span>
            </div>
          </button>
        </li>
      </ul>
    `;
  },
};

export default Main;