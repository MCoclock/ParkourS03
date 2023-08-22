const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  
  const articles = [
    {
      id: 1,
      title: "Ivre, il refait tous les challenges en une nuit.",
      author: "Ben O'clock",
      category: "Histoire",
      img: "laptop.jpg",
      img_alt: "Le code css de notre site",
      sub_title: "Des bulles et des points virgules",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem saepe ad minima exercitationem, perferendis atque dolorum reiciendis maiores impedit quae cupiditate quidem dignissimos officia esse. Repellendus quas voluptatibus quae soluta laboriosam? Officiis eos molestias eveniet id enim animi expedita sapiente harum obcaecati quia fuga odio possimus, ut odit sunt. Magni illum nihil id reiciendis assumenda velit non nesciunt hic temporibus, exercitationem molestiae suscipit omnis error soluta delectus a aliquam eveniet necessitatibus eligendi vero modi, rem itaque sunt? Id nulla tenetur, neque voluptatibus doloribus, vel, labore possimus saepe iusto ea reprehenderit fuga. Adipisci dolorem aut ducimus nulla odit, voluptas iure."
    },
    {
      id: 2,
      title: "Optimisez les performances de vos bugs en production.",
      author: "Satya Nadella",
      category: "DevOps",
      img: "hacker.jpg",
      img_alt: "Le boss de notre équipe de développer",
      sub_title: "Le monde entier (ne) leur envie (pas) cette technique",
      text: "Officiis odit repellat inventore provident molestiae accusantium eaque quia nulla, vitae iste voluptatum aliquam laborum. Debitis consectetur maxime sapiente quod dolorem, similique velit illum sunt eaque autem rerum iure sint eveniet accusamus? Laborum, repudiandae error et est incidunt nostrum maiores officia doloremque dignissimos, ipsa quos laudantium repellendus! Quam autem vero minus consectetur, sed sit corrupti magnam reiciendis soluta nemo suscipit? Iste eos, nemo voluptatibus non quis at! Quod, molestiae hic cumque praesentium enim ullam laborum, soluta ad maxime itaque tempora ea. Dignissimos, velit animi perferendis facilis a qui nisi vitae dolor illo aspernatur eum quisquam, laboriosam omnis iure culpa ab."
    },
    {
      id: 3,
      title: "JavaScript recommandé par l'OMS !",
      author: "Jee-Dee",
      category: "Technologies",
      img: "health.jpg",
      img_alt: "L'alliance du dev et de la santé",
      sub_title: "const healthy = true;",
      text: "Natus eveniet architecto nam distinctio dolorum, beatae ipsum velit? Vero ullam necessitatibus nobis numquam dicta ipsum, quos in facilis labore. Ipsam, sapiente cupiditate illo quidem fugiat nulla quae tenetur quasi iste cum eos autem similique explicabo praesentium quia voluptas nobis magni labore corrupti delectus ipsa provident id corporis! Sunt, magni accusamus saepe reiciendis voluptate eligendi quam harum, eius ab officiis corrupti! Totam vero debitis nesciunt dignissimos error sequi, pariatur eius sunt eaque blanditiis veniam excepturi a amet, vel autem eos odio assumenda cum ab maxime itaque dolor. Harum fugiat exercitationem iusto! Natus ratione nihil rem corrupti earum mollitia, aliquam voluptatum."
    },
    {
      id: 4,
      title: "Insolite : il s'etouffe avec un package npm.",
      author: "Tony 404",
      category: "Histoire",
      img: "stack.jpg",
      img_alt: "Une pile symbolisant nos paquets NPM",
      sub_title: "Disk Usage Overflow",
      text: "Dignissimos quia quo error, maxime recusandae praesentium aliquam dolorum consectetur fugiat! Corporis inventore eius, velit doloremque consectetur consequatur est voluptatibus libero iste ea dicta rerum quidem expedita? Quae natus porro voluptas provident cum quia eos ullam inventore accusamus recusandae vel molestias hic quibusdam ducimus iusto incidunt pariatur voluptates earum culpa temporibus magnam officiis numquam, libero id. Quae libero fugit aliquam vitae architecto laboriosam nihil tempore enim adipisci, quibusdam voluptatum ducimus ratione autem ipsum dolore alias. Molestiae, corrupti eligendi. Suscipit doloremque reiciendis ducimus deleniti, enim error eligendi iure provident ex laborum. Recusandae aspernatur eum vero, soluta non culpa laboriosam earum corporis."
    },
    {
      id: 5,
      title: "Top 10 des astuces pour coder avec les pieds.",
      author: "Stef.io",
      category: "Astuces",
      img: "foot.jpg",
      img_alt: "Le dev détendu devant la cheminée",
      sub_title: "La numéro 7 va vous faire halluciner",
      text: "Laborum cumque dolorem dolorum alias quod asperiores? Facere, et? Illum praesentium delectus ex, corporis accusantium cum tenetur quia qui, maiores deserunt voluptatem, adipisci sapiente repellat perferendis! Est quae quaerat reiciendis numquam molestiae placeat beatae laudantium consequatur incidunt, itaque ab quas temporibus aut autem illum tenetur porro suscipit, id, quisquam sint architecto odit officia. Blanditiis labore animi aliquid minima esse autem porro voluptas vero quod at dolorem commodi inventore quia corrupti suscipit sit sequi ipsa alias accusantium incidunt, amet tempora cum. Dolorem numquam itaque mollitia dolor harum nihil, accusantium ad quis eos eveniet tempore animi illo praesentium dolores recusandae aspernatur facere!"
    },
    {
      id: 6,
      title: "Git pour les noobs.",
      author: "Ben O'clock",
      category: "Technologies",
      img: "nicole-learn-git.jpg",
      img_alt: "Octocat, le symbole de GitHub",
      sub_title: "Ne pas scier la branche sur laquelle on est assis",
      text: "Quos odio consectetur asperiores nostrum distinctio. Cum ea voluptate inventore fuga ipsum quibusdam laboriosam tenetur consequuntur, at velit iusto, explicabo eos quis pariatur reprehenderit quae! Explicabo excepturi magni, fugit quod recusandae, exercitationem cumque sequi expedita quo alias necessitatibus illo eos aliquid blanditiis culpa facilis modi similique neque ab. Vel omnis ex quos sint, eius consequatur quae suscipit aliquid ipsa magni labore in sapiente incidunt ea quod placeat laborum molestias tempore facere nostrum cupiditate. Ipsum animi itaque reprehenderit libero et non cumque reiciendis quos magni voluptatibus assumenda nemo nisi, ea earum repellendus? Ullam illum ea sed cumque at enim id suscipit?"
    }
  ]
   

  res.render('index', { articles });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
