$(
    () =>
     {
        let counter = 0;
         
         $("#minus").on("click", () => 
         {                 
             display(--counter);               
         })


         $("#plus").on("click", () =>
         {
             display(++counter);                
         })

         const display = (counter)=>
            {
                let inpCtrl = $("input").val(counter);
                
                inpCtrl.css("color", ((counter % 2 ==0) ? "red" : "black"));
                inpCtrl.css("fontStyle", ((counter % 3 ==0) ? "italic" : "normal"));
                inpCtrl.css("fontWeight", ((counter % 7 ==0) ? "bold" : "normal"));
                
            }

     }

)