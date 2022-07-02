let text = "dsdasd ";
let wordCount =0;
if((text.split(' ').length ==1) && (text[text.length-1]==' '))
    {
        wordCount=0
    }
    else{
        wordCount= text.split(' ').length
    }
    console.log(wordCount)