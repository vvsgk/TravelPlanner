function createHTMLCard(day_no, plan) {
    var newele1 = document.createElement('div');
    newele1.setAttribute('class', 'card-container');
    var newele2 = document.createElement('div');
    newele2.setAttribute('class', 'card');
    var newele3 = document.createElement('div');
    newele3.setAttribute('class', 'front-content');
    var dayy_no = document.createElement('h3');
    dayy_no.innerHTML = "Day " + day_no;
    newele3.appendChild(dayy_no);
    var newele4 = document.createElement('div');
    newele4.setAttribute('class', 'content');
    var newele5 = document.createElement('ul');
    
    var activities = plan[day_no - 1].activities;
    
    for (i = 0; i < activities.length; i++) {
        var newele6 = document.createElement('li');
        newele6.setAttribute('class', 'activity');
        var newele7 = document.createElement('strong');
        newele7.innerHTML = activities[i].time + "  :  ";
        newele6.appendChild(newele7);
        var newele8 = document.createElement('span');
        newele8.innerHTML = activities[i].description;
        newele6.appendChild(newele8);
        newele5.appendChild(newele6);
    }
    newele2.appendChild(newele3);
    newele2.appendChild(newele4);
    newele4.appendChild(newele5);
    newele1.appendChild(newele2);
    return newele1;
}

async function cerateTripPlan(jsonData){
  var heading = document.getElementById('heading');
  var dest = jsonData.key;
  heading.innerHTML = "Trip Plan to " + dest.substring(2) + " for " + dest.substring(0,1) + " days";
  for(i1=0;i1<jsonData.plan.length;i1++)
    {
      var card = createHTMLCard(i1+1,jsonData.plan);
      document.getElementsByClassName('cards')[0].appendChild(card);
    }
}

  const urlParams = new URLSearchParams(window.location.search);
  const encodedData = urlParams.get('data');
  const jsonData = JSON.parse(decodeURIComponent(encodedData));
  cerateTripPlan(jsonData);
  window.opener.postMessage('ready', '*');

  