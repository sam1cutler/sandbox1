'use strict';
/********** RENDER FUNCTIONS **********/
const renderBooksResult = () => {

    return `
        <div>
            <p>Sorry, no books available right now :(</P
        </div>
    `

}


/********** API REQUEST FUNCTIONS **********/
const handleBooksRequest = () => {

    $('#results-title').text('Books!');

    $('#results-container').html('');
    $('#results-container').html(renderBooksResult());

    $('.content-container').removeClass('hidden');

}


/********** EVENT HANDLERS **********/

function watchBooksRequest() {
    console.log('books listening')
    $('#options-container').on('click','#books-button', function(event) {
        event.preventDefault();
        handleBooksRequest();
    })
}

function watchMoviesRequest() {
    console.log('movies listening')
}

function watchArticlesRequest() {
    console.log('articles listening')
}


/*-- Run event handlers --*/
function setupListeners() {
    watchBooksRequest();
    watchMoviesRequest();
    watchArticlesRequest();
}

$(setupListeners);