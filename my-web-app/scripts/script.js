 // keycard maker
 var card = document.getElementById('keyForm');
 var photo = document.getElementById('photo');
 var firstName = document.querySelector('#application #cardInfo p:nth-child(1)');
 var codeName = document.querySelector('#application #cardInfo p:nth-child(2)');
 var optContainer = document.querySelector('#application select');
 var loadAgent = document.getElementById('loadAgent');

 

 // assign the blank agent template
 var agents = []; 
 agents[0] = {
    name: "",
    code: "",
    img: "images/photo.png"
 }

 document.onload = retrieve();
 

 function loadCard(info) {
     // load the attributes from the object onto the template
     photo.setAttribute('style', 'background-image: url('+info.img+')');
     firstName.innerHTML = info.name;
     codeName.innerHTML = info.code;
 }

 function compileCard() {
     // assign the values to variables
     var first = card.name.value;
     var code = card.secretName.value;
     var image = card.photoUrl.value;
     var agentNum = agents.length;

     // add the new agent as an object
     var agent = {
         name: first,
         code: code,
         img: image
     };
     agents.push(agent);


     // create the new html elements and properties
     var newAgent = document.createElement('option');
     newAgent.innerHTML = "Agent "+code;
     newAgent.value = agentNum;
     newAgent.href = "#";
     //newAgent.setAttribute('onclick', 'loadCard(agents['+agentNum+'])');
     console.log(agentNum);

     // append the new Agent to the list
     optContainer.appendChild(newAgent);

     // load the new agent
     loadCard(agents[agentNum]);

     // store agents
     store();
 }


// Local storage function to store the agents
function store() {
    // clear and reset array with new agent
    localStorage.clear();
    localStorage.setItem('agentArray', JSON.stringify(agents));
}
// Local storage function to retrieve the agents
function retrieve() {
    var retrievedObject = localStorage.getItem('agentArray');
    if(retrievedObject) {

        // retrieve object
        var jsonSave = JSON.parse(retrievedObject);
        
        // loop through agents
        for(var x=1; x<jsonSave.length; x++){
            agents[x] = jsonSave[x]; 

            // create the agent from local
            var newAgent = document.createElement('option');
            newAgent.innerHTML = "Agent "+ agents[x].code;
            newAgent.value = x;
            newAgent.href = "#";

            // append the new Agent to the list
            optContainer.appendChild(newAgent);
        }
    }
}
