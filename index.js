// Languages used in bilingual document
const LANGUAGE_FROM = 'jp'
const LANGUAGE_TO   = 'en'

// Fetch JSON data and render as HTML
async function getText(){
  fetch('./my_text.json')
  .then(res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })
  .then(myJSON => {

    const elem = document.getElementById('muh-content')
    let stuffToRender = myJSON.paragraphs.reduce((accumulator, currentElem) => {
      return accumulator + '<div class="bilingual-box">'
        + '<div class="language-from" lang=\''
        + LANGUAGE_FROM
        + '\'>'
          + currentElem[LANGUAGE_FROM]
        + '</div>'

        + '<div class="language-to" lang=\''
        + LANGUAGE_TO
        + '\'>'
          + currentElem[LANGUAGE_TO]
        + '</div>'

        + '<div class="commentary" lang=\''
        + LANGUAGE_FROM
        + '\'>'
          + currentElem['comments']
        + '</div>'
      + '</div>'
    }, '');

    elem.innerHTML = stuffToRender;
  })
  .catch(error => {
    return {};
  });
}

// Toggle commentary visibility
let isHidden = false; // Initialize as false

function toggleCommentary(){
  elms = document.getElementsByClassName("commentary")
  if (!isHidden) {
    for (let i = 0; i < elms.length; i++) {
      elms[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < elms.length; i++) {
      elms[i].style.display = "block";
    }
  }
  isHidden = !isHidden; // Toggle value
}


