function Compress (str) {
    if (str.length ==0) {
      console.log('Enter valid string');
      return;
    }
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }
  
  Compress(''); 
  Compress('aa$'); 
  Compress('aaabbc'); 
  Compress('aaaabccaabbdd#'); 