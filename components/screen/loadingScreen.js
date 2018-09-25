function mountLoadingScreen() {
    $('#root').html(loadingScreen());    //loadingScreen function return result will be shown in the html index

    setTimeout(() => {
        session();
    }, 2000);
}


function loadingScreen() {                      //loadingScreen function return an HTML element
    let container = document.createElement('div');     //to create an HTML element
    container.id = 'loading-screen';                    //to loading screen
    container.classList.add('Loading-screen');
    //to create in center
    container.innerHTML = `
    <div class="loadbody">  
        <span class="back">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
        </span>
    </div>
      `


    // container.style.height = '100vh';           
    // container.style.display = 'flex';
    // container.style.justifyContent = 'center';
    // container.style.alignItems = 'center';

    return container;
}

{/* <div></div>
    <div></div>
    <div></div>
    <div></div> */}