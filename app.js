#! /usr/bin/env node
//Task # 41
// Magicians: Make a array of magicians names pass the array to a function 
// Called show magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
export {};
