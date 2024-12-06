//Path module

import { log } from 'console'
import path from 'path'


//____________path.basename()_________________
//Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path..


console.log(path.basename("H:\BackGrounds\\space.jpg"));

console.log(path.basename("H:\BackGrounds\\space.jpg" , '.jpg'));


//______________________________________


//_____________ path.dirname()__________
//return the directory name of a path. Similar to the Unix dirname command.

console.log(path.dirname("H:\BackGrounds\\space.jpg"));

//______________________________________________


//__________________ path.extname()___________________
//Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.


console.log(path.extname("H:\BackGrounds\\space.jpg"));

//__________________________________________

// _____________________path.join()___________________
//Join all arguments together and normalize the resulting path.

console.log(path.join('c:' ,'saleem-web','courses' , 'redux-toolkit'));
console.log(path.join('c:' ,'saleem-web','courses' , 'redux-toolkit','..'));
console.log(path.join('c:' ,'saleem-web','courses' , 'redux-toolkit','..','..'));

//__________________________

//______________path.normalize()_______________
//Normalize a string path, reducing '..' and '.' parts. When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.


console.log(path.normalize('c:\\\courses\\\ redux-toolkit\\store\\skill'));

// _______________________

//____________path.parse()________________
//Returns an object from a path string - the opposite of format().

console.log(path.parse("H:\BackGrounds\\space.jpg"));
