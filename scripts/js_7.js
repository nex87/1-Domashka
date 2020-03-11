let buttonCatalog = document.querySelector ('.catalog__minmax'),
    buttonAdvant = document.querySelector ('.advant__minmax'),
    buttonBrands = document.querySelector ('.brands__minmax'),
    buttonComments = document.querySelector ('.comments__minmax'),
    buttonNews = document.querySelector ('.news__minmax'),
    buttonContacts = document.querySelector ('contacts__minmax'),
    
    blockCatalog = document.querySelector ('.catalog'),
    blockAdvant = document.querySelector ('.advant'),
    blockBrands = document.querySelector ('.brands'),
    blockComments = document.querySelector ('.comments'),
    blockNews = document.querySelector ('.news'),
    blockContacts = document.querySelector ('.contacts');

    buttonCatalog.addEventListener ('click', function () {
        minimize(blockCatalog, buttonCatalog);
    });

    buttonAdvant.addEventListener ('click', function () {
        minimize(blockAdvant, buttonAdvant);
    });
    buttonBrands.addEventListener ('click', function () {
        minimize(blockBrands, buttonBrands);
    });
    buttonComments.addEventListener ('click', function () {
        minimize(blockComments, buttonComments);
    });
    buttonNews.addEventListener ('click', function () {
        minimize(blockNews, buttonNews);
    });
    buttonContacts.addEventListener ('click', function () {
        minimize(blockContacts, buttonContacts);
    });

    function minimize (block, button) {
        if (block.style.height == "60px") {
            block.style.height = "auto";
            block.style.overflow = "hidden";
            
        } else {
            block.style.height = "60px";
            block.style.overflow = "hidden";
        }
    }