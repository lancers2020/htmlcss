function sevenGenerator(data){
    // var startNumber = data;
    // var result;
    // var isTrue = false;
    // for(var i = 0; isTrue != true; i += 7){
    //     if(startNumber <= i){
    //         result = i;
    //         isTrue = true;
    //     }
    //     console.log("tries");
    // }
    for(data; data <= data + 7; data++){
        if((data % 7) == 0){
            return data;
        }
        console.log("tries");
    }
    // return result;
}

function organizer(data){
    // document.getElementById('show-2').innerHTML = "<table>"
    //     document.getElementById('show-2').innerHTML += "<tr>"
    //         // for(var i = 0; i < data.length; i++){
    //             document.getElementById('show-2').innerHTML += "<th>"
    //                 document.getElementById('show-2').innerHTML += Object.keys(data[0]);
    //                 document.getElementById('show-2').innerHTML += ", Amount";
    //                 console.log(Object.keys(data[0]));
    //             document.getElementById('show-2').innerHTML += "</th>" + "<br>";
    //         // }
    //     document.getElementById('show-2').innerHTML += "</tr>"
    //     document.getElementById('show-2').innerHTML += "<tr>"
    //         for(var i = 0; i < data.length; i++){
    //             document.getElementById('show-2').innerHTML += "<td>";
    //                 document.getElementById('show-2').innerHTML += data[i].description + ", ";
    //             document.getElementById('show-2').innerHTML += "</td>";
    //             document.getElementById('show-2').innerHTML += "<td>";
    //                 document.getElementById('show-2').innerHTML += data[i].Qty + ", ";
    //             document.getElementById('show-2').innerHTML += "</td>";
    //             document.getElementById('show-2').innerHTML += "<td>";
    //                 document.getElementById('show-2').innerHTML += data[i].unitPrice + ", ";
    //             document.getElementById('show-2').innerHTML += "</td>" + "<br>";
    //         }
    //     document.getElementById('show-2').innerHTML += "</tr>"

    document.getElementById('show-2').innerHTML = "<table>"
        document.getElementById('show-2').innerHTML += "<tr>"
            // for(var i = 0; i < data.length; i++){
                document.getElementById('show-2').innerHTML += "<th>"
                    document.getElementById('show-2').innerHTML += "Description";
                document.getElementById('show-2').innerHTML += "</th>";
                document.getElementById('show-2').innerHTML += "<th>"
                    document.getElementById('show-2').innerHTML += "Qty";
                document.getElementById('show-2').innerHTML += "</th>";
                document.getElementById('show-2').innerHTML += "<th>"
                    document.getElementById('show-2').innerHTML += "Unit Price";
                document.getElementById('show-2').innerHTML += "</th>";
            // }
        document.getElementById('show-2').innerHTML += "</tr>"
        for(var i = 0; i < data.length; i++){
            document.getElementById('show-2').innerHTML += "<tr>"
                    document.getElementById('show-2').innerHTML += "<td>";
                        document.getElementById('show-2').innerHTML += data[i].description;
                    document.getElementById('show-2').innerHTML += "</td>";
                    document.getElementById('show-2').innerHTML += "<td>";
                        document.getElementById('show-2').innerHTML += data[i].Qty;
                    document.getElementById('show-2').innerHTML += "</td>";
                    document.getElementById('show-2').innerHTML += "<td>";
                        document.getElementById('show-2').innerHTML += data[i].unitPrice;
                    document.getElementById('show-2').innerHTML += "</td>";
            document.getElementById('show-2').innerHTML += "</tr>"
        
        }
    document.getElementById('show-2').innerHTML += "</table>"
}