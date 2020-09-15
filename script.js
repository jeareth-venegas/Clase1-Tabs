function clickHandler(event){
    event.preventDefault();
    //console.log('Hola mundo');
    //console.log(event.currentTarget);

    // el numero 1 dice que ignora el primer elemento(0) del string para hacer print en la consola sin el primer elemento (0)
    const id = event.currentTarget.getAttribute('href').substring(1)
    console.log(id);


    //ocultar todo menos el elemento con el id correcto
    for (let i = 0; i < tabcontent.length; i++){
        tabcontent[i].classList.add('js-content-hidden');

        if (tabcontent[i].getAttribute('id') == id) {
            tabcontent[i].classList.remove('js-content-hidden');
        }
    }

    //se pone el color blanco por cada click que se da
    for(let i =0; i < tablist.length;i++){
        tablist[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active'); 
}



// primer paso: seleccionar los const en los que vamos a tabajar

// en queryselectorall se pone . cuando es clase, se pone # cuando es Id
const tablist = document.querySelectorAll('.tabs-tablist-item');

const tabcontent =  document.querySelectorAll('.tabs-content-item');

// segundo paso: ocultar todos los divs mnenos el primero

//cuando queremos trabajar con todos los elementos de la lista usamos for

for (let i = 0; i < tabcontent.length; i++){
    tabcontent[i].classList.add('js.content-hidden');
}
// empezamos por el primer div empezando desde el 0

tabcontent[0].classList.remove('js.content-hidden');

tablist[0].classList.add('js-active');


for (let i = 0; i < tablist.length; i++){
    //.addEventListener nos da más opciones
    //click es el nombre del evento
    tablist[i].addEventListener('click', clickHandler);
}
