const got = require('got');
const cheerio = require('cheerio');
const {CookieJar} = require('tough-cookie');
const CookieFileStore = require('tough-cookie-file-store').FileCookieStore

const cookieJar = new CookieJar(new CookieFileStore('./cookie.json'));


async function getLoginData() {
  if ( !cookieJar.store.idx['list.am'] ) {

      const response = await got.get('https://list.am/login', {
        headers: {
          'referer': 'https://list.am',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
        },
        cookieJar
      });
      

      let $ = cheerio.load(response.body);

      const timestamp = $('#idTimestamp').val();

      console.log(timestamp);

      const searchParams = new URLSearchParams({
        your_email: "barsegyan.93@bk.ru",
        password: "andriell93",
        timestamp,
        _form_action: "Login",
        loginform_visited: 1
      });
      


      const loginResponse = await got.post('https://list.am/login', {
        cookieJar,
        headers: {
          'referer': 'https://list.am',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        },
        searchParams
      });

    }

    return true;

}

async function getPosts() {
  const postsResponse = await got.get('https://list.am/my', {
    cookieJar,
    headers: {
      'referer': 'https://list.am',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
    }
  });

  const $ = cheerio.load(postsResponse.body);

  const ids = [];

  $('.dle > .l > div').each((index, elem) => {
    ids.push($(elem).attr('href').replace('/item/', ''));
  });

  console.log(ids);

  return ids;
}

async function renewPost(id) {

  const searchParams = new URLSearchParams({
    _form_action: "",
    postform_visited: 1
  });

  const postResponse = await got.post(`https://list.am/?w=7&i=${id}`, {
    cookieJar,
    headers: {
      'referer': 'https://list.am',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
    },
    searchParams
  });

  console.log(postResponse.body, postResponse.status, postResponse.statusCode);

  return true;
}


Promise.resolve()
  .then(async () => await getLoginData())
  .then(async () => await getPosts())
  .then(ids => {
    ids.forEach(async (id) => {
      console.log('renew', id);
      return await renewPost(id);
    });
  });
