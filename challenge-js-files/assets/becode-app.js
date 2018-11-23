/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     Jean-Charles Yedoh          
Date :  14/11/08
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...

// graphique du premier tableau 

let newDiv11 = document.createElement("div"); 
newDiv11.id = "graphique1";

let currentTable = document.getElementsByTagName('table')[0]; // => voir : https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode 
currentTable.parentNode.insertBefore(newDiv11, currentTable);

let data = []; 
let table = document.getElementById("table1");
let years = table.getElementsByTagName("tr")[1].getElementsByTagName("th"); 
let yearsArray = []; 

for(let i = 2; i < years.length; i++) 
    { 
        let content = years[i].innerHTML; 
        yearsArray.push(content); 
    } 

let rows = table.getElementsByTagName("tr"); 

    for(let i = 2; i < rows.length; i++) 

       { 
           let cells = rows[i].getElementsByTagName("td"); 

             for(let j = 0; j < cells.length; j++) 

                { 
                    if(j === 0) 
                            { 
                                var pays = cells[j].innerHTML; // attention, ici on utilise bien var, pas de let
                            } 
                    else if (!isNaN(parseInt(cells[j].innerHTML))) 
                            { 
                                data.push({data:parseInt(cells[j].innerHTML), pays:pays, years:yearsArray[j-1]}); 

                            } 
                }  
        }
    
        let svg = dimple.newSvg("#graphique1", "100%", 550); 
        let myChart = new dimple.chart(svg, data); myChart.setBounds(30, 110, "90%", 400); 
        let x = myChart.addCategoryAxis("x", "years"); 
        myChart.addMeasureAxis("y", "data"); myChart.addSeries("pays", dimple.plot.line);
        myChart.addLegend(0, 10, "100%", 200); myChart.draw();
        

// graphique du deuxième tableau

/* 
let newDiv1 = document.createElement("div"); 
newDiv1.id = "Homicides";

let currentTable = document.getElementsByTagName('table2')[1]; // => voir : https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode 
currentTable.parentNode.insertBefore(newDiv1, currentTable);

let data = []; 
let table = document.getElementById("table2");
let years = table.getElementsByTagName("tr")[1].getElementsByTagName("th"); 
let yearsArray = []; 

for(let i = 2; i < years.length; i++) 
    { 
        let content = years[i].innerHTML; 
        yearsArray.push(content); 
    } 

let rows = table.getElementsByTagName("tr"); 

    for(let i = 2; i < rows.length; i++) 

       { 
           let cells = rows[i].getElementsByTagName("td"); 

             for(let j = 0; j < cells.length; j++) 

                { 
                    if(j === 0) 
                            { 
                                var pays = cells[j].innerHTML; // attention, ici on utilise bien var, pas de let
                            } 
                    else if (!isNaN(parseInt(cells[j].innerHTML))) 
                            { 
                                data.push({data:parseInt(cells[j].innerHTML), pays:pays, years:yearsArray[j-1]}); 

                            } 
                }  
        }
    
        let svg = dimple.newSvg("#Homicides", "100%", 550); 
        let myChart = new dimple.chart(svg, data); myChart.setBounds(30, 110, "90%", 400); 
        let x = myChart.addCategoryAxis("x", "years"); 
        myChart.addMeasureAxis("y", "data"); myChart.addSeries("pays", dimple.plot.line);
        myChart.addLegend(0, 10, "100%", 200); myChart.draw();
 */       