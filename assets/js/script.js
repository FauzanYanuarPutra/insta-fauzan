const about = document.querySelector('.about');
const certi = document.querySelector('.certificates');
const body = document.querySelector('body');
const hilang = document.querySelector('.hilang');
const isi = document.querySelector('.abouts');
const isiCerti = document.querySelector('.certi-none');
const kembali = document.querySelector('.keluar')

about.addEventListener('click', function(){
   body.classList.add('overflow-hidden')
   about.classList.add('info-about')
   
   isi.classList.add('show-isi')
   
})

certi.addEventListener('click', function(){
   body.classList.add('overflow-hidden')
   certi.classList.add('info-about')

   isiCerti.classList.add('certis')
})

// kembali.addEventListener('click', function(){
//    body.classList.remove('overflow-hidden')
//    about.classList.remove('info-about')
//    isi.classList.remove('show-isi')
//    isiCerti.classList.remove('certis')
//    kembali.classList.add('none')
//    about.classList.add('info-abouts')
   
// })

