 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline();
 const asciiArt = [];
 
 for (let i = 0; i < H; i++) {
     const ROW = readline();
     asciiArt.push(ROW);
 }
 
 function convertToAscii(L, H, t, asciiArt) {
     let result = '';
     for (let i = 0; i < H; i++) {
         let line = '';
         for (let j = 0; j < t.length; j++) {
             const char = t[j].toUpperCase();
             const charIndex = char.charCodeAt(0) - 65; 
             if (charIndex >= 0 && charIndex < 26) {
                 line += asciiArt[i].substr(charIndex * L, L);
             } else {
                 line += asciiArt[i].substr(26 * L, L);
             }
         }
         result += line + '\n';
     }
     return result;
 }
 
 console.log(convertToAscii(L, H, T, asciiArt));
 
