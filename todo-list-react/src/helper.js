class Helper {

    // Parse a JSON string to an object in all cases, without throwing
   static parseJsonToObject(jsonStr) {
      try{
          var obj = JSON.parse(jsonStr);
          return obj;
      }catch(e){
          console.error(e);
          return {};
      }
   }

   static toJson(obj) {
       try {
           var obj = JSON.stringify(obj);
           return obj;
       }catch(e) {
           console.error(e);
           return {};
       }
   }

   static saveData(data) {
       if(data) {
        localStorage.setItem('tasks', data);
       }   
   }

   static getData() {
       return localStorage.getItem('tasks');
   }

   // Create a string of random alphanumeric characters, of a given length
static createRandomString(strLength) {
    strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
    if(strLength){
        // Define all the possible characters that could go into a string
        var possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // Start the final string
        var str = '';
        for(var i = 1; i <= strLength; i++){
            // Get a random character from the possibleCharacters string
            var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            // Append this character to the final string
            str += randomCharacter;
        }

        // Return the final string
        return str;
    }else {
        return false;
    }
};


};

export default Helper;
