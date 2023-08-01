

// const key = document.getElementById('key')
// const keyCode = document.getElementById('keyCode')
// const code = document.getElementById('code')

// window.addEventListener('keydown', (e)=>{
//     key.innerHTML= e.key;
//     keyCode.innerHTML = e.keyCode;
//     code.innerHTML = e.code;
// })



const insert = document.getElementById('insert')


window.addEventListener('keydown', (event)=>{
    insert.innerHTML =`<div class="key">
        ${event.key === ' '?'Space': event.key }
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key" >
        ${event.code}
        <small>event.code</small>
    </div>
    `
})

