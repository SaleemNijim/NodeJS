import * as fs from 'fs/promises'

// Creating Directory  
//>>>> fs.mkdir()<<<< 
//Asynchronously creates a directory.
try {

    // await fs.mkdir('c:\\nodejs') 

    // Error cuz there is no nodejs file
    // await fs.mkdir('c:\\nodejs\\courses')

    // Now it's right
    // await fs.mkdir('c:\\nodejs\\courses\\redux\\query',{recursive:true}) 



    // console.log('Floder Created....');
    
} catch (error) {
    console.log(error);
    
}

//________________________________________


// Read The Content
// >>>>fs.readdir()<<<<
//Reads the contents of a directory.

// try {
//     const files = await fs.readdir('c:\\nodejs')
//     for(const file of files){
//         console.log(file);
        
//     }


//     console.log('Floder Created....');
    
// } catch (error) {
//     console.log(error);
    
// }
//________________________________________


// Remove Folder
//-----fs.rmdir()-------
//it should have to be empty


// try {
//     await fs.rmdir('c:\\nodejs\\courses\\redux')


//     console.log('Removed Created....');
    
// } catch (error) {
//     console.log(error);
    
// }


//_________________________________

//create and write Files
//>>>fs.writeFile()<<<

// try {
//     await fs.writeFile('Readme.md' , "Hello Nodejs")
// } catch (error) {
    
//     console.log(error);
// }


//___________________

//Read File
// >>> fs.readFile()<<<

// try {
//     const data = await fs.readFile('Readme.md','utf-8')
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
// }

// ___________________

//Append File
// >>>>fs.appendFile()<<<<


// try {
//     const data = await fs.appendFile('Readme.md','saleem Zead NIJIM')
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
// }


// ______________________

//Copy File
//>>> fs.copyFile()<<<
//Asynchronously copies src to dest. By default, dest is overwritten if it already exists.


// try {
//     await  fs.copyFile('Readme.md','info.txt')
    
// } catch (error) {
//     console.log(error);
// }



// _____________________________--


//Get File Info
//>>>fs.stat()<<<

try {
    const info = await fs.stat('info.txt')
    // console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
    
} catch (error) {
    console.log(error);
    
}