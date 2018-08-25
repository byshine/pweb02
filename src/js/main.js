const helloworld = () => {
  console.log('Hello');
};

helloworld();

async function fetchJoke() {
  console.log('Fetching Joke..');

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

(async function getJoke() {
  try {
    const joke = await fetchJoke();
    console.log('Joke Should Display?');
    console.log(JSON.stringify(joke));
    console.log(joke);
  } catch (e) {
    console.log(e);
  }
})();

(function one() {
  return one;
})();
