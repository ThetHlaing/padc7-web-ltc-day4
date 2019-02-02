const name = "AlbERt eINstEiN";

function nameFormatter(oldName) {
    /* 
      Split the string by space
      Slice the first character and make it uppercase
      Slice the reset of the characters and make it lowercase
      Join the splitted array with space to get the final result
      Final result should be "Albert Einstein"                
      */
    //var text = "AlbERt eINstEiN";
    const text = oldName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');


    return text;
}
console.log(nameFormatter(name));