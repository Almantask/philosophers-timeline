
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
    categories: ['Abstracionism','Stoicism', 'Politics'],
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
    body: "A part of Socrates cirlce. The author of socratic dialogues (he claimed he marely documented Socrates, but he either lied or gave a good portion of himself). One of the first dramaturgs (tragedies). Acknowledged the duality of a person: a feeling, passionate person; a rational, thinking person. Passion is what motivates and sometimes it seems we do the unrational. Republic - tried to understand the civil morals, how a person ought to live. Allegory of a cave: darkness is ignorance and light is a phylosophical light through which world not always visible through our visible senses should be seen. If we had the power to turn invisible, no matter good or bad, we would all turn corrupt and do our own bidding.",
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
    body: "Father of a of most nature sciences. Formulated a definition of logic. To truly understand things one should touch them, feel them. Experience is important. The true joy of life is self-development.",
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
    body: "The garden of life. Human growing like a flower, blooming when self-developing. The simplicity of life, self-sufficiency. He gathered people into his house and taught the beauty of life, the need of tending to your environment and oneself.",
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
    body: "TODO.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Plato',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'SaintAugustine',
    categories: ['Stoicism', 'Religion'],
    color: 'green',
    faicon: 'landmark',
    datetime: '354-11-13',
    title: 'Saint Augustine',
    image: {
      link: 'https://www.ewtn.com/img/catholicism/saints/augustine-az.jpg',
      src: 'https://www.ewtn.com/img/catholicism/saints/augustine-az.jpg',
      alt: 'Saint Augustine',
      caption: 'Saint Augustine',
    },
    body: "As most stoics, encouraged the love for life. Tried to answer the question: 'If god is all-mighty and all-good, why does so many bad things happen to us?'. He gave multiple answers (over time), but the one that stuck to most cultures is the eternal fight between god and evil. Good is all-good and all-powerful, but the equivalent opposite force exists - therefore balance.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Augustine_of_Hippo',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Boethius',
    categories: ['Stoicism'],
    color: 'green',
    faicon: 'landmark',
    datetime: '480-11-13',
    title: 'Boethius',
    image: {
      link: 'https://images.gr-assets.com/authors/1499399435p8/5589950.jpg',
      src: 'https://images.gr-assets.com/authors/1499399435p8/5589950.jpg',
      alt: 'Boethius',
      caption: 'Boethius',
    },
    body: "Everything that a person needs is within themselves. A living proof of that - as the story tells - he was in great turture himself and managed to remain happy at all times. The circumstances are irrelevant for one's well-being",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Boethius',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'SaintAnselmofCanterbury',
    categories: ['Religion'],
    color: 'green',
    faicon: 'pray',
    datetime: '1034-11-13',
    title: 'Saint Anselm of Canterbury',
    image: {
      link: 'https://catholicsaintmedals.com/wp-content/uploads/anselm-of-canterbury-366x400.jpg',
      src: 'https://catholicsaintmedals.com/wp-content/uploads/anselm-of-canterbury-366x400.jpg',
      alt: 'Saint Anselm of Canterbury',
      caption: 'Saint Anselm of Canterbury',
    },
    body: "To marely think about something is a proof of the existence of that something. Existence is not limited to physical one. A thought exists. We think about God - therefore it exists. Apriori argument - argument which does not require a proof.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Anselm_of_Canterbury',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'NiccoloMachiavelli',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1469-11-13',
    title: 'Niccolò Machiavelli',
    image: {
      link: 'https://iep.utm.edu/wp-content/media/Machiavelli.jpg',
      src: 'https://iep.utm.edu/wp-content/media/Machiavelli.jpg',
      alt: 'Niccolò Machiavelli',
      caption: 'Niccolò Machiavelli',
    },
    body: "The greater good or how as long as the goal is worth it, how you achieve it doesn't matter. Public and private morality are two different rules. A ruler should not be limited by what other people think about him and make unpopular, or maybe what seems bad decisions for the people, if it yields good results eventually. For this radical way of thinking, he was often called 'The Devil'.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Niccol%C3%B2_Machiavelli',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'ThomasHobbes',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1558-04-5',
    title: 'Thomas Hobbes',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Thomas_Hobbes_by_John_Michael_Wright_%282%29.jpg/220px-Thomas_Hobbes_by_John_Michael_Wright_%282%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Thomas_Hobbes_by_John_Michael_Wright_%282%29.jpg/220px-Thomas_Hobbes_by_John_Michael_Wright_%282%29.jpg',
      alt: 'Thomas Hobbes',
      caption: 'Thomas Hobbes',
    },
    body: "Society would fall into anarchy if there was no official institution to control it. Anarchy: backstabbing, collapse of humanity as a whole, chaos.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Thomas_Hobbes',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Descartes',
    categories: ['Metaphysics', 'Scepticism', 'Empiricism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1596-03-31',
    title: 'René Descartes',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg',
      alt: 'René Descartes',
      caption: 'René Descartes',
    },
    body: "You cannot be sure whether you experience a dream or reality. The only thing you can be sure of is of your own thoughts - 'I think therefore I am' (cogito ergo sum). Dualism of mind and body (mind doesn't have to be contained within a conventional body). Invented Cartesian coordinate system.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Pascal',
    categories: ['Religion', 'Empiricism', 'Scepticism'],
    color: 'green',
    faicon: 'pray',
    datetime: '1623-06-19',
    title: 'Blaise Pascal',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Blaise_Pascal_2.jpg/220px-Blaise_Pascal_2.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Blaise_Pascal_2.jpg/220px-Blaise_Pascal_2.jpg',
      alt: 'Blaise Pascal',
      caption: 'Blaise Pascal',
    },
    body: "You cannot be sure of anything. He was made significant contributions in probability and set theory, fluid dynamics. He could never be sure whether God existed, but that uncertainty was only a logical motivator for him to be invested in religion: if God actually exists, it's not worth gambling a single lifetime for an eternity of hell that could await. After all, even if you are invested in God, you don't lose almost anything (as you are a decent person).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Blaise_Pascal',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Spinoza',
    categories: ['Stoicism', 'Metaphysics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1632-11-24',
    title: 'Baruch Spinoza',
    image: {
      link: 'https://images.squarespace-cdn.com/content/v1/53b59f96e4b089bf6ae90076/1598389055681-3JNJXX960Z77J9U8ZZAW/The+Tempest.jpg?format=400w',
      src: 'https://images.squarespace-cdn.com/content/v1/53b59f96e4b089bf6ae90076/1598389055681-3JNJXX960Z77J9U8ZZAW/The+Tempest.jpg?format=400w',
      alt: 'Baruch Spinoza',
      caption: 'Baruch Spinoza',
    },
    body: "God is world: a rock, a flower, a planet and you. Therefore, we should respect ourselves and others for we are a part of something divine.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Baruch_Spinoza',
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
