"use strict";// JavaScript Document


window.addEventListener("load", function(event) 
  {
  	var name = document.getElementById("name");
   	var isbn = document.getElementById("isbn");
    var remove = document.getElementById("remove");
	var removeIsbn = document.getElementById("removeIsbn");
    var clear = document.getElementById("clear");
    var content = document.getElementById("content");


   remove.addEventListener("click", function(event) 
	 {
    	if (name.value !== "") 
		{
        	localStorage.removeItem(name.value);
          	refreshContents();
    	}

 /*tried to remove book with second options(ISBN)
	else if (isbn.value !== "") 
		{
        	localStorage.removeItem(isbn.value);
          	refreshContents();
    	}
*/
      });
	
	removeIsbn.addEventListener("click", function(event) 
	{
    	if (name.isbn !== "") 
		{
        	localStorage.removeItem(name.isbn);
          	refreshContents();
    	}
    });
	
	//clear local storage
 clear.addEventListener("click", function(event) 
	{
    	localStorage.clear();
        refreshContents();
    });

    function refreshContents() 
	{
        var str = "";

        for (var i = 0, len = localStorage.length; i < len; i++) 
		{
        	var k = localStorage.key(i);
          	var v = localStorage.getItem(k);
          	str += "'" + k + "' = '" + v + "'<br />";
        }

        name.value = "";
    	name.isbn = "";
        content.innerHTML = str;
     }

    refreshContents();
});

 // function to get and list all book details using JSON 
 /*	 function listStorage()  
 	{
	 
	  {
		//get data from 'book' variable
		var book=JSON.parse(localStorage.getItem('bookdetails'));
		//List the book items
		document.getElementById('content').innerHTML = book.name + ' ' + book.pub + ' ' + book.isbn + ' ' + book.price +
		'<br/>';
	  }
	  
	   refreshContents();
    }
	 
 });
 */