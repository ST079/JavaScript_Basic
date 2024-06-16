const person = {
  firstName: "Sujan",
  lastName: "Tamang",
  age: 99,
  fullName: function () {
    return this.firstName + this.lastName;
  },
  isEligibleToVote: function () {
    return this.age > 18;
  },
  isEligibleToMarry: () => {
    return person.age > 21;
  },
};

// CRUD create read update delete
// updating
// overwriting
person.firstName = "kusum";
// appending
person.gender = "Male";
console.log(person);

const arr = [
  { name: "Sujan", age: 19 },
  { name: "kusum", age: 19 },
];
console.log(arr);
