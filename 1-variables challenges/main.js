/* create 3 variables [title, description, date]..all in one statement
title content is "Elzero"
description content is "Elzero Web School"
date content is "25/10"
 */
let mainTitle = "Elzero" , mainDescription= "Elzero Web School" , displayDate= "25/10";

/* create variable contains div and this div contains 
--h3 for title
--p for paragraph
span for time */

let cardMarkup = `
  <div class="card">
    <h3>${mainTitle}</h3>
    <p>${mainDescription}</p>
    <span>${displayDate}</span>
  </div>`
  ;

  /* add this card to page 4 times */
  document.write(cardMarkup.repeat(4));


