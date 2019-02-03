/*
 *
 * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
 * and array methods join()
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const name = "AlbERt eINstEiN";

function nameFormatter(oldName) {
  /* 
    Split the string by space
    Slice the first character and make it uppercase
    Slice the reset of the characters and make it lowercase
    Join the splitted array with space to get the final result
    Final result should be "Albert Einstein"                
    */
  const splittedArray = oldName.split(' ');
  console.log(splittedArray);
  const result = splittedArray.map((item) => {    
    const mapped = item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
    console.log(mapped);
    return mapped;
  });
  console.log(result);
  return result.join(' ');
}
console.log(nameFormatter(name));