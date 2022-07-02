const body = document.querySelector('body');

const about = document.querySelector('.about');
const certi = document.querySelector('.certi');

const tampil = document.querySelector('.tampil');

const keluarAbout = document.querySelector('.keluar-isi-about')
const keluarCerti = document.querySelector('.keluar-isi-certi')

about.addEventListener('click', function() {
      tampil.classList.add('tampil-kan')
      body.classList.add('ov-y')
      tampil.classList.remove('exit')
      keluarAbout.classList.remove('relative')
      keluarCerti.classList.remove('relative')
      

      // hapus
      const isiCerti = document.querySelector('.isiCerti') 
         isiCerti.classList.remove('d-hilang')
         isiCerti.classList.remove('d-block')

      // Beda
      const isiAbout = document.querySelector('.isiAbout')
      setTimeout(function() {
         isiAbout.classList.add('d-block')
      }, 1000)
})

certi.addEventListener('click', function() {
      tampil.classList.add('tampil-kan')
      body.classList.add('ov-y')
      tampil.classList.remove('exit')
      keluarAbout.classList.remove('relative')
      keluarCerti.classList.remove('relative')

      // hapus
      const isiAbout = document.querySelector('.isiAbout')
      isiAbout.classList.remove('d-hilang')
      isiAbout.classList.remove('d-block')


      // Beda
      const isiCerti = document.querySelector('.isiCerti')
      setTimeout(function() {
         isiCerti.classList.add('d-block')
      }, 1000)
})

keluarAbout.addEventListener('click', function(){
      const isiAbout = document.querySelector('.isiAbout')
      isiAbout.classList.remove('d-block')
      isiAbout.classList.add('d-hilang')
      setTimeout(function() {
         tampil.classList.add('exit')
         body.classList.remove('ov-y')
         keluarAbout.classList.add('relative')
      }, 600)

})

keluarCerti.addEventListener('click', function(){
   const isiCerti = document.querySelector('.isiCerti')
      isiCerti.classList.remove('d-block')
      isiCerti.classList.add('d-hilang')
      setTimeout(function() {
         tampil.classList.add('exit')
         body.classList.remove('ov-y')
         keluarCerti.classList.add('relative')
      }, 600)
      
})