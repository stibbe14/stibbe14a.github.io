// nog in werk//



function turnfunctie(){
    const pageTurnBtn = document.querySelectorAll('.volgendepaginaknop');

    pageTurnBtn.forEach((el,index) => {
        el.onclick = () => el.getAttribute('')
            const pageTurnID =  el.getAttribute('data-page');
            console.log(pageTurnID + ' is page turn')
            const pageTurn = document.getElementById(pageTurnID);
    
            if (pageTurn.classList.contains('turn')){
                pageTurn.classList.remove('turn');
            }
            else{
                pageTurn.classList.add('turn');
            }
    
    
    })

}

const pageFlip = new St.PageFlip(htmlParentElement, settings);
pageFlip.loadFromImages(['path/to/image1.jpg', 'path/to/image2.jpg']);
pageFlip.loadFromHtml(items);

const pageFlip = new PageFlip(document.getElementById('book'),
    {
        width: 400, // required parameter - base page width
        height: 600  // required parameter - base page height
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));


