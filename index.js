document.addEventListener("DOMContentLoaded", () => {
    console.log('page loaded!');
    let form = document.getElementById('presentForm');
    let newItem = document.getElementById('itemInput');
    let newCost = document.getElementById('costInput');

    renderCurrentList();
    renderCurrentCost();

    form.addEventListener('submit', function(e){
      e.preventDefault();
      addItemAndCost(newItem.value, newCost.value);
      console.log(presents);
      renderCurrentList();
    });
});

function renderCurrentList(){
  let currentList = document.getElementById('list-container');
  currentList.innerHTML = ``
  for (let i = 0; i < presents.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = `${presents[i].item} - ${presents[i].cost}`;
    currentList.append(listItem);
  }
}

// function renderCurrentList2(){
//   let currentList = document.getElementById('item-list');
//   currentList.innerHTML = "";
//   for (let i = 0; i < presents.length; i++){
//     let listItem = document.createElement('li');
//     listItem.innerHTML =
//   }
// }

function renderCurrentCost(){
  let costElement = document.getElementById('currentCost');
  let currentCost = 0;

  for (let i = 0; i <  presents.length; i++){
    currentCost += parseFloat(presents[i].cost);
  }

  costElement.innerHTML = `Current Cost: $${currentCost}`;
}

function addItemAndCost(item, cost){
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
