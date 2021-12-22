const cipher = {//cipher es un objeto
    encode: function(offSet, text){
        if(text === 'null' || text.length === 0 || text === 0){
            throw new TypeError();
        }
        let array=[];
       

        for  (let i=0; i<text.length; i++){
            let ascii = text.charCodeAt(i);//obtiene codigo ascii del codigo


            if((ascii>64)&&(ascii<91)){
            let asciiOffSet = (ascii- 65 + offSet) % 26 + 65;// obtiene numero de la letra codificada
            let codedText = String.fromCharCode(asciiOffSet);//  pasando de numero ascii a letra
         array+=codedText   
            }

         else if((ascii>96)&&(ascii<123)){
            let asciiOffSet = (ascii- 97 + offSet) % 26 + 97;// obtiene numero de la letra codificada
            // console.log(asciiOffSet);
            let codedText = String.fromCharCode(asciiOffSet);//  pasando de numero ascii a letra
            // console.log(codedText);
         array+=codedText  
         }
         else{
             
            array+= String.fromCharCode(ascii);
         }
         

        }
        return array
    },
    decode: function(offSet, text){
        if(text === 'null' || text.length === 0 || text === 0){
            throw new TypeError ();
        }
        let array = [];
        
        for  (let i=0; i<text.length; i++){
         let ascii = text.charCodeAt(i);
         if((ascii>64) && (ascii<91)){
          //  console.log(ascii);
           let asciiOffSet = (ascii + 65 - offSet) % 26 + 65;//cambiar los valores
          //  console.log(asciiOffSet);
           let decodedText = String.fromCharCode(asciiOffSet);
          //  console.log(decodedText);
             array+=decodedText
         }
        // else if ((ascii>96)&&(ascii<123)){
        //     console.log(ascii)
        //     let asciiOffSet =(ascii + 97 - offSet) % 26 + 85;//cambiar los valores
        //       console.log(asciiOffSet);
        //      let decodedText = String.fromCharCode(asciiOffSet);
        //     //  console.log(decodedText);
        //       array+=decodedText
        //    }
        else{
             
            array+= String.fromCharCode(ascii);
         }
       
      }
       return array
   }


 };
 
    
 
 
export default cipher;
