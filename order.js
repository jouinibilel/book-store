function user(firstname,lastname,adress,nameofthebooktoorder,phone)
{
     var object={}
     object.firstname=firstname
     object.lastname=lastname
     object.adress=adress
     object.nameofthebooktoorder=nameofthebooktoorder
     object.phone=phone

     return object;
}
var bookOrders=[]
function facture(){
    var object = user($("#name").val(), $("#last").val(),$("#adresse").val(),$("#book").val(),$("#phone").val())
    bookOrders.push(object)
    console.log(bookOrders)
    $('.facture').append("<h1>" + object.firstname + "</h1>")
    $('.facture').append("<h1>" +   + "</h1>")
    $('.facture').append("<h1>" +  object.adress + "</h1>")
    $('.facture').append("<h1>" +  object.nameofthebooktoorder + "</h1>")
    $('.facture').append("<h1>" + object.phone + "</h1>")
}
