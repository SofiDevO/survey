import { nanoid } from 'nanoid'
console.log(nanoid(16));


const data = {
  titulo: "Que fruta prefieres?",
  _id: "RZK5yuBFjL7iEFKs",
  voters: ['IP', 'IP2', 'IP3'],
  options: [
    { name: "patata", count: 10, id:"dasdasd6323a54da" },
    { name: "Banana", count: 0, id:"dasdasd63sa545da" },
    { name: "xanahoria", count: 3, id:"dasdasd54863a34a" },
  ],
  titulo: "Que hacemos?",
  _id: "jWk8qlsVTIVRJP4l",
  voters: ['IP', 'IP2', 'IP3'],
  options: [
    { name: "patata", count: 10, id:"dasdasd6323a54da" },
    { name: "Banana", count: 0, id:"dasdasd63sa545da" },
    { name: "xanahoria", count: 3, id:"dasdasd54863a34a" },
  ],
};


const surverys = [{
  titulo: "Que fruta prefieres?",
  _id: "RZK5yuBFjL7iEFKs",
  options: [
    { name: "patata", count: 10, id:"dasdasd6323a54da" },
    { name: "Banana", count: 0, id:"dasdasd63sa545da" },
    { name: "xanahoria", count: 3, id:"dasdasd54863a34a" },
  ],
}];

const votes = [
  { _id: "RZK5yuopjL7iEFKs", survery: 'RZK5yuBFjL7iEFKs', voters: ['IP1', 'IP2'] },
  { _id: "RZK5yuopjL7iEFKs", survery: 'RZasduBFjL7iEFKs', voters: ['IP1', 'IP2'] },
  { _id: "RZK5yuopjL7iEFKs", survery: 'RZasdyuBFj7iEFKs', voters: ['IP1', 'IP2'] },
  { _id: "RZK5yuopjL7iEFKs", survery: 'RZK65uBFjL7iEFKs', voters: ['IP1', 'IP2'] },
  { _id: "RZK5yuopjL7iEFKs", survery: 'RZK5yuBFj34iEFKs', voters: ['IP1', 'IP2'] },
];

voters.find(vote => vote.survery == 'RZK5yuBFjL7iEFKs')

const db = {}
db.findBy({survery: 'RZK5yuBFjL7iEFKs'})


/*
const uid = (Math.random() * 16).toString(36).substring(2);
const uuid = (length = 16) =>{
  const min = Math.pow(10, length - 1) // 10 elevado a 15 = 1,000,000,000,000,000
  const max = Math.pow(10, length) -1 // 10 elevado a 16 = 1000000000000000 // -1 = 9999999999999999
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(uid); */
// 1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
// 1 a 16 > MX 2 Digits
// Math.random 0.12342341234978 + 1
// 1.12342341234978
// toString(36)  1.kjhk2j34h8273642ih
// substring(2)  kjhk2j34h8273642ih



// crypto.randomUUID() Stron
let uuid = crypto.randomUUID();
console.log(uuid);

export function generateCryptoId(minLength = 5, maxLength = 7) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  const id = Array.from(randomValues)
    .map(value => value.toString(36))
    .join('');

  return id.substring(0, length);
}

// Grarrux
const UUID = (length = 16) => {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);

  return Array.from(bytes)
    .map(b => b.toString(36).padStart(2, '0')) // base 36 con relleno
    .join('')
    .slice(0, length);
}

console.log(UUID().length);

// 6j6l3t1z065b5v01
