function clickHandler(event){
    event.preventDefault();
    //console.log('Hola mundo');
    //console.log(event.currentTarget);

    // el numero 1 dice que ignora el primer elemento(0) del string para hacer print en la consola sin el primer elemento (0)
    const id = event.currentTarget.getAttribute('href').substring(1)
    console.log(id);


    //ocultar todo menos el elemento con el id correcto
    for (let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';

        if (tabcontent[i].getAttribute('id') == id) {
            tabcontent[i].style.display= 'block';
        }
    }
}



// primer paso: seleccionar los const en los que vamos a tabajar

// en queryselectorall se pone . cuando es clase, se pone # cuando es Id
const tablist = document.querySelectorAll('.tabs-tablist-item');

const tabcontent =  document.querySelectorAll('.tabs-content-item');

// segundo paso: ocultar todos los divs mnenos el primero

//cuando queremos trabajar con todos los elementos de la lista usamos for

for (let i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = 'none';
}

// empezamos por el primer div empezando desde el 0

tabcontent[0].style.display = 'block';


for (let i = 0; i < tablist.length; i++){
    //.addEventListener nos da más opciones
    //click es el nombre del evento
    tablist[i].addEventListener('click', clickHandler);
}
