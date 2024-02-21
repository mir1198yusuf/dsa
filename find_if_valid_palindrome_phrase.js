// SC = 1
// TC = n/2 = n

function findIfValidPalindromePhrase(s) {
    let i = 0,
        j = s.length - 1;
    while (i < j) {
        const sICharCode = s[i].toLowerCase().charCodeAt(0),
            sJCharCode = s[j].toLowerCase().charCodeAt(0);

        // if s[i] not alpha-numeric, move to next i without changing j
        if (
            !(
                (sICharCode >= 97 && sICharCode <= 122) ||
                (sICharCode >= 65 && sICharCode <= 90) ||
                (sICharCode >= 48 && sICharCode <= 57)
            )
        ) {
            i++;
            continue;
        }

        // if s[j] not alpha-numeric, move to next j without changing i
        if (
            !(
                (sJCharCode >= 97 && sJCharCode <= 122) ||
                (sJCharCode >= 65 && sJCharCode <= 90) ||
                (sJCharCode >= 48 && sJCharCode <= 57)
            )
        ) {
            j--;
            continue;
        }

        if (sICharCode !== sJCharCode) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const s1 = 'A man, a plan, a canal: Panama';
const s2 = 'race a car';
const s3 = ' ';

console.log(findIfValidPalindromePhrase(s1));
console.log(findIfValidPalindromePhrase(s2));
console.log(findIfValidPalindromePhrase(s3));

/*
> 'a'.charCodeAt()
97
> 'z'.charCodeAt()
122
> 'A'.charCodeAt()
65
> 'Z'.charCodeAt()
90
> 'Z'.charCodeAt()
90
> '0'.charCodeAt()
48
> '9'.charCodeAt()
57
*/
