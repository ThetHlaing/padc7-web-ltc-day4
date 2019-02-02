
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
       let words=oldName.split(" ");
       let w0=words[0].charAt(0);
       let w1=words[0].slice(1).toLowerCase();
       let w2=w0.concat(w1);
      let w3=words[1].charAt(0).toUpperCase();
      let w4=words[1].slice(1).toLowerCase();
      let w5=w3.concat(w4);

      oldName=w2.concat(" ",w5);
        return oldName;
    }
    console.log(nameFormatter(name));