let inputField = document.getElementById("link-input");
//buttons
const grabBtn = document.getElementById("grab-btn");
const delBtn = document.getElementById("del-btn");
const grpBtn = document.getElementById("grp-btn");
const fetchBtn = document.getElementById("fetch-btn");
const list = document.getElementById("list-items");
let entries = []

inputBtn.addEventListener("click", fetcher())

function grabber()
{
    

}
function fetcher()
{
    entries.push(inputField.value);
    console.log(entries)
    input.value="";
    render(entries)
}
function deleteEntries()
{

}
function groupEntries()
{

}
function render(dummyLinks)
{
    let lisitems = "";
    for(let i = 0 ; i < dummyLinks.length ; i++ )
    {
        lisitems += `
            <li>
                <a target='_blank' href='${dummyLinks[i]}'>
                    ${dummyLinks[i]}
                </a>
            </li>    
        `
    }
    list.innerHTML = lisitems;
}