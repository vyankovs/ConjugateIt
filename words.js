const pronoms = ["je", "tu", "il", "nous", "vous", "ils"];

class Word {
  constructor(inf, je, tu, il, nous, vous, ils) {
    this.inf = inf;
    this.je = je;
    this.tu = tu;
    this.il = il;
    this.nous = nous;
    this.vous = vous;
    this.ils = ils;
  }
}

const allerPresent = new Word(
  "aller",
  "vais",
  "vas",
  "va",
  "allons",
  "allez",
  "vont"
);
const avoirPresent = new Word("avoir", "ai", "as", "a", "avons", "avez", "ont");
const parlerPresent = new Word(
  "parler",
  "parle",
  "parles",
  "parle",
  "parlons",
  "parlez",
  "parlent"
);
const pouvoirPresent = new Word(
  "pouvoir",
  "peux",
  "peux",
  "peut",
  "pouvons",
  "pouvez",
  "peuvent"
);
const offrirPresent = new Word(
  "offrir",
  "offre",
  "offres",
  "offre",
  "offrons",
  "offrez",
  "offrent"
);
const savoirPresent = new Word(
  "savoir",
  "sais",
  "sais",
  "sait",
  "savons",
  "savez",
  "savent"
);
const donnerPresent = new Word(
  "donner",
  "donne",
  "donnes",
  "donne",
  "donnons",
  "donnez",
  "donnent"
);
const passerPresent = new Word(
  "passer",
  "passe",
  "passes",
  "passe",
  "passons",
  "passez",
  "passent"
);
const finirPresent = new Word(
  "finir",
  "finis",
  "finis",
  "finit",
  "finissons",
  "finissez",
  "finissent"
);
const croirePresent = new Word(
  "croire",
  "crois",
  "crois",
  "croit",
  "croyons",
  "croyez",
  "croient"
);
const direPresent = new Word(
  "dire",
  "dis",
  "dis",
  "dit",
  "disons",
  "dites",
  "disent"
);
const mettrePresent = new Word(
  "mettre",
  "mets",
  "mets",
  "mettons",
  "mettez",
  "mettent"
);
const wordsPresent = [
  allerPresent,
  avoirPresent,
  parlerPresent,
  pouvoirPresent,
  offrirPresent,
  savoirPresent,
  donnerPresent,
  passerPresent,
  finirPresent,
  croirePresent,
  direPresent,
  mettrePresent,
];

const allerImp = new Word(
  "aller",
  "allais",
  "allais",
  "allait",
  "allions",
  "alliez",
  "allaient"
);
const avoirImp = new Word(
  "avoir",
  "avais",
  "avais",
  "avait",
  "avions",
  "aviez",
  "avaient"
);
const parlerImp = new Word(
  "parler",
  "parlais",
  "parlais",
  "parlait",
  "parlions",
  "parliez",
  "parlaient"
);
const pouvoirImp = new Word(
  "pouvoir",
  "pouvais",
  "pouvais",
  "pouvait",
  "pouvions",
  "pouviez",
  "pouvaient"
);
const offrirImp = new Word(
  "offrir",
  "offrais",
  "offrais",
  "offrait",
  "offrions",
  "offriez",
  "offraient"
);
const savoirImp = new Word(
  "savoir",
  "savais",
  "savais",
  "savait",
  "savions",
  "saviez",
  "savaient"
);
const donnerImp = new Word(
  "donner",
  "donnais",
  "donnais",
  "donnait",
  "donnions",
  "donniez",
  "donnaient"
);
const passerImp = new Word(
  "passer",
  "passais",
  "passais",
  "passait",
  "passions",
  "passiez",
  "passaient"
);
const finirImp = new Word(
  "finir",
  "finissais",
  "finissais",
  "finissait",
  "finissions",
  "finissiez",
  "finissaient"
);
const direImp = new Word(
  "dire",
  "disais",
  "disais",
  "disait",
  "disions",
  "disiez",
  "disaient"
);

const croireImp = new Word(
  "croire",
  "croyais",
  "croyais",
  "croyait",
  "croyions",
  "croyiez",
  "croyaient"
);
const mettreImp = new Word(
  "mettre",
  "mettais",
  "mettais",
  "mettait",
  "mettions",
  "mettiez",
  "mettaient"
);

const wordsImparfait = [
  allerImp,
  avoirImp,
  parlerImp,
  pouvoirImp,
  offrirImp,
  savoirImp,
  donnerImp,
  passerImp,
  finirImp,
  direImp,
  croireImp,
  mettreImp,
];

const allerFutur = new Word(
  "aller",
  "irai",
  "iras",
  "ira",
  "irons",
  "irez",
  "iront"
);
const avoirFutur = new Word(
  "avoir",
  "aurai",
  "auras",
  "aura",
  "aurons",
  "aurez",
  "auront"
);
const parlerFutur = new Word(
  "parler",
  "parlerai",
  "parleras",
  "parlera",
  "parlerons",
  "parlerez",
  "parleront"
);
const pouvoirFutur = new Word(
  "pouvoir",
  "pourrai",
  "pourras",
  "pourra",
  "pourrons",
  "pourrez",
  "pourront"
);
const offrirFutur = new Word(
  "offrir",
  "offrirai",
  "offriras",
  "offrira",
  "offrirons",
  "offrirez",
  "offriront"
);
const savoirFutur = new Word(
  "savoir",
  "saurai",
  "sauras",
  "saura",
  "saurons",
  "saurez",
  "sauront"
);
const donnerFutur = new Word(
  "donner",
  "donnerai",
  "donneras",
  "donnera",
  "donnerons",
  "donnerez",
  "donneront"
);
const passerFutur = new Word(
  "passer",
  "passerai",
  "passeras",
  "passera",
  "passerons",
  "passerez",
  "passeront"
);
const finirFutur = new Word(
  "finir",
  "finirai",
  "finiras",
  "finira",
  "finirons",
  "finirez",
  "finiront"
);
const direFutur = new Word(
  "dire",
  "dirai",
  "diras",
  "dira",
  "dirons",
  "direz",
  "diront"
);

const mettreFutur = new Word(
  "mettre",
  "mettrai",
  "mettras",
  "mettra",
  "mettrons",
  "mettrez",
  "mettront"
);

const wordsFutur = [
  allerFutur,
  avoirFutur,
  parlerFutur,
  pouvoirFutur,
  offrirFutur,
  savoirFutur,
  donnerFutur,
  passerFutur,
  finirFutur,
  direFutur,
  mettreFutur,
];

const allerCond = new Word(
  "aller",
  "irais",
  "irais",
  "irait",
  "irions",
  "iriez",
  "iraient"
);
const avoirCond = new Word(
  "avoir",
  "aurais",
  "aurais",
  "aurait",
  "aurions",
  "auriez",
  "auraient"
);
const parlerCond = new Word(
  "parler",
  "parlerais",
  "parlerais",
  "parlerait",
  "parlerions",
  "parleriez",
  "parleraient"
);
const pouvoirCond = new Word(
  "pouvoir",
  "pourrais",
  "pourrais",
  "pourrait",
  "pourrions",
  "pourriez",
  "pourraient"
);
const offrirCond = new Word(
  "offrir",
  "offrirais",
  "offrirais",
  "offrirait",
  "offririons",
  "offririez",
  "offriraient"
);
const savoirCond = new Word(
  "savoir",
  "saurais",
  "saurais",
  "saurait",
  "saurions",
  "sauriez",
  "sauraient"
);
const donnerCond = new Word(
  "donner",
  "donnerais",
  "donnerais",
  "donnerait",
  "donnerions",
  "donneriez",
  "donneraient"
);
const passerCond = new Word(
  "passer",
  "passerais",
  "passerais",
  "passerait",
  "passerions",
  "passeriez",
  "passeraient"
);
const finirCond = new Word(
  "finir",
  "finirais",
  "finirais",
  "finirait",
  "finirions",
  "finiriez",
  "finiraient"
);
const direCond = new Word(
  "dire",
  "dirais",
  "dirais",
  "dirait",
  "dirions",
  "diriez",
  "diraient"
);
const mettreCond = new Word(
  "mettre",
  "mettrais",
  "mettrais",
  "mettrait",
  "mettrions",
  "mettriez",
  "mettraient"
);
const wordsCond = [
  allerCond,
  avoirCond,
  parlerCond,
  pouvoirCond,
  offrirCond,
  savoirCond,
  donnerCond,
  passerCond,
  finirCond,
  direCond,
  mettreCond,
];

const allerPasse = new Word(
  "aller",
  "suis allé",
  "es allé",
  "est allé",
  "sommes allés",
  "êtes allés",
  "sont allés"
);
const avoirPasse = new Word(
  "avoir",
  "ai eu",
  "as eu",
  "a eu",
  "avons eu",
  "avez eu",
  "ont eu"
);
const parlerPasse = new Word(
  "parler",
  "ai parlé",
  "as parlé",
  "a parlé",
  "avons parlé",
  "avez parlé",
  "ont parlé"
);
const pouvoirPasse = new Word(
  "pouvoir",
  "ai pu",
  "as pu",
  "a pu",
  "avons pu",
  "avez pu",
  "ont pu"
);
const offrirPasse = new Word(
  "offrir",
  "ai offert",
  "as offert",
  "a offert",
  "avons offert",
  "avez offert",
  "ont offert"
);
const savoirPasse = new Word(
  "savoir",
  "ai su",
  "as su",
  "a su",
  "avons su",
  "avez su",
  "ont su"
);
const donnerPasse = new Word(
  "donner",
  "ai donné",
  "as donné",
  "a donné",
  "avons donné",
  "avez donné",
  "ont donné"
);
const passerPasse = new Word(
  "passer",
  "suis passé",
  "es passé",
  "est passé",
  "sommes passés",
  "êtes passés",
  "sont passés"
);
const finirPasse = new Word(
  "finir",
  "ai fini",
  "as fini",
  "a fini",
  "avons fini",
  "avez fini",
  "ont fini"
);
const direPasse = new Word(
  "dire",
  "ai dit",
  "as dit",
  "a dit",
  "avons dit",
  "avez dit",
  "ont dit"
);
const mettrePasse = new Word(
  "mettre",
  "ai mis",
  "as mis",
  "a mis",
  "avons mis",
  "avez mis",
  "ont mis"
);
const wordsPasse = [
  allerPasse,
  avoirPasse,
  parlerPasse,
  pouvoirPasse,
  offrirPasse,
  savoirPasse,
  donnerPasse,
  passerPasse,
  finirPasse,
  direPasse,
  mettrePasse,
];
