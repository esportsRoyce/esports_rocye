let name = 'Owner: ROYCE S. RODRIGUEZ';
console.log(name);

$('.nav-bar a, .showcase-main a').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            600
        );
    }
});

var products = document.getElementById("m-services");
products.style.background = "#555";

function buttonFunction(){
    var button = document.getElementById("btn").innerHTML = "HAHAHA";
    alert("You are entering restricted area. please leave the page");
}