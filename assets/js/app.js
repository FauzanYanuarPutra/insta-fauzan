var app = new Vue({
   el: "#app",
   data: {
      links: [
         {
            nama: "Website",
            href: "website/index.html",
            class: "website"
         },
         {
            nama: "About & Skill",
            href: "#",
            class: "about"
         },
         {
            nama: "Certificate",
            href: "#",
            class: "certi"
         },
         // {
         //    nama: "Skill",
         //    href: "skill/skill.html"
         // },
         {
            nama: "Github",
            href: "https://github.com/Fauzanyan",
            class: "github"
         },
         // {
         //    nama: "Contact",
         //    href: "contact/contact.html"
         // }
      ],
      skill: [
         {
            namaSkill: "HTML and CSS",
            isiSkill: "Bootstrap (3+), Sass, Talwind.css"
         },
         {
            namaSkill: "JavaScript",
            isiSkill: "JavaScript (ES2015+), TypeScript, Node.js"
         },
         {
            namaSkill: "Build tools",
            isiSkill: "Grunt, Gulp, Webpack"
         },
         {
            namaSkill: "JavaScript frameworks",
            isiSkill: "Angular (2+), jQuery, React.js, Vue.js"
         },
         {
            namaSkill: "Server-side",
            isiSkill: "PHP"
         },
         {
            namaSkill: "Server-side frameworks",
            isiSkill: "Express, Laravel, Phoenix"
         },
         {
            namaSkill: "Others",
            isiSkill: "Git, Linux, SQL"
         },
        
      ],
      certificates: [
         {
            src: "../assets/img/1.jpg",
         },
         {
            src: "../assets/img/2.jpg",
         },
         {
            src: "../assets/img/3.jpg",
         },
         {
            src: "../assets/img/4.jpg",
         },
         {
            src: "../assets/img/5.jpg",
         },
         {
            src: "../assets/img/6.jpg",
         },
         {
            src: "../assets/img/20.jpg",
         },
         {
            src: "../assets/img/21.jpg",
         },
         {
            src: "../assets/img/22.jpg",
         },
         {
            src: "../assets/img/23.jpg",
         },
         {
            src: "../assets/img/24.jpg",
         },
         {
            src: "../assets/img/25.jpg",
         },
      ],
      namaDepan: "Muhammad",
      namaBelakang: "Fauzan",
      isiAbout: isiAbout(),
      isiCerti: isiCerti()
   }
})

function isiAbout() {
   return `
   <br><br><br>
      
         
      <div class="about-skill">
      
         <div class="isi-about">
         
            <div class="about">
               <h1>ABOUT</h1>
               <p>Hi, Nama saya Muhammad Fauzan, Saya adalah seorang pelajar yang lahir di tahun 2005. Saya mulai
                  berkecimpung di dunia IT pada tahun 2019. Harapan saya di tahun kedepannya adalah agar mampu memahami
                  semua bahasa pemrograman yang ada.
               </p>

               <p>Di SMK saya ikut berbagai macam kegiatan, mulai dari OSIS (Organisasi Siswa Intra Sekolah), Tim
                  Medsos, dan juga Team Creative, namun saya memutuskan untuk keluar di saat kelas 11 dikarenakan
                  berbagai hal.</p>
               <p>Terkadang saat dirumah saya membuat artikel di blog saya yaitu <a
                     href="https://rakuzancoding.blogspot.com/" class="link-a">rakuzancoding</a> , serta
                  mengikuti webinar gratis, dan certificatenya bisa kalian chek di <a
                     href="../certificates/certificates.html" class="link-a">certificate</a>
               </p>
               <p>Diluar rumah saya mengikuti kegiatan eskul silat, dan hanya mengikuti dua kali pertandingan saja saat
                  kelas 11, certificate nya bisa kalian lihat di <a href="../certificates/certificates.html"
                     class="link-a">certificate</a>, namun saya memutuskan
                  untuk istirahat
                  dikarenakan adanya pkl dan test</p>
            </div>
            <br>
            <hr><br>
            <div class="skill">
               <h2>Skillset ( Web Development )</h2>
               <div class="skills" v-for="item in skill">
                  <h2>HTML and CSS</h2>
                  <p class="isi-skill">Bootstrap (3+), Sass, Talwind.css</p>
                  <h2>JavaScript</h2>
                  <p class="isi-skill">JavaScript (ES2015+), TypeScript, Node.js</p>
                  <h2>Build tools</h2>
                  <p class="isi-skill">Grunt, Gulp, Webpack</p>
                  <h2>JavaScript frameworks</h2>
                  <p class="isi-skill">Angular (2+), jQuery, React.js, Vue.js</p>
                  <h2>Server-side</h2>
                  <p class="isi-skill">PHP</p>
                  <h2>Server-side frameworks</h2>
                  <p class="isi-skill">Express, Laravel, Phoenix</p>
                  <h2>Others</h2>
                  <p class="isi-skill">Git, Linux, SQL</p>
               </div>
               <br>
               <hr><br>
               <h2>Skillset ( Other )</h2>
               <div class="skills">
                  <h2>Design Tools</h2>
                  <p class="isi-skill">Figma</p>

               </div>
            </div>
            <br><div class="kosong"></div>
         <div class="kosong"></div>
         </div>
         
         <br>
         <div class="keluar-isi-about">
            <strong>KEMBALI</strong>
         </div>
      </div>

`
}

function isiCerti() {
   return `<div id="app">

      
<br><br><br>

      <div class="isi-certi">
         <h1>CERFICATE</h1>
         <div class="kumpulan-certi">

            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/1.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/2.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/3.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/4.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/5.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/6.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/7.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/8.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/9.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/10.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/11.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/13.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/13.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/14.jpg" alt="">
               </div>
            </div>
            <div v-for="item in certificates">
               <div class="certi ">
                  <img src="assets/img/15.jpg" alt="">
               </div>
            </div>
            
         </div>

      </div>



      <!-- <div class="show-full">

      </div> -->

      <div class="keluar-isi-certi">
            <strong>KEMBALI</strong>
         </div>

   </div>`
}