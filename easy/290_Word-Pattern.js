// https://leetcode.com/problems/word-pattern/description/

var wordPattern = function(pattern, s) {
    
    let patternArr = pattern.split("");
    let sArr = s.split(" ");

    let patternObj = {};

    if (patternArr.length !== sArr.length) return false;

    for (let i = 0; i < patternArr.length; i++) {

        if (!patternObj[patternArr[i]]) patternObj[patternArr[i]] = sArr[i];
        else if ( patternObj[patternArr[i]] ) {
            if ( patternObj[patternArr[i]] !== sArr[i] ) {

                return false;


            } 


        }

    
    }

const sameValue = Object.values(patternObj);

for (let i = 0; i < sameValue.length -1; i++) {
    for (let j = i+1; j < sameValue.length; j++) {
        if (sameValue[i] === sameValue[j]) {
        
        return false;
         }
    }
    
}

return true;

}