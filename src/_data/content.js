
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
    id: 'Hippocrates',
    categories: ['Religion'],
    color: 'green',
    faicon: 'dove',
    datetime: '-460-01-01',
    title: 'Hippocrates',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hippocrates.jpg/220px-Hippocrates.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hippocrates.jpg/220px-Hippocrates.jpg',
      alt: 'Hippocrates',
      caption: 'Hippocrates',
    },
    body: "Gods are everywhere and affect everything. Therefore, we shouldn't rule our a single phenomena. Things should be observed, felt, touched and empiracally evaluated.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Hippocrates',
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
	  {
        href: 'http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec',
        linkText: 'The Last Days of Socrates: Euthyphro; Apology; Crito; Phaedo, by Plato (572 p., +audio)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140449272/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449272&linkId=9dba0bcf05f281afab7ee7487639054b',
        linkText: 'The Symposium, by Plato (144 p.)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140455116/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140455116&linkId=30c7d6aa18e395f1a79d531ac6b2519d',
        linkText: 'Republic, by Plato (416 p.)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0521436109/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521436109&linkId=7a5b9c26447c5bd6faa8bbe6fe768b52',
        linkText: 'The Cambridge Companion to Plato, by Richard Kraut (576 p.)',
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
    body: "Father of a of most nature sciences. Formulated a definition of logic. To truly understand things one should touch them, feel them. Experience is important. The true joy of life is self-development. 3 kinds of friendships: for pleasure, for utility - the thrid one - the most important one - a friendship were each party wants good for the other without wanting anything for themselves in return. Virtues are a middlepoint between extreme deficiency and excess.",
	links: [
      {
        href: 'https://en.wikipedia.org/wiki/Aristotle',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9',
        linkText: 'The Nicomachean Ethics, by Aristotle (336 p., +audio',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad',
        linkText: 'Politics, by Aristotle (480 p.)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994',
        linkText: 'The Metaphysics, by Aristotle (528 p.)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0',
        linkText: 'The Cambridge Companion to Aristotle, by Jonathon Barnes (434 p.)',
      },
    ],
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
    categories: ['Empiricism'],
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
    body: "The garden of life. Human growing like a flower, blooming when self-developing. The simplicity of life, self-sufficiency. Happiness is the absence of pain. He gathered people into his house and taught the beauty of life, the need of tending to your environment and oneself. Unlike stoics, he promoted living in a small group of people in a garden, using the 2nd friendship - utility.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Epicurus',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl',
        linkText: 'The Art of Happiness, by Epicurus (251 p.)',
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
        href: 'https://en.wikipedia.org/wiki/Seneca',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140442103/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140442103&linkId=53524be7bd4e91403113c3e5494786ac',
        linkText: 'Letters from a Stoic, by Seneca (256 p., +audio)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140449469/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449469&linkId=73e3249fb0aa7e242c68e9de1623d07c',
        linkText: 'Discourses and Selected Writings, by Epictetus (304 p., +audio)',
      },
	  	  {
        href: 'http://www.amazon.com/gp/product/0140449337/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449337&linkId=c10bdf039a0f73844cab3ab9510ec53e',
        linkText: 'Meditations, by Marcus Aurelius (304 p.)',
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
    id: 'ThomasAquinas',
    categories: ['Religion'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1225-03-07',
    title: 'Thomas Aquinas',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/St-thomas-aquinas.jpg/220px-St-thomas-aquinas.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/St-thomas-aquinas.jpg/220px-St-thomas-aquinas.jpg',
      alt: 'Niccolò Machiavelli',
      caption: 'Thomas Aquinas',
    },
    body: "Started a rational analysis of religion - scholasticism. Didn't like other filosophers, however had great admiration for Aristotle. Called him The Philosopher. He said that to reach salvation, on top of being virtous, one should also be generous. He claimed that laws should be modeled based on ideals that people ought to follow. Thomas Aquinas stated that the evidence of freedom of will are punishments. If there was no freedom of will, then punishments would be vain, unjustifiable.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Thomas_Aquinas',
        linkText: 'Wiki',
      },
	  {
        href: 'https://www.amazon.com/Aquinass-Shorter-Summa-Thomass-Theologica/dp/1928832431?SubscriptionId=1RN7ZZ7D7SDQHR7TRJG2&tag=shanesherman-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1928832431',
        linkText: 'Summa Theologica by Thomas Aquinas (432 p., +audio)',
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
	  {
        href: 'http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl',
        linkText: 'The Prince, by Niccolò Machiavelli (144 p.)',
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
    id: 'FrancisBacon',
    categories: ['Empiricism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1561-01-22',
    title: 'Francis Bacon',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/British_-_Francis_Bacon_-_Google_Art_Project.jpg/250px-British_-_Francis_Bacon_-_Google_Art_Project.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/British_-_Francis_Bacon_-_Google_Art_Project.jpg/250px-British_-_Francis_Bacon_-_Google_Art_Project.jpg',
      alt: 'Francis Bacon',
      caption: 'Francis Bacon',
    },
    body: "Essentially started the scientific method which strives to prove theories through experiments. A failed experiment is all that is needed to disprove a theory. Without experience - nothing can be known. Two modes of aquiring knowledge: reasoning, experience. If you  wish a guide in the searhc of knowledge - let that guide be experience. Choose the light of experience, not the authority of texts. 'Like falling in love with a picture, words are simply representative of thing in the external world. If you were interested in the external world, venture into that world, don't just talk about it.' Wanted to create a science for the human mind (first ideas of psychology).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Francis_Bacon',
        linkText: 'Wiki',
      },
	  {
        href: 'https://amzn.to/2SF6Bjv',
        linkText: 'The New Organon, by Francis Bacon (292 p.)',
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
    body: "You cannot be sure whether you experience a dream or reality. The only thing you can be sure of is of your own thoughts - 'I think therefore I am' (cogito ergo sum). Dualism of mind and body (mind doesn't have to be contained within a conventional body). Invented Cartesian coordinate system. 'Discource of method: 1. Accept nothing is ture. 2. Divide problem into as many steps as we can. 3. Work from the smallest step of a solution to a larger one. You reach the overall solution by solving fundamental problems. 4. Test it. Rather than finding a proof - search for exceptions to the rule.'",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes',
        linkText: 'Wiki',
      },
	  {
        href: 'https://www.amazon.com/Discourse-Method-Rightly-Conducting-Seeking/dp/1978277644',
        linkText: 'Discourse on the Method of Rightly Conducting One’s Reason and of Seeking Truth in the Sciences (36 p.)',
      },
	  {
        href: 'https://www.amazon.com/Meditations-First-Philosophy-Hackett-Classics/dp/0872201929',
        linkText: 'Meditations on First Philosophy (80 p.)',
      },
	  {
        href: 'https://www.amazon.com/Principles-Philosophy-Rene-Descartes/dp/1604597402',
        linkText: 'The Principles of Philosophy (72 p.)',
      },
	  {
        href: 'https://www.amazon.com/Passions-Soul-l%C3%82me/dp/0872200353',
        linkText: 'The Passions of the Soul (192 p.)',
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
	  {
        href: 'https://amzn.to/2AFaGxn',
        linkText: 'Ethics, by Spinoza (134 p., +audio)',
      },
	  {
        href: 'https://amzn.to/2VzSAWa',
        linkText: 'A Spinoza Reader: The Ethics and Other Works, by Spinoza (280 p.)',
      },
    ],
  },
  {
    id: 'IsaacNewton',
    categories: ['Empiricism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1643-01-04',
    title: 'Isaac Newton',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
      alt: 'Isaac Newton',
      caption: 'Isaac Newton',
    },
    body: "Model an abstract idea into most simple, small, basic concept. For example, instead of planets, think of dots. This is a so called idealised model or a hypothesis. Improved scientific method by striving to come up with general pinrciples that apply in practrice and at all levels without exceptions. Deductive reasoning: 1. premis. 2. logical justification. 3. conclusions. 4. experimenting. Lifelong scholastic. Invented calculus, defined a general law of relativity. Was considered the last alchemist.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Isaac_Newton',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'JohnLocke',
    categories: ['Empiricism', 'Materialism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1632-08-29',
    title: 'John Locke',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/John_Locke.jpg/220px-John_Locke.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/John_Locke.jpg/220px-John_Locke.jpg',
      alt: 'John Locke',
      caption: 'John Locke',
    },
    body: "A good friend of Newton, further pushed the philosophy of science. Some thoughts can eixist without invoking experiences: intuitive (for example a contradiction: something cannot be and not be) or demonstrative (abstract proofs). We start with nothing and get everything through experience. You can either sense and experience an object or just experience it. Personal identity is a collection of experiences. Simple fundamental parts make a greater whole. Each object can be examined with a primary quality -  direct experiences (hardness, shape, weight) and secondary quality - subjective experiences, which will be different depending on the observer (color, tase, smell, texture)",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/John_Locke',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51',
        linkText: 'An Essay Concerning Human Understanding, by John Locke (416 p.)',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e',
        linkText: 'Second Treatise of Government, by John Locke (144 p.)',
      },
	  {
        href: 'http://www.amazon.com/Cambridge-Companion-Locke-Companions-Philosophy-ebook/dp/B00A4A6AFK?&linkCode=ll1&tag=philosophybre-20&linkId=c1921a692774978c9e467ee522e1db0f&language=en_US&ref_=as_li_ss_tl',
        linkText: 'The Cambridge Companion to Locke, by Vere Chappell (344 p.)',
      },
    ],
  },
  {
    id: 'GottfriedWilhelmLeibniz',
    categories: ['Materialism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1646-07-01',
    title: 'Gottfried Wilhelm Leibniz',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg/220px-Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg/220px-Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg',
      alt: 'Gottfried Wilhelm Leibniz',
      caption: 'Gottfried Wilhelm Leibniz',
    },
    body: "He argued lock's materialism. 'Nothing is in the mind except what is in the sense, unless there already is an intellect'. There can't be a mind that is empty, we not only experience, we know that we experience. All the experiences are a group of something, it's hard to single out one thing that caused a sensation. For example 'sweetness', 'bitterness', 'blueeness'. Leibniz accused Newton of plagiarism on Calculus - because he too has invented it and in fact published it earlier. However, the claim was rejected for the way the two implementations work are too different to be considered plagiarism.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz',
        linkText: 'Wiki',
      },
	  {
        href: 'https://www.amazon.com/Leibniz-Philosophical-Essays-Hackett-Classics/dp/0872200620',
        linkText: 'Philosophical Essays, by Leibnitz (366 p.)',
      },
    ],
  },
  {
    id: 'GeorgeBerkeley',
    categories: ['Materialism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1646-07-01',
    title: 'George Berkeley',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/John_Smibert_-_Bishop_George_Berkeley_-_Google_Art_Project.jpg/220px-John_Smibert_-_Bishop_George_Berkeley_-_Google_Art_Project.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/John_Smibert_-_Bishop_George_Berkeley_-_Google_Art_Project.jpg/220px-John_Smibert_-_Bishop_George_Berkeley_-_Google_Art_Project.jpg',
      alt: 'George Berkeley',
      caption: 'George Berkeley',
    },
    body: "Material things exist, but only with the help of it perceiving concious mind. 'Does a tree falling in the forest, observed by no one, make a sound'? 'No mind - no matter. No matter - nevermind'. To be is to be perceived.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/George_Berkeley',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'Voltaire',
    categories: ['Pragmatism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1694-11-21',
    title: 'Voltaire',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-002.jpg/220px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-002.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-002.jpg/220px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire%2C_d%C3%A9tail_%28mus%C3%A9e_Carnavalet%29_-002.jpg',
      alt: 'Voltaire',
      caption: 'Voltaire',
    },
    body: "Open minded, wanted to logically deny other philosophers. Truth seeker and anti-dogmatic. Protected other people and used philosophy for good. Thinking is not enough, you should do something with it.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Voltaire',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/Candide-Optimism-Classics-Francois-Voltaire/dp/0140455108?&linkCode=ll1&tag=philosophybre-20&linkId=7264de9756fee7732f8e8878ea9f8c1f&language=en_US&ref_=as_li_ss_tl',
        linkText: 'Candide, by Voltaire (155 p., +audio)',
      },
	  {
        href: 'http://www.amazon.com/Pocket-Philosophical-Dictionary-Oxford-Classics/dp/0199553637?&linkCode=ll1&tag=philosophybre-20&linkId=a96d6b49ffca3bf88a1ba76f7de24a1f&language=en_US&ref_=as_li_ss_tl',
        linkText: 'A Pocket Philosophical Dictionary, by Voltaire (283 p.)',
      },
    ],
  },
  {
    id: 'DavidHume',
    categories: ['Utilitariasm'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1711-05-07',
    title: 'David Hume',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Painting_of_David_Hume.jpg/220px-Painting_of_David_Hume.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Painting_of_David_Hume.jpg/220px-Painting_of_David_Hume.jpg',
      alt: 'David Hume',
      caption: 'David Hume',
    },
    body: "Open-minded, to an extent that liked to deny his own thoughts. Didn't like guesses, especially that which people don't understand and simply call 'God'. Tried to figure out what motivates people, the meaning of life - called that utility - thus the word utilitariasm - maximizing pleasure and minizming pain.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/David_Hume',
        linkText: 'Wiki',
      },
	  {
        href: 'https://www.amazon.com/Enquiry-Concerning-Human-Understanding/dp/193604191X',
        linkText: 'An Enquiry Concerning Human Understanding, by David Hume (162 p., +audio)',
      },
	  {
        href: 'https://www.amazon.com/Treatise-Human-Nature-Philosophical-Classics/dp/0486432505',
        linkText: 'A Treatise of Human Nature, by David Hume (480 p.)',
      },
    ],
  },
  {
    id: 'JeanJacquesRousseau',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1712-06-28',
    title: 'Jean-Jacques Rousseau',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/220px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/220px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg',
      alt: 'Jean-Jacques Rousseau',
      caption: 'Jean-Jacques Rousseau',
    },
    body: "A political thinker, who said that society should serve common people. Benefits can be of two kinds: personal and widespread within society. Social benefits should be enforced.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'ImmanuelKant',
    categories: ['Metaphysics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1724-04-22',
    title: 'Immanuel Kant',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/220px-Kant_gemaelde_3.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/220px-Kant_gemaelde_3.jpg',
      alt: 'Immanuel Kant',
      caption: 'Immanuel Kant',
    },
    body: "Father of metaphysics. Synthetical apriori knowledge - things which don't have to be accurate, not real, but widely spread, accepted by public and that is enough. Spent a significant amount of timeo on ethics. According to him, people should act morally regardless of their emotions. If your morale is driven by emotions and not reason - you are being immoral. Even if you did something that would be interpreted as moral, if that was done as a reaction, rather than a consious thought - then it is not a moral action. You cannot ever lie, not even say a white lie. If everyone did white lies all the time - world would decend into chaos.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Immanuel_Kant',
        linkText: 'Wiki',
      },
	  {
        href: 'http://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11',
        linkText: 'Critique of Pure Reason, by Immanuel Kant (784 p., +audio)',
      },
	  {
        href: 'https://www.amazon.co.uk/dp/0872205932/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=c2281161b0ac2ae92f2fd300c7538ca0&creativeASIN=0872205932&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Prolegomena to Any Future Metaphysics, by Immanuel Kant (160 p.)',
      },
	  {
        href: 'https://www.amazon.co.uk/dp/1107401062/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=7f15e4461c5be9d2444502008378c025&creativeASIN=1107401062&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Groundwork of the Metaphysics of Morals, by Immanuel Kant (134 p.)',
      },
	  {
        href: 'https://www.amazon.co.uk/dp/0415843456?ref_=as_li_ss_tl&language=en_US&linkCode=gg2&linkId=9890b9e2bc77ff7150d58b18a68812b0&tag=philosophybre-20',
        linkText: 'Kant, by Paul Guyer (520 p.)',
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
	  {
        href: 'https://www.amazon.com/gp/product/0198205163/ref=as_li_tl?ie=UTF8&tag=philosophyf09-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198205163&linkId=f9b171d4e3e0f14d627d44b046e4c17d',
        linkText: 'An Introduction to the Principles of Morals and Legislation, by Jeremy Bentham (456 p., +audio)',
      },
    ],
  }, 
  {
    id: 'GeorgWilhelmFriedrichHegel',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1770-08-27',
    title: 'Georg Wilhelm Friedrich Hegel',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/1831_Schlesinger_Philosoph_Georg_Friedrich_Wilhelm_Hegel_anagoria.JPG/220px-1831_Schlesinger_Philosoph_Georg_Friedrich_Wilhelm_Hegel_anagoria.JPG',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/1831_Schlesinger_Philosoph_Georg_Friedrich_Wilhelm_Hegel_anagoria.JPG/220px-1831_Schlesinger_Philosoph_Georg_Friedrich_Wilhelm_Hegel_anagoria.JPG',
      alt: 'Georg Wilhelm Friedrich Hegel',
      caption: 'Georg Wilhelm Friedrich Hegel',
    },
    body: "A cryptic writer, whose work were hardly understood by others, even himself. He said that the world is uncontrollably moving through breaththroughs which we cannot understand until they happen. He talked about the freedom of will, fredom of speech. The freedom was not only of an individual, but of a society as a whole. Each breakthrough expands the way of thinking (of both) and gives more freedom (to both).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel',
        linkText: 'Wiki',
      },
    ],
  },
  {
    id: 'ArthurSchopenhauer',
    categories: ['Pesimism', 'Metaphysics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1788-02-22',
    title: 'Arthur Schopenhauer',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/220px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/220px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg',
      alt: 'Arthur Schopenhauer',
      caption: 'Arthur Schopenhauer',
    },
    body: "Pesimistic, who said that life is meaningless. He wrote about invisible forces of the world. 'World as a will' - we (humans, animals, forces of nature) - are all led by some unknown force. We're all a part of the same. Art, especially music, is the best example 'world as will' as it encapsulates the ages. Also a hypocrite, because he didn't really respect others - even pushed one old lady, who died. He then created a poem and mocked her.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer',
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
	  {
        href: 'https://www.amazon.com/Liberty-John-Stuart-Mill/dp/1548076058',
        linkText: 'On Liberty, by John Stuart Mill (95 p., +audio)',
      },
	  {
        href: 'https://en.wikipedia.org/wiki/John_Stuart_Mill',
        linkText: 'The Subjection of Women, by John Stuart Mill (112 p., +audio)',
      },
    ],
  },
  {
    id: 'KarlMarx',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1818-05-05',
    title: 'Karl Marx',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg',
      alt: 'John Stuart Mill',
      caption: 'Karl Marx',
    },
    body: "A neverending fight between the working class and bosses. Communism. Perfect society rulled by the working class.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Karl_Marx',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'WilliamJames',
    categories: ['Metaphysics', 'Scepticism', 'Pragmatism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1818-05-05',
    title: 'William James',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/220px-William_James_b1842c.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/William_James_b1842c.jpg/220px-William_James_b1842c.jpg',
      alt: 'William James',
      caption: 'William James',
    },
    body: "Philosophical questions are meaningless, unless they in itself bring practical value. Pragmatic philosophy. Words are an innacurate representation of the world. The world is actually expressed through people. Truth is value (gain).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/William_James',
        linkText: 'Wiki',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/0486202917/ref=as_at?linkCode=gs2&tag=fivboo-21',
        linkText: 'The Will to Believe, Human Immortality, and Other Essays in Popular Philosophy, by William James (448 p., +audio)',
      }, 
	  {
        href: 'https://en.wikipedia.org/wiki/William_James',
        linkText: 'Pragmatism, by William James (152 p., +audio)',
      }, 
    ],
  },
  {
    id: 'FriedrichNietzsche',
    categories: ['Metaphysics', 'Scepticism', 'Pragmatism', 'Ethics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1844-10-15',
    title: 'Friedrich Nietzsche',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg',
      alt: 'Friedrich Nietzsche',
      caption: 'Friedrich Nietzsche',
    },
    body: "Pessimistic. There is something beyond good and evil and humanity should strive for it to reach the next stage. Superhuman idea - a human who could go beyond morale. Went mad at the end of his life.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Friedrich_Nietzsche',
        linkText: 'Wiki',
      },
	  {
        href: 'https://www.amazon.co.uk/dp/0679724656/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=f0d74bfafd967a488c12126c2dccb975&creativeASIN=0679724656&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Beyond Good & Evil, by Friedrich Nietzsche (288 p.)',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/0141195371/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=823bb4eb6e1b8494f4960f18490a2d54&creativeASIN=0141195371&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'On the Genealogy of Morals, by Friedrich Nietzsche (167 p.)',
      }, 
	  {
        href: 'http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397',
        linkText: 'Thus Spoke Zarathustra, by Friedrich Nietzsche (352 p., +audio)',
      }
    ],
  },
  {
    id: 'SigmundFreud',
    categories: ['Psychology'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1856-05-06',
    title: 'Sigmund Freud',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg',
      alt: 'Sigmund Freud',
      caption: 'Sigmund Freud',
    },
    body: "We often don't do what we want. Our true desires lie deep in our subconscious - for example, in our dreams or in failures (failures he said may be done maybe on purpose without realising that). Our true desires are revealed by simply letting one talk.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Sigmund_Freud',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'BertrandRussell',
    categories: ['Metaphysics', 'Paradoxes'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1872-05-18',
    title: 'Bertrand Russell',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bertrand_Russell_1957.jpg/220px-Bertrand_Russell_1957.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bertrand_Russell_1957.jpg/220px-Bertrand_Russell_1957.jpg',
      alt: 'Bertrand Russell',
      caption: 'Bertrand Russell',
    },
    body: "Pacifist, materialist. Author of set theory. Analyzed paradoxes. Linguistics - a setence can be: a - about one concrete thing, b - about a group of similar things, c - about a group which is always the same, unchanging. If you understand this - you can answer true or false to anything.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Bertrand_Russell',
        linkText: 'Wiki',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/0671201581/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=7f9e5b8a5812d027ddd5c31d266aca87&creativeASIN=0671201581&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'The History of Western Philosophy, by Bertrand Russell (906 p., +audio)',
      }, 
    ],
  },
  {
    id: 'LudwigWittgenstein',
    categories: ['Metaphysics', 'Paradoxes'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1889-04-26',
    title: 'Ludwig Wittgenstein',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/35._Portrait_of_Wittgenstein.jpg/220px-35._Portrait_of_Wittgenstein.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/35._Portrait_of_Wittgenstein.jpg/220px-35._Portrait_of_Wittgenstein.jpg',
      alt: 'Ludwig Wittgenstein',
      caption: 'Ludwig Wittgenstein',
    },
    body: "Philosophical books are useless. Language deceives us - people say what they don't mean. TODO",
    links: [
      {
        href: 'https://lt.wikipedia.org/wiki/Ludwig_Wittgenstein',
        linkText: 'Wiki',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/0486404455/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=8a110eceac555f4fa561d5baae6928c6&creativeASIN=0486404455&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Tractatus Logico-Philosophicus, by Ludwig Wittgenstein (125 p.)',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/1405159286/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=35c18c5675359bbd405abfbf38598550&creativeASIN=1405159286&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Philosophical Investigations, by Ludwig Wittgenstein (592 p.)',
      }, 
    ],
  },
  {
    id: 'KarlPopper',
    categories: ['Existentialism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1902-07-28',
    title: 'Karl Popper',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Karl_Popper.jpg/250px-Karl_Popper.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Karl_Popper.jpg/250px-Karl_Popper.jpg',
      alt: 'Karl Popper',
      caption: 'Karl Popper',
    },
    body: "Is a man guilty, if they just followed the orders? For example a nazzi, who was responsible of scheduling trains on time - was he guilty of doing a good job and scheduling jews killings? She would said - not guilty, because if circumstances were different - that person could even be a good person.",
    links: [
      {
        href: 'https://lt.wikipedia.org/wiki/Karl_Popper',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'JeanPaulSartreAndSimoneBolivar',
    categories: ['Existentialism'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1905-04-15',
    title: 'Jean-Paul Sartre and Simone Bolivar',
    image: {
      link: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/28/16/satre-de-beauvoir-rex-features.jpg',
      src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/28/16/satre-de-beauvoir-rex-features.jpg',
      alt: 'Jean-Paul Sartre and Simone Bolivar',
      caption: 'Jean-Paul Sartre and Simone Bolivar',
    },
    body: "Lovers for life (even though officially married to other people). Most was written in a caffee. Existentialism - meaningless being. We choose how we live our life - it's our choice whether we want to give it meaning or not. In its' essence - human is meaningless. To be sad - is also a choice. Satre was using meth, his work was near impossible to understand in the end.",
    links: [
      {
        href: 'https://www.independent.co.uk/arts-entertainment/books/features/existentialism-sarah-bakewell-jean-paul-sartre-simone-de-beauvoir-a6901501.html',
        linkText: 'Wiki',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/0671867806/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=b0099f68e2d25fcb5bd68aca0f893a53&creativeASIN=0671867806&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'Being and Nothingness, by Jean-Paul Sartre (928 p.)',
      }, 
	  {
        href: 'https://www.amazon.co.uk/dp/1504054229/ref=as_li_tl?ie=UTF8&linkCode=gg2&linkId=4e8a5f3765c670b8e5884fb6337e8f7d&creativeASIN=1504054229&tag=philosophybre-20&creative=9325&camp=1789',
        linkText: 'The Ethics of Ambiguity, by Simone de Beauvoir (192 p.)',
      }, 
    ],
  },
  {
    id: 'HannahArendt',
    categories: ['Ethics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1906-10-14',
    title: 'Hannah Arendt',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hannah_Arendt_1933.jpg/220px-Hannah_Arendt_1933.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hannah_Arendt_1933.jpg/220px-Hannah_Arendt_1933.jpg',
      alt: 'Hannah Arendt',
      caption: 'Hannah Arendt',
    },
    body: "Is a man guilty, if they just followed the orders? For example a nazzi, who was responsible of scheduling trains on time - was he guilty of doing a good job and scheduling jews killings? She would said - not guilty, because if circumstances were different - that person could even be a good person.",
    links: [
      {
        href: 'https://lt.wikipedia.org/wiki/Hannah_Arendt',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'AJAyer',
    categories: ['Ethics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1910-10-29',
    title: 'A. J. Ayer',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alfred_Jules_Ayer.png',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alfred_Jules_Ayer.png',
      alt: 'A. J. Ayer',
      caption: 'A. J. Ayer',
    },
    body: "Boo! Hooray! theory - sentiments shouldn't be used when proving a point. For the same reason there is no point in discussing moralility by itself. For example - is torture bad? Is being friendly a good thing? To answer such questions is the same as shouting 'Boo!', 'Hooray!'. We can discuss these things - but facts and concrete examples need to be a centre piece of it all. Most philosophy is useless, especially metaphysics (becuase it's about nothing).",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/A._J._Ayer',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'Peter Singer',
    categories: ['Ethics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1971-02-21',
    title: 'Peter Singer',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Peter_Singer_2017_%28cropped%29.jpg/220px-Peter_Singer_2017_%28cropped%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Peter_Singer_2017_%28cropped%29.jpg/220px-Peter_Singer_2017_%28cropped%29.jpg',
      alt: 'Peter Singer',
      caption: 'Peter Singer',
    },
    body: "Charity, when you give resources, may be harmful. Charity, when you give knowledge - is always benefitial.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Peter_Singer',
        linkText: 'Wiki',
      }, 
    ],
  },
  {
    id: 'JohnRawls',
    categories: ['Politics'],
    color: 'green',
    faicon: 'feather-pointed',
    datetime: '1971-02-21',
    title: 'John Rawls',
    image: {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/John_Rawls_%281971_photo_portrait%29.jpg/220px-John_Rawls_%281971_photo_portrait%29.jpg',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/John_Rawls_%281971_photo_portrait%29.jpg/220px-John_Rawls_%281971_photo_portrait%29.jpg',
      alt: 'John Rawls',
      caption: 'John Rawls',
    },
    body: "The innequality of society. Definition of an ideal world is beast to our own ways of thinking. To create a non-biast view, one should assume the any role in the society created.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/John_Rawls',
        linkText: 'Wiki',
      }, 
    ],
  },
];

// Page details
const pageTitle = 'Philosophers of the ages'; // The title of the page that shows in the browser tab
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
