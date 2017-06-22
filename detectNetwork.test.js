/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
//
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org
//
//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.
//
//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });
//
//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });
//
//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }
//
//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

//random string generator(got help from google)
//The helper methods were used for China UnionPay, and will be refactored into all of the other tests if I have time
var randomgen = function(len, prefix){
  var numbers = '1234567890';
  var output = [];
  for (var i = 0; i< prefix.length; i++){
    var numstring = '';
    for (var j = 0; j<(len-prefix[i].length); j++){
      numstring += numbers.charAt(Math.floor(Math.random * numbers.length))
    }
    output.push(prefix[i]+numstring);
  }
  return output;
}

//range generator
var rangeMaker = function(n1, n2){
  var range = []
  for (var i = n1; i<=n2; i++){
    range.push(i.toString());
  }
  return range;
}



describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
  };


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') !== 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') !== 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') !== 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  var discprefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];

  var check16 = randomgen(16, discprefixes);
  var check19 = randomgen(19, discprefixes);


  for (var i = 0; i<discprefixes.length; i++){
    (function(i){
      it('has prefix ' + discprefixes[i] + ' and length 16', function(){
        detectNetwork(check16[i]).should.equal('Discover')
      });
      it('has prefix ' + discprefixes[i] + ' and length 19', function(){
        detectNetwork(check19[i]).should.equal('Discover')
      });
    })(i);
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
//5018, 5020, 5038, or 6304
  mPrefixes = ['5018', '5020', '5038', '6304'];

  check12 = randomgen(12, mPrefixes);
  check13 = randomgen(13, mPrefixes);
  check14 = randomgen(14, mPrefixes);
  check15 = randomgen(15, mPrefixes);
  check16 = randomgen(16, mPrefixes);
  check17 = randomgen(17, mPrefixes);
  check18 = randomgen(18, mPrefixes);
  check19 = randomgen(19, mPrefixes);

  for (var i = 0; i < mPrefixes.length; i++){
    (function(i){
      it('has a prefix of ' + mPrefixes[i] + 'and length 12', function(){
        detectNetwork(check12[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 13', function(){
        detectNetwork(check13[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 14', function(){
        detectNetwork(check14[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 15', function(){
        detectNetwork(check15[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 16', function(){
        detectNetwork(check16[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 17', function(){
        detectNetwork(check17[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 18', function(){
        detectNetwork(check18[i]).should.equal('Maestro');
      });
      it('has a prefix of ' + mPrefixes[i] + 'and length 19', function(){
        detectNetwork(check19[i]).should.equal('Maestro');
      });
    })(i);
  }
});

describe('China UnionPay', function(){

  var should = chai.should();
  //creating the range of prefixes
  var range1 = rangeMaker(624, 626);
  var range2 = range1.concat(rangeMaker(6282,6288));
  var fullrange = range2.concat(rangeMaker(622126, 622925));

  //generating strings of numbers
  var check16 = randomgen(16, fullrange);
  var check17 = randomgen(17, fullrange);
  var check18 = randomgen(18, fullrange);
  var check19 = randomgen(19, fullrange);

  for (var i = 0; i<fullrange.length; i++){
    (function(i){
      it('has prefix ' + fullrange[i] + ' and length 16', function(){
        detectNetwork(check16[i]).should.equal('China UnionPay')
      });
      it('has prefix ' + fullrange[i] + ' and length 17', function(){
        detectNetwork(check17[i]).should.equal('China UnionPay')
      });
      it('has prefix ' + fullrange[i] + ' and length 18', function(){
        detectNetwork(check18[i]).should.equal('China UnionPay')
      });
      it('has prefix ' + fullrange[i] + ' and length 19', function(){
        detectNetwork(check19[i]).should.equal('China UnionPay')
      });
    })(i);
  }
});

describe('Switch', function(){
  var should = chai.should();
//4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
  it('prefix is 4903 and length is 16, 18, or 19', function(){
    detectNetwork('4903123412334234').should.equal('Switch');
    detectNetwork('490312341342341234').should.equal('Switch');
    detectNetwork('4903123412343451234').should.equal('Switch');
  })
  it('prefix is 4905 and length is 16, 18, or 19', function(){
    detectNetwork('4905123412334234').should.equal('Switch');
    detectNetwork('490512341342341234').should.equal('Switch');
    detectNetwork('4905123412343451234').should.equal('Switch');
  })
  it('prefix is 4911 and length is 16, 18, or 19', function(){
    detectNetwork('4911123412334234').should.equal('Switch');
    detectNetwork('491112341342341234').should.equal('Switch');
    detectNetwork('4911123412343451234').should.equal('Switch');
  })
  it('prefix is 4936 and length is 16, 18, or 19', function(){
    detectNetwork('4936123412334234').should.equal('Switch');
    detectNetwork('493612341342341234').should.equal('Switch');
    detectNetwork('4936123412343451234').should.equal('Switch');
  })
  it('prefix is 564182 and length is 16, 18, or 19', function(){
    detectNetwork('5641823412334234').should.equal('Switch');
    detectNetwork('564182341342341234').should.equal('Switch');
    detectNetwork('5641823412343451234').should.equal('Switch');
  })
  it('prefix is 633110 and length is 16, 18, or 19', function(){
    detectNetwork('6331103412334234').should.equal('Switch');
    detectNetwork('633110341342341234').should.equal('Switch');
    detectNetwork('6331103412343451234').should.equal('Switch');
  })
  it('prefix is 6333 and length is 16, 18, or 19', function(){
    detectNetwork('6333123412334234').should.equal('Switch');
    detectNetwork('633312341342341234').should.equal('Switch');
    detectNetwork('6333123412343451234').should.equal('Switch');
  })
  it('prefix is 6759 and length is 16, 18, or 19', function(){
    detectNetwork('6759123412334234').should.equal('Switch');
    detectNetwork('675912341342341234').should.equal('Switch');
    detectNetwork('6759123412343451234').should.equal('Switch');
  })
});
