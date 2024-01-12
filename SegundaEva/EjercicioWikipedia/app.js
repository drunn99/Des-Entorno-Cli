const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

const page_url = 'href=http://en.wikipedia.org/?curid=${pageid}';

formDOM.addEventListener("submit", (ev) => {
  ev.preventDefault();
  getResults(inputDOM.value);
})

function getResults(searchedWord) {
  fetch(url + searchedWord)
    .then(response => response.json())
    .then(data => {
      let searchResult = ""
      for (const key in data.query.search) {
        let title = data.query.search[key].title;
        let pageid = data.query.search[key].pageid;
        let snippet = data.query.search[key].snippet;
        searchResult += createNewArticle(pageid,title,snippet);
      }
      resultsDOM.innerHTML = searchResult;
    });
}


function createNewArticle(pageid, title, snippet) {
  return `<div class="articles">
  <a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
       <h4>${title}</h4>
       <p>
         ${snippet}
       </p>
     </a>
   </div>`;
}



