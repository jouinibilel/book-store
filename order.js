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
    var object = user($("#name").val(), $("#last").val(),$("#adress").val(),$("#book").val(),$("#phone").val())
    bookOrders.push(object)
    console.log(bookOrders)
    $('.a').append("<p>" + object.firstname + "</p>")
    $('.z').append("<p>" + object.lastname  + "</p>")
    $('.e').append("<p>" +  object.adress + "</p>")
    $('.r').append("<p>" +  object.nameofthebooktoorder + "</p>")
    $('.t').append("<p>" + object.phone + "</p>")
}
$(document).ready(function(){
    $('.f').on('click',function(){
        $('.l').hide()
        $('.a').show()
        $('.z').show()
        $('.e').show()
        $('.r').show()
        $('.t').show()

    })
})

