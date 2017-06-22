// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var lengthcheck = function(cardNumber, len){
    if(len.constructor === Array){
      var check = 0;
      for(var i = 0; i<len.length; i++){
        if(cardNumber.length = len[i]){
          check++;
        }
      }
      if(check !== 0){
        return true;
      }
      return false;
    }

    if(cardNumber.length === len){
      return true;
    }
    return false;

  };


  var prefixcheck = function(cardNumber, prefix){
    if(prefix.constructor === Array){
      var check = 0;
      for(var i = 0; i < prefix.length; i++){
        if(cardNumber.indexOf(prefix[i]) === 0){
          check++;
        }
      }
      if(check !== 0){
        return true;
      }else{
        return false;
      }
    }

    if(cardNumber.indexOf(prefix) === 0){
      return true;
    }
    return false;
  };

  var rangeMaker = function(n1, n2){
    var range = []
    for (var i = n1; i<=n2; i++){
      range.push(i.toString());
    }
    return range;
  }




  var range1 = rangeMaker(6282, 6288);
  var range2 = range1.concat(rangeMaker(624, 626));
  var chinapayranges = range2.concat(rangeMaker(622126,622925));

  var network = 'network not found';

  if ( lengthcheck(cardNumber, 14) && prefixcheck(cardNumber, ['38', '39'])){
    network = 'Diner\'s Club';
  }else if(lengthcheck(cardNumber, 15) && prefixcheck(cardNumber, ['34', '37'])){
    network = "American Express";
//(length === 13 || length === 16 || length === 19) && n1 === 4
  }else if(lengthcheck(cardNumber, [13, 16, 19]) && cardNumber[0] === '4' && !prefixcheck(cardNumber, ['4903', '4905', '4911', '4936'])){
    network = 'Visa';
//(length === 16) && (n1 === 5 && (n2 === 1 || n2 === 2 || n2 === 3 || n2 === 4 || n2 === 5))
  }else if( lengthcheck(cardNumber, 16) && prefixcheck(cardNumber, ['51', '52', '53', '54', '55'])){
    network = 'MasterCard';
//6011, 644-649, or 65, and a length of 16 or 19.
  }else if( lengthcheck(cardNumber, [16, 19]) && prefixcheck(cardNumber, ['6011', '644', '645', '646', '647', '648', '649', '65']) ){
    network = 'Discover';
    //5018, 5020, 5038, or 6304
  }else if( (lengthcheck(cardNumber, [12,13,14,15,16,17,18,19]) && prefixcheck(cardNumber, ['5018', '5020', '5038', '6304']))){
    network = 'Maestro';
  }else if( lengthcheck(cardNumber, [16,17,18,19]) && prefixcheck(cardNumber, chinapayranges)){
    network = 'China UnionPay';
  }else if( (lengthcheck(cardNumber, [16,18,19]) && prefixcheck(cardNumber, ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']))){
    network = 'Switch';
  }
  return network;
  // Once you've read this, go ahead and try to implement this function, then return to the console. 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
};
