import * as fs from 'fs'

// the same promises but here u don't have to write tryCatch Block  
// and in this case u can specify this callback func right here


fs.mkdir('c:\\saleem',(error) =>{
    if(error) throw error
    console.log("Directory Created...");
    
})


fs.mkdir('c:\\saleem',function (error) {
    if (error) throw error;
    console.log("Directory Created...");
    
    
})