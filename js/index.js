M.AutoInit();


// Side Menu
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});


    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });
//scroll_up
      $(document).ready(function() {
      	$('#scroll_up').click(function(){  //referimos el elemento ( clase o identificador de acción )
      		$('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
      		return false;
      	});
      });

    // Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

    // Material Boxed
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    // Auto Complete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Aruba": null,
          "Cancun Mexico": null,
          "Hawaii": null,
          "Florida": null,
          "California": null,
          "Jamaica": null,
          "Europe": null,
          "The Bahamas": null,
        }
      });

//search

const bubbles = document.querySelectorAll('.bubble1');
const bubblePosition = [0, 50]
const search = document.querySelector('.search-wrapper1');
const S = document.querySelector('.S1');
const input = document.createElement('input');
input.type = 'text';
input.className = 'inputSearch1';
input.placeholder = '_ type something';
let counter = 0;
let distanceAll = [];

function bubbling() {
    if(counter < bubbles.length) {
        setTimeout(function() {
            bubbles[counter].classList.add('animate1');
            let distance = ([counter] * 50) + 'px';
            distanceAll[counter] = distance;
            counter++;
            bubbling(counter);
        }, 80);
    }
}

bubbling();


search.addEventListener('mouseover', function() {
    console.log('ciao');
    bubbles[0].style = 'position: center;width: 400px;height:60px; border-radius: 10px;  z-index: 1;';
    bubbles[0].classList.remove('animate1');
    input.placeholder = '>';
    S.style.color = '#333333';
    setTimeout(() => {
        S.innerHTML = '';
        bubbles[0].appendChild(input);
        let inputAppended = document.querySelector('.inputSearch1');
        inputAppended.focus();
        inputAppended.style = 'caret-color: transparent';
        inputAppended.addEventListener('keypress', (e) => {
            if(e.keyCode == 13) {
                console.log('Now I am removing text but you can do whatever you want with text value 😊');
                inputAppended.value = '';
            }
        });
    }, 1000);
});

search.addEventListener('mouseout', function() {
    console.log('ciao');
    let inputAppended = document.querySelector('.inputSearch1');
    bubbles[0].style = '';
    bubbles[0].classList.add('animate1');
    S.style.color = '#4C83F0';
    inputAppended.value = '   ';
    inputAppended.style = 'caret-color: transparent; z-index: -1;';
    input.placeholder = '>  ';

    setTimeout(() => {
        bubbles[0].removeChild(input);
        S.innerHTML = 'S';
    }, 1000);
});
