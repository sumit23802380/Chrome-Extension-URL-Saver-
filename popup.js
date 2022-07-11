const btn  = document.querySelector('.btn');

function addLink(url,title){
    const list = document.querySelector('.list');
    const row = document.createElement('li');
    row.innerHTML = `<a target="_blank" href=${url}>${title}</a>`;
    list.appendChild(row);
}
btn.addEventListener('click',async()=>{
    let[tab] = await chrome.tabs.query({active:true, currentWindow:true});
    addLink(tab.url,tab.title);
})

