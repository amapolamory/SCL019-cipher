import cipher from './cipher.js';

// console.log(cipher);



    document.getElementById("cipher").addEventListener("click", function(){
      let text = document.getElementById("textuno").value;
      let offSet =Number.parseInt(document.getElementById("displacement").value);
      if(text===''){
        alert('Aún no has ingresado un mensaje')
      }
      else{
      let codedText= cipher.encode(offSet,text);
      let finalText= document.getElementById("textdos");
      finalText.value=codedText;
      }
    }, true);
  
     document.getElementById("decipher").addEventListener("click", function(){
      let text = document.getElementById("textuno").value;
      let offSet =Number.parseInt(document.getElementById("displacement").value);//Number.parseInt() pasa offSet automaticamente a numero ara que js lo interprete asi
      if(text===''){
        alert('Aún no has ingresado un mensaje')
      }
      else{
      let decodedText = cipher.decode(offSet,text);
      let finalText= document.getElementById("textdos")
      finalText.value=decodedText
      }
     }, true);

     document.getElementById("sendIt").addEventListener("click",function(){
       let name =document.getElementById("nombre").value;
       let mail= document.getElementById("correo").value;
       if(name==='') { 
         alert('No has puesto el nombre de tu destinatario')
       }
       else if(mail===''){
         alert('Se necesita un correo para poder enviar tu mensaje')
       }
      },true);
       
      



     
    