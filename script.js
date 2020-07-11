// const rootUrl = 'http://192.168.43.224:3000';
const rootUrl = 'https://silicon-scraper.herokuapp.com';
document.querySelector('.dogCount').innerHTML = `${document.cookie} dogs left`;
const getRandomDog = async () => {
  try {
    let response = await fetch(`${rootUrl}/dog/`);
    if (response.ok)
      return await response.json();
  } catch (error) {
    console.log(error);
    return false;
  }
}

const loadRandomDog = async ()=> {
  const {url,count} = await getRandomDog();
  hideLoader();
  document.body.style.backgroundImage = `url(${url})`;
  document.cookie = count;
  document.querySelector('.dogCount').innerHTML = `${document.cookie} dogs left`;
  document.querySelector('.dogImage').src = url;
}

const hideLoader = ()=> document.querySelector('.loader').style.display='none';
loadRandomDog()

