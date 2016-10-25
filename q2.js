function pythTriplet() {
    // a < b < c
    var a = 1;  
    var b = a + 1;  
    var c;  
  
    while ( a < 1000 ) {  
        while ( b < 1000 && b > a ) { 
            //if a + b + c = 1000 then using simple algebra c = 1000 - a - b
            c = 1000 - a - b;  
            if ( c < b ) {  
                break;  
            }  
            if ( a**2 + b**2 == c**2 ) {  
                // console.log('a =',a,'b =',b,'c =',c);
                return a * b * c;
            }  
            b++;  
        }  
        a++;  
        b = a + 1;  
    }
}