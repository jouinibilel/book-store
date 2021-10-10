function Book(name,img,price)
{
     var o={}
     o.name=name;
     o.img=img;
     o.price=price;

     return o;
}
var booklist=[]
function addbook()
{
    var o = Book($("#name").val(), $("#img").val(),$("#price").val())
    booklist.push(o)
    console.log(booklist)
    $('.adding').append("<h1>" + o.name + "</h1>")
    $('.adding').append("<img src="+"'"+o.img+"'"+"/>")
    $('.adding').append("<h2>"+ o.price +"</h2>")
}
 









