document.addEventListener("DOMContentLoaded", () => {
    console.log('page loaded!');
    let form = document.getElementById('presentForm');
    let newItem = document.getElementById('itemInput');
    let newCost = document.getElementById('costInput');

    renderCurrentList();
    renderCurrentCost();

    form.addEventListener('submit', function(e){
      e.preventDefault();
      addItemAndCostToArray(newItem.value, newCost.value);
      addToList(newItem.value, newCost.value);
      addToCost(newCost.value);
    });
});

function renderCurrentList(){
  let currentList = document.getElementById('item-list');
  for (let i = 0; i < presents.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = `${presents[i].item} - ${presents[i].cost}`;
    currentList.append(listItem);
  }
}

function addToList(item, cost){
  let currentList = document.getElementById('item-list');
  let listItem = document.createElement('li');
  listItem.innerHTML = `${item} - ${cost}`;
  currentList.append(listItem);
}

function renderCurrentCost(){
  let costElement = document.getElementById('currentCost');
  let currentCost = 0;

  for (let i = 0; i <  presents.length; i++){
    currentCost += parseFloat(presents[i].cost);
  }

  costElement.innerHTML = `Current Cost: $${currentCost}`;
}

function addToCost(cost){
  let costElement = document.getElementById('currentCost');
  let costNum = parseFloat(cost);
  let currentCost = costElement.innerHTML.split(": ")[1];
  let currentCostNum = parseFloat(currentCost.slice(1));
  let newCost = currentCostNum + costNum;
  costElement.innerHTML = `Current Cost: $${newCost}`;
}

function addItemAndCostToArray(item, cost){
  let obj = { item: item, cost: cost };
  presents.push(obj);
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

// module.exports = app;
