// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  let exist = true;

  for (let a = 0; a < contacts.length; a++) {
    if (name == contacts[a].firstName && contacts[a].hasOwnProperty(prop)) {
      exist = true;
      // console.log("match");
      break;
    } else {
      exist = false;
      // console.log("not match")
    }
  }
  // console.log(bol);

  if (!exist) {
    for (let i = 0; i < contacts.length; i++) {
      if (name !== contacts[i]["firstName"]) {
        // console.log("No such Contact");
        // break;
        return "No such contact";
      } else if (!contacts[i].hasOwnProperty(prop)) {
        // console.log("No such Property");
        // break;
        return "No such property";
      }
    }
  } else {
    for (let j = 0; j < contacts.length; j++) {
      if (name == contacts[j].firstName && contacts[j].hasOwnProperty(prop)) {
        // console.log(contacts[j][prop]);
        // break;
        return contacts[j][prop];
      }
    }

    // Only change code above this line
  }
}

lookUpProfile("Sherlock", "likes");
