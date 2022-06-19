const inputField = document.getElementById("link-input");
//buttons
const grabBtn = document.getElementById("grab-btn");
const delBtn = document.getElementById("del-btn");
const fetchBtn = document.getElementById("fetch-btn");
const linkList = document.getElementById("list-items");
let entries = [];
const entriesInLocalStorage = JSON.parse(localStorage.getItem("entries"))
if(entriesInLocalStorage)
{
    entries = entriesInLocalStorage;
    render(entries);
}
fetchBtn.addEventListener("click", function(){
    entries.push(inputField.value);
    inputField.value = "";
    render(entries);
})

delBtn.addEventListener("click", function(){
    localStorage.clear();
    entries = [];
    render(entries);
})

grabBtn.addEventListener("click", function(){
    let i;
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        for(i=0;i<tabs.length;i++)
        {
            if(tabs[i] != tabs)
            {
                entries.push(tabs[0].url);
                localStorage.setItem("entries",JSON.stringify(entries));
                render(entries);
            }
            else
            {
                alert("Already added!");
            }
        }
        
    })    
})
// function grabber()
// {
// }
// function deleteEntries()
// {
// }
// function groupEntries()
// {
// }
function render(dummyLink)
{
    let listItems = "";
    for(let i = 0 ; i < dummyLink.length ; i++ )
    {
        listItems += `
            <li>
            <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox">
            <label for="styled-checkbox-2"> <a target='_blank' href='${dummyLink[i]}'>
            ${dummyLink[i]}
        </a></label>
            </li> 
        `
        // listItems.setAttribute("type", "checkbox");
    }
    linkList.innerHTML = listItems;
}