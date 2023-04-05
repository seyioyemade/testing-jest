const stringLength = (str) => {
  try { 
    if (str.length > 0 && str.length < 10){
      return str.length;
    } else{
    throw "invalid";
   }

  }

  catch(err) {
   return err;
  }


}


module.exports = stringLength;
