export const data = async () => {
  const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';

  try {
    const request = await fetch(url);

    if (request.ok) {
      const response = await request.json();
      return response.data[0];
    } else {
      throw new Error(`Http error: ${ request.status }`);
    }

  } catch (err) {
    console.log(err);
  }
};

export const authorData = async (author) => {
  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`;

  try {
    const request = await fetch(url);

    if(request.ok) {
      const response = await request.json();
      return response.data;
    } else {
      throw new Error(`Http error: ${ request.status }`);
    }

  } catch (err) {
    console.log(err);
  }
};

export const reloadPage = () => {
  window.location.reload();
};