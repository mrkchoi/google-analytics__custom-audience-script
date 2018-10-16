



// Working Script. Google Analytics Custom Dimension script implemented through Google Tag Manager as a custom variable. In this case, the script looks through the page html to ensure that the page is an article page, and then loops through the atricle categories to see if there is a text content match with our desired category filter. 
function(){
    var category = document.querySelectorAll('.entry-category .gridlove-cat'); 
    var article = document.querySelectorAll('meta');

    for(var i = 0; i < article.length; i++) {
        if(article[i].getAttribute('property') == 'og:type' && article[i].getAttribute('content') == 'article') {
            for(var i = 0; i < category.length; i++) {
                if(category[i].textContent == 'Technology, Media and Telecommunications (TMT)') {
                    return category[i].textContent;
                } 
            }
        }    
    }
}