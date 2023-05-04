
const header = 'Philosophers of the ages';
const footer = '';
const entries = [
  {
    id: 'Pythagoras',
    categories: ['Abstracionism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-570-01-01',
    title: 'Pythagoras',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/220px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/220px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg',
      alt: 'Pythagoras',
      caption: 'Pythagoras',
    },
    body: "Abstract ideas are perfect. Its' simplicity and elegance are the primary criterias of it being right. It doesn't have to represent the reality as we see it today, for we see too little. An equation representing a concept today may mean nothing practical, but be applied decades later. Had a cult who worshiped numbers. Considered to be the first philosopher. Ruled a province and was dethroned.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Pythagoras',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Herodotus',
    categories: ['Abstracionism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-484-01-01',
    title: 'Herodotus',
    image: {
      link: 'https://cdnb.artstation.com/p/assets/images/images/050/528/273/large/rana-abdullah-1.jpg?1655074280',
      src: 'https://cdnb.artstation.com/p/assets/images/images/050/528/273/large/rana-abdullah-1.jpg?1655074280',
      alt: 'Herodotus',
      caption: 'Herodotus',
    },
    body: "The first historian. Rather than just documenting the facts, he tried to document the grand mistakes that people made. He documented the biggest conflicts - wars. He was careful putting a distinction between opinion and facts. According to him - the motivation of wars comes from defending ones principles (rather than hatred, religion or similar external factors). He called a man dying for his principles a happy man.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Herodotus',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Socrates',
    categories: ['Stoicism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-470-01-01',
    title: 'Socrates',
    image: {
      link: 'https://ecdn.teacherspayteachers.com/thumbitem/Lesson-The-Life-and-Death-of-the-Greek-philosopher-Socrates-1657510534/original-274489-1.jpg',
      src: 'https://ecdn.teacherspayteachers.com/thumbitem/Lesson-The-Life-and-Death-of-the-Greek-philosopher-Socrates-1657510534/original-274489-1.jpg',
      alt: 'Pythagoras',
      caption: 'Socrates',
    },
    body: "Loved asking deep questions (to other people - mostly soldiers), until they would start contradicting themselves (socratic method). He claimed he was ignorant and knew nothing. Oracle of Deplhi called him the smartest of all - for he has admitted knowing nothing yet striving to learn more. Did not document his teachings. When caputred, he did not give into his principles and for that reason was executed. Was a firm believer that fundamental truths (like Pythagoras theorem) are intuitive and it is knowledge that everyone is familiar with, just lost in our consiousnes (dialogue with a barbarian).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Socrates',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Plato',
    categories: ['Abstracionism','Stoicism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-428-01-01',
    title: 'Plato',
    image: {
      link: 'https://cdn.britannica.com/88/149188-050-DC34842F/Plato-portrait-bust-original-Capitoline-Museums-Rome.jpg',
      src: 'https://cdn.britannica.com/88/149188-050-DC34842F/Plato-portrait-bust-original-Capitoline-Museums-Rome.jpg',
      alt: 'Plato',
      caption: 'Plato',
    },
    body: "A part of Socrates cirlce. The author of socratic dialogues (he claimed he marely documented Socrates, but he either lied or gave a good portion of himself). One of the first dramaturgs (tragedies). Acknowledged the duality of a person: a feeling, passionate person; a rational, thinking person. Passion is what motivates and sometimes it seems we do the unrational.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Plato',
        linkText: 'Wiki',
      },
    ],
  },
    {
    id: 'Aristotle',
    categories: ['Empiricism', 'Stoicism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-384-01-01',
    title: 'Aristotle',
    image: {
      link: 'https://hips.hearstapps.com/hmg-prod/images/aristotle--getty.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
      src: 'https://hips.hearstapps.com/hmg-prod/images/aristotle--getty.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
      alt: 'Aristotle',
      caption: 'Aristotle',
    },
    body: "Father of a lot of nature sciences. Formulated a definition of logic. To truly understand things one should touch them, feel them. Experience is important. The true joy of life is self-development.",
  },
    {
    id: 'Pyrrho',
    categories: ['Scepticism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-365-01-01',
    title: 'Pyrrho',
    image: {
      link: 'https://historyofphilosophy.net/sites/default/files/styles/medium/public/images/podcast_image/western/070%20Carneades.jpg?itok=sx3fwIHb',
      src: 'https://historyofphilosophy.net/sites/default/files/styles/medium/public/images/podcast_image/western/070%20Carneades.jpg?itok=sx3fwIHb',
      alt: 'Pyrrho',
      caption: 'Pyrrho',
    },
    body: "Nothing can be trusted (people, senses, yourself). Would have died by going of cliff many times (volunterally, by not trusting senses) if not for his friends. Father of skepticism.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Pyrrho',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Epicurus',
    categories: ['Stoicism'],
    color: 'green',
    faicon: 'dove',
    datetime: '-270-01-01',
    title: 'Epicurus',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/800px-Epikouros_BM_1843.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/800px-Epikouros_BM_1843.jpg',
      alt: 'Epicurus',
      caption: 'Epicurus',
    },
    body: "The garden of life. Human growing like a flower, blooming when self-developing. The simplicity of life, self sufficiency.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Epicurus',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Seneca',
    categories: ['Stoicism', 'Politics'],
    color: 'green',
    faicon: 'landmark',
    datetime: '65-01-01',
    title: 'Seneca',
    image: {
      link: 'https://cdn.britannica.com/33/9433-050-C21D7F4F/marble-bust-Seneca-Staatliche-Museen-Berlin-Germany.jpg?w=400&h=300&c=crop',
      src: 'https://cdn.britannica.com/33/9433-050-C21D7F4F/marble-bust-Seneca-Staatliche-Museen-Berlin-Germany.jpg?w=400&h=300&c=crop',
      alt: 'Seneca',
      caption: 'Seneca',
    },
    body: "One of the greatest stoics. Seneca's letters and other great works of literature (TODO).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Plato',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'JeremyBentham',
    categories: ['Utilitariasm', 'Animal', 'Empiricism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1748-01-01',
    title: 'Jeremy Bentham',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg/220px-Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg/220px-Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg',
      alt: 'Jeremy Bentham',
      caption: 'Jeremy Bentham',
    },
    body: "Father of utilitariasm. Meaning of life is to be happy. Inspired by Epicurus. Fighter for animal rights (first such philosopher)",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Jeremy_Bentham',
        linkText: 'Wiki',
      },
    ],
  }, 
  {
    id: 'JohnStuartMill',
    categories: ['Utilitariasm', 'Politics', 'Feminism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1806-01-01',
    title: 'John Stuart Mill',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/7/75/JohnStuartMill.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/75/JohnStuartMill.jpg',
      alt: 'John Stuart Mill',
      caption: 'John Stuart Mill',
    },
    body: "A genius boy (raised as a genius as an experiment by his father), inspired by Bentham developing ideas of utilitariasm. Idea of higher and lower pleasures: it's better to be a sad human than a happy pig. One of the first feminists, fighters of equality. People should have all their freedoms unless those freedoms hurt others.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/John_Stuart_Mill',
        linkText: 'Wiki',
      },
    ],
  },
];

// Page details
const pageTitle = 'Cogito ergo sum'; // The title of the page that shows in the browser tab
const pageDescription = 'Philosophers timeline'; // The description of the page for search engines
const pageAuthor = 'Almantas Karpavičius'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
