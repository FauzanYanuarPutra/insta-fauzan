var app = new Vue({
   el: "#app",
   data: {
      links: [
         {
            nama: "Website",
            href: "website/index.html"
         },
         {
            nama: "About & Skill",
            href: "about/about.html"
         },
         {
            nama: "Certificate",
            href: "certificates/certificates.html"
         },
         // {
         //    nama: "Skill",
         //    href: "skill/skill.html"
         // },
         {
            nama: "Github",
            href: "https://github.com/Fauzanyan"
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
      namaBelakang: "Fauzan"
   }
})