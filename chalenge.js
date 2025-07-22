let person = {
    firstname: "Ayman",
    lastname: "Chabbaki",
    age: 21,
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${this.name} is older than ${otherPerson.name}`;
        } else if (this.age < otherPerson.age) {
            return `${this.name} is younger than ${otherPerson.name}`;
        } else {
            return `${this.name} and ${otherPerson.name} are the same age`;
        }
    }
}

p1 = new Person("Ayman", 21);
p2 = new Person("yahya", 22);
p3 = new Person("Assia", 22);
console.log(p1.compareAge(p2));
console.log(p1.compareAge(p3)); 
console.log(p2.compareAge(p3)); 
console.log(p2.compareAge(p1)); 

function mostOccured(numbers) {
    let occured= numbers[0];
    let maxCount = 1;
    for (let i = 1; i < numbers.length; i++) {
        let count = 1;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            occured = numbers[i];
        }
        
    }

    return occured;
}

console.log(mostOccured([1,1,2,2,1,2,3,1,4,2,1,2,4,1])); // Output: 1