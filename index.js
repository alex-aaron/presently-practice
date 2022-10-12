document.addEventListener("DOMContentLoaded", () => {
    console.log('page loaded!');
    let form = document.getElementById('presentForm');
    let newItem = document.getElementById('itemInput');
    let newCost = document.getElementById('costInput');

    renderCurrentList();
    renderCurrentCost();

    form.addEventListener('submit', function(e){
      e.preventDefault();
    });
});

function renderCurrentList(){
  let currentList = document.getElementById('list-container');
  console.log(currentList);
  for (let i = 0; i < presents.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = `${presents[i].item} - ${presents[i].cost}`;
    currentList.append(listItem);
  }
}

function renderCurrentCost(){
  let costElement = document.getElementById('currentCost');
  let currentCost = 0;

  for (let i = 0; i <  presents.length; i++){
    currentCost += parseFloat(presents[i].cost);
  }

  costElement.innerHTML = `Current Cost: $${currentCost}`;
}

let app = {};
///////////////////////////////////////////////////////////////////////////////
//////////////////////////// DO NOT CODE ABOVE ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const presents = [
  {
    item: 'Google Chromecast',
    cost: '30.00'
  },
  {
    item: 'Podcast microphone',
    cost: '80.00'
  }
];

// DO NOT CODE ABOVE //////////////////////////////////////////////////////////
app.presents = presents;

module.exports = app;
