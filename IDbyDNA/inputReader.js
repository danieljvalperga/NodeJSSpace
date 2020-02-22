var input1 = {
    Part1: "A",
    Part2: "B",
    Part3: "C",
    NumberPart1: 1,
    NumberPart2: 2,
    NumberPart3: 3
}

var input2 = {
    Count: 2,
    Parts: ["A", "B", "X", "X"],
    Numbers: [1, 2]
}

var input3 = {
    Count: 3,
    Parts: ["A", "B", "X", "X"],
    Numbers: [1, 2, 88]
}

var input4 = {
    NumberStrings: {
        1: "A",
        2: "B",
        3: "C",
        4: "D"
    }
}

var input5 = {
    "A": 1,
    "B": 2,
    "C": 3
}

var input6 = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 88
}

var input7 = {
    "A": 1,
    "": 2,
    "C": 3,
    "X": 88
}

var input8 = {
    "AbcDElaskdgjalawoeih": 1,
    "AbcDElaskdgjalawoeihZLKSJFDKlkzjxlkzjflkzjLJLZFKJLZZ": 19128347918759831795781935791875918375,
    "": 2,
    "-+//\\$%&*^@!(){}:<>?": 3,
    "X": 88
}

var input9 = {
    "AbcDElaskdgjalawoeih": 1,
    "AbcDElaskdgjalawoeihZLKSJFDKlkzjxlkzjflkzjLJLZFKJLZZ": 19128347918759831795781935791875918375
}

var input10 = {
    "-+//\\$%&*^@!(){}:<>?": 3
}

function readInput(input) {
    var output = [];
    var letters = /^[A-Za-z]+$/;
    var ecnt = 0;

    for (var entry in input) {
        var p1 = entry
        var p2 = input[entry];

        if (letters.test(p1) && Number.isInteger(p2)) {
            output.push(p1 + ":" + p2);

            if (p1.valueOf() === "X") {
                ecnt++;
            }
        } else {
            output = [];
            break;
        }
    };

    if (output.length > 0) {
        return output.toString().replace(/,/g, " ") + (ecnt > 0 ? ", error found an X" : '');
    } else {
        return "Unexpected input";
    }
}

console.log(readInput(input1));
console.log(readInput(input2));
console.log(readInput(input3));
console.log(readInput(input4));
console.log(readInput(input5));
console.log(readInput(input6));
console.log(readInput(input7));
console.log(readInput(input8));
console.log(readInput(input9));
console.log(readInput(input10));