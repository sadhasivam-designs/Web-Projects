const inputField = document.getElementById("link-input");
//buttons
const grabBtn = document.getElementById("grab-btn");
const delBtn = document.getElementById("del-btn");
const fetchBtn = document.getElementById("fetch-btn");
const listOfLink = document.getElementById("list-items");
let entries = [];
const entriesInLocalStorage = JSON.parse(localStorage.getItem("entries"))
if(entriesInLocalStorage)
{
    entries = entriesInLocalStorage;
    render(entries);
}

//GRAB BUTTON FUNCTION

grabBtn.addEventListener("click", function(){
    // let i, flag = 0;
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        if(!entries.includes(tabs[0].url))
        {
            entries.push(tabs[0].url);
            localStorage.setItem("entries",JSON.stringify(entries));
            render(entries);
        }
        else
        {
            alert("Tab is in the list. No duplicates added!")
        }     
    })    
})

// DELETE BUTTON FUNCTION

delBtn.addEventListener("click", function(){
    // if(document.getElementById('links-checkbox').checked)
    // {
    //     alert("HI");
    // }
    let checked = document.querySelectorAll(".delete-checkbox:checked");
    checked.forEach((elem) => {
    elem.parentElement.style.display = "none";
  })
})

//FETCH BUTTON FUNCTION

fetchBtn.addEventListener("click", function(){
    entries.push(inputField.value);
    inputField.value = "";
    render(entries);
})

//GROUP BUTTON FUNCTION



//RENDER OR PRINTING FUNCTION

function render(dummyLink)
{
    let listItems = "";
    for(let i = 0 ; i < dummyLink.length ; i++ )
    {
        listItems += `
            <input class="checkbox" class="delete-checkbox" type="checkbox" value="i">
                <label for="links-checkbox">
                    <a target='_blank' href='${dummyLink[i]}'>
                        ${dummyLink[i]}
                    </a>
                </label><br>
        `
    }
    listOfLink.innerHTML = listItems;
}