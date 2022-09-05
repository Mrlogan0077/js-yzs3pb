const firstdiv = document.createElement('div');
document.createAttribute('a');
firstdiv.setAttribute('href', '#');
firstdiv.setAttribute('class', 'list-group-item list-group-item-action active');
document.querySelector('.list-group').appendChild(firstdiv);
firstdiv.innerText = `Zahid`;

const secdiv = document.createElement('div');
document.createAttribute('a');
secdiv.setAttribute('href', '#');
secdiv.setAttribute('class', 'list-group-item list-group-item-action');
document.querySelector('.list-group').appendChild(secdiv);
secdiv.innerText = `imtiyaz`;

const thirddiv = document.createElement('div');
document.createAttribute('a');
thirddiv.setAttribute('href', '#');
thirddiv.setAttribute('class', 'list-group-item list-group-item-action');
document.querySelector('.list-group').appendChild(thirddiv);
thirddiv.innerText = `pavan`;

const fourthdiv = document.createElement('div');
document.createAttribute('a');
fourthdiv.setAttribute('href', '#');
fourthdiv.setAttribute('class', 'list-group-item list-group-item-action ');
document.querySelector('.list-group').appendChild(fourthdiv);
fourthdiv.innerText = `khaja`;

const para = document.createElement('p');
para.setAttribute(
  'class',
  'p-4 text-decoration-underline bg-info bg-opacity-20 border-box shadow text-white fs-2 border border-dark rounded-end  '
);
document.querySelector('.divide').appendChild(para);
para.innerText = `Below are list of some data of criminals :-`;

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

let info = characters.map((details, idx) => {
  const tr = document.createElement('tr');
  document.querySelector('.table tbody').appendChild(tr);

  const firstTD = document.createElement('td');
  firstTD.innerText = idx + 1;
  tr.appendChild(firstTD);

  const secondTD = document.createElement('td');
  secondTD.innerText = details.name;
  tr.appendChild(secondTD);

  const thirdTD = document.createElement('td');
  thirdTD.innerText = details.gender;
  tr.appendChild(thirdTD);

  const fourthTD = document.createElement('td');
  fourthTD.innerText = details.eye_color;
  tr.appendChild(fourthTD);
});

const paratwo = document.createElement('p');
paratwo.innerText = `Here is some BLACKLISTED data given below along with their usernames :- `;
document.querySelector('.division_two').appendChild(paratwo);
paratwo.setAttribute(
  'class',
  'bg-warning p-3 text-white fs-4 shadow fw-bold text-decoration-underline border border-dark'
);

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

let information = users.map((info, value) => {
  let trr = document.createElement('tr');
  document.querySelector('.table-dark  tbody').appendChild(trr);

  const serialinfo = document.createElement('td');
  serialinfo.innerText = value + 1;
  trr.appendChild(serialinfo);

  const tabledata = document.createElement('td');
  tabledata.innerText = info.name;
  trr.appendChild(tabledata);

  const tabledatatwo = document.createElement('td');
  tabledatatwo.innerText = info.username;
  trr.appendChild(tabledatatwo);

  const tabledatathree = document.createElement('td');
  tabledatathree.innerText = info.email;
  trr.appendChild(tabledatathree);
});

// const user = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

// let persondata=0;
// let personskills;
// for (let userr of Object.keys(user)){
//   if(user[userr].skills.length>persondata){
//     persondata=user[userr].skills.length;
//     personskills=Object.assign({},user[userr])
//   }

//   let objectdata=document.createElement("tr");
//   document.querySelector(".table-striped-columns tbody").appendChild(objectdata)

//   let onedata=document.createElement("td");
//   onedata.innerText=userr
//  objectdata.appendChild(onedata)

// }
