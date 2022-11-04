document.addEventListener("DOMContentLoaded", function() {
    const app = document.querySelector( '#app' );
    app.addEventListener( 'click', () => {
        let random = Math.round( Math.random() * ( 4 - 1 ) + 1 );
        let audio = new Audio( `./dist/sounds/bear${random}.mp3` );
        audio.play();
    })
});
