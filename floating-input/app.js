const body    = document.body;
const input   = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

//fucntions

function showFloater(){

    body.classList.add('show-floater');
}

function closeFloater(){
    if (body.classList.contains('show-floater')){
    body.classList.remove('show-floater');
    }
}


//addEventListener
input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', showFloater);
overlay.addEventListener('click', closeFloater);

//==============================================

const bookmarkList  = document.querySelector('.bookmarks-lists');
const bookmarkForm  = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
const bookmarks     = JSON.parse(localStorage.getItem('bookmarks'))||[];


fillBookMarkLists(bookmarks);


function createBookmark(e){
    e.preventDefault();
    
    //add a new bookmarks
    const title         = bookmarkInput.value;
    const bookmark =  {
        title: title
    };

    bookmarks.push(bookmark);
    fillBookMarkLists(bookmarks);
    storeBookmark(bookmarks);
    bookmarkForm.reset();
    // save the bookmarks to local storage



    // const title         = bookmarkInput.value;
    // const bookmark      = document.createElement('a');
    // bookmark.className  = 'bookmark';
    // bookmark.innerText  = title;
    // bookmark.href       = '#';
    // bookmark.target     = '_blank';
    // console.log(bookmark);
    // bookmarkList.appendChild(bookmark);

    // bookmarkForm.reset();

}

function fillBookMarkLists(bookmarks = []){

    // const bookmarkHTML = bookmarks.map((bookmark) => {

    //     return `
    //     <a href="#" class="bookmark">
    //         ${bookmark.title}
    //     </a>
    // `;

    // }).join();
   
     let bookmarkHTML = '';

    for (let i = 0; i < bookmarks.length; i++) {
        bookmarkHTML += `
        <a href="#" class="bookmark" data-id="${i}">
            <div class="img"></div>
            <div class="title">${bookmarks[i].title}</div>
            <span class="glyphicon glyphicon-remove"></span>
        </a>
    `;
        
    }
    bookmarkList.innerHTML = bookmarkHTML;
    console.log(bookmarkHTML);
   
}

function storeBookmark(bookmarks = []){
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
}


function removeBookmark(e) {

     //find the index of being click
    if (!e.target.matches('.glyphicon-remove')) return;

    const index = e.target.parentNode.dataset.id;
    console.log(index);
     // remove from the bookmarks using splice
    bookmarks.splice(index,1);
    //fill the list
    fillBookMarkLists(bookmarks);
    //fill back into the storage
    storeBookmark(bookmarks);

}

bookmarkForm.addEventListener('submit' , createBookmark);
bookmarkList.addEventListener('click',removeBookmark);
