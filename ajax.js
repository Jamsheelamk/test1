

function grocerryitems() {
    var myBooks = [
        {
            "SI No": "1",
            "Item": "Apple",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "fruits",
            "Notes": "good"

        },
        {
            "SI No": "2",
            "Item": "orange",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "fruits",
            "Notes": "good"
        },
        {
            "SI No": "3",
            "Item": "onion",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "vegitables",
            "Notes": "good"
        },
        {
            "SI No": "4",
            "Item": "chilly",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "vegitables",
            "Notes": "good"
        },
        {
            "SI No": "5",
            "Item": "tomato",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "vegitables",
            "Notes": "good"
        },
        {
            "SI No": "6",
            "Item": "butter",
            "Quantity": "1",
            "Unit": "pck",
            "Department": "ghee",
            "Notes": "good"
        },
        {
            "SI No": "7",
            "Item": "rice",
            "Quantity": "6",
            "Unit": "kg",
            "Department": "\rice",
            "Notes": "good"
        },
        {
            "SI No": "8",
            "Item": "oil",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "oil",
            "Notes": "good"
        },
        {
            "SI No": "9",
            "Item": "cake mix",
            "Quantity": "1",
            "Unit": "pck",
            "Department": "baking",
            "Notes": "good"
        },
        {
            "SI No": "10",
            "Item": "cabbage",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "vegitables",
            "Notes": "good"
        }
        
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

















function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){


            // var response =JSON.parse(this.responseText);
            
            // var output="";
            // for (let i=0; i<response.length; i++)
            
            // {
            //     output += "<li>"+ response[i].title +"</li>";

                
            // }
                
            

            document.getElementById("showData").innerHTML=this.responseText;
        }

    }

    xhttp.open("GET","ajax();",true);
    xhttp.send();
}