 // keycard maker
 var card = document.getElementById('keyForm');
 var photo = document.getElementById('photo');
 var firstName = document.querySelector('#cardInfo p:nth-child(1)');
 var codeName = document.querySelector('#cardInfo p:nth-child(2)');
 var liContainer = document.querySelector('ul');


 // assign the blank agent template
 var agents = [];
 agents[0] = {
     name: "",
     code: "",
     img: "images/photo.png"
 };

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
     var newSec = document.createElement('li');
     var newAgent = document.createElement('a');
     newAgent.innerHTML = "Agent "+code;
     newAgent.id = agentNum;
     newAgent.href = "#";
     newAgent.setAttribute('onclick', 'loadCard(agents['+agentNum+'])');
     console.log(agentNum);

     // append the new Agent to the list
     newSec.appendChild(newAgent);
     liContainer.appendChild(newSec);

     // load the new agent
     loadCard(agents[agentNum]);
 }