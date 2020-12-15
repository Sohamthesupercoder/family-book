var images=[
  "cover.jfif",
  "grandpa.jfif",
   "grandma.jfif",
   "dad.jfif",
   "mom.png",
   "sister.jfif"];
   var names=[
    "family book",
    "grandpa",
     "grandma",
     "dad",
     "mom",
     "sister"];
   console.log("var images")
 var i = 0;
 console.log("var i is made")
 function myfunction(){
 document.getElementById ("image").src=images[i]; 
 document.getElementById ("name").innerHTML=names[i]; 
 console.log("should work")
   i++
   if(i == 6)
   {
     i=0;
   };
   console.log("reseter")
  } 