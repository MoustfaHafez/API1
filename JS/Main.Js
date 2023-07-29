
var Data = [];


function GetData() {
    var API = new XMLHttpRequest();
    API.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    API.send();
    API.addEventListener('readystatechange', function (e) {
        if (API.readyState == 4) {
            Data = JSON.parse(API.response);
            DisplayData();
        }
    })


}

GetData();



function DisplayData()
{

    var box='';

    for(var i=0;i<Data.length;i++)
    {

        box+=`
        <div class="col-md-4  " >
  
        
        <h2 class="text-center">${Data[i].id}</h2>
        <p>${Data[i].body}</p>
       
        

        </div>
        
        
        
        `
    }

    document.getElementById('row').innerHTML=box;
}