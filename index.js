let pipoca = 10 
let macarrao = 8 
let carne = 15 
let feijao = 12 
let brigadeiro = 8
let item1 = "pipoca"
let item2 = "macarrão"
let item3 = "carne"
let item4 = "feijao"
let item5 = "brigadeiro"


function microOndas(item,tempo) {

    if(tempo > pipoca*3 && item == item1 || tempo > macarrao*3 && item == item2 
    || tempo > carne*3 && item == item3 || tempo > feijao*3 && item == item4 || tempo > brigadeiro && item == item5  ){
    console.log("kabummmm!!")
    }
    else if(item != item1 && item != item2 && item != item3 && item != item4 && item != item5 ){
        console.log("Prato inexiste")
    }
    else if(tempo<8) {
        console.log("Tempo insuficiente")
    }
    else if(tempo > pipoca*2 && item == item1 || tempo > macarrao*2 && item == item2 
        || tempo > carne*2 && item == item3 || tempo > feijao*2 && item == item4 || tempo > brigadeiro*2 && item == item5 ){
            console.log("A comida queimou")
    }
    else if(tempo <= pipoca && item == item1 || tempo <= macarrao && item == item2 
        || tempo <= carne && item == item3 || tempo <= feijao && item == item4 || tempo <= brigadeiro && item == item5 ) {
        console.log("Prato pronto, bom apetite")
    }
   

}



