const breadcrumb = document.querySelector('body > div > div > nav > ol');

// const container = document.querySelector('.container-fluid');
// var msnry = new Masonry(container, {
//     columnWidth: 60
// });

const allCrumb = document.querySelector('.allCrumb');
const festCrumb = document.querySelector('.festCrumb');
const actCrumb = document.querySelector('.actCrumb');

const imagesSet = document.querySelectorAll('.imgViewSet')


var container = document.querySelector('#imageContainer');
var msnry = new Masonry('#imageContainer', {
    columnWidth: 10,
  itemSelector: '.imgViewSet',
  horizontalOrder: true,
  
});

// eventie.bind(togglerButton, 'click', function () {
//     areW2Hidden = !areW2Hidden;
//     container.className = areW2Hidden ? 'hide-w2' : '';
//     msnry.layout();
// });




const sortImg = (view) => {

    if (view === 'fest') {

        festCrumb.classList.add('active')
        allCrumb.classList.remove('active')
        actCrumb.classList.remove('active')

        imagesSet.forEach((image) => {
            // console.log(image.getAttribute('data-imgSet'))
            if (typeof image !== null && !image.getAttribute('data-imgSet').includes('fest')) {
                image.classList.add('d-none')
                image.classList.remove('d-block')
                // msnry.layout();
            }
            else {
                image.classList.remove('d-none')
                image.classList.add('d-block')


            }
        })


    } else if (view === 'act') {

        actCrumb.classList.add('active')
        festCrumb.classList.remove('active')
        allCrumb.classList.remove('active')

        imagesSet.forEach((image) => {
            // console.log(image.getAttribute('data-imgSet'))
            if (typeof image !== null && !image.getAttribute('data-imgSet').includes('act')) {
                image.classList.add('d-none')
                image.classList.remove('d-block')

                // msnry.layout();
            }
            else {
                image.classList.remove('d-none')
                image.classList.add('d-block')
            }
        })



    } else {
        allCrumb.classList.add('active')
        festCrumb.classList.remove('active')
        actCrumb.classList.remove('active')

        imagesSet.forEach((image) => {
            // console.log(image.getAttribute('data-imgSet'))
            image.classList.remove('d-none')
            image.classList.add('d-block')

        })

    }

}


console.log()


breadcrumb.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('breadcrumb-item')) {
        // console.dir(e.target)
        // console.log(e.target.getAttribute('data-breadcrumb'))



        sortImg(e.target.getAttribute('data-breadcrumb'))
        msnry.layout();


    }
})




