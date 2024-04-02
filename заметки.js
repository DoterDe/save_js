window.addEventListener("load", () => {
    const form = document.querySelector('#task--header')
    const input = document.querySelector('.task--header--input')
    const list = document.querySelector('#task')
    form.addEventListener("click", (e)=>{
        e.preventDefault()
        const task = input.value
        if(task == false){
            return console.log('false')
        }
        const task__element = document.createElement('div')
        task__element.classList.add('task')
        const content = document.createElement('div')
        content.classList.add('content')
        task__element.appendChild(content)
        content.style.cssText=`
        height:40px;
        background: #111827;
        border-radius: 15px 0px 0px 15px;
        margin: 0px 0px 0px 30px`
        const cheak__element = document.createElement('input')
        cheak__element.type = "checkbox"
        cheak__element.value = task
        cheak__element.style.cssText=`
        margin:10px;   
        `
        function show(){
            input.style.cssText=`
            color:red;
            `
            cheak__element.removeEventListener("click", show)
        }
        cheak__element.addEventListener("click", show)
        content.appendChild(cheak__element)
        const input__element = document.createElement('input')
        input__element.type = "text"
        input__element.setAttribute("readonly", "readonly")
        input__element.value = task
        content.appendChild(input__element)
        input__element.style.cssText=`
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 15px 0px 0px 15px;
        width: 220px;
        background: #111827;
        color: white;
        `
        const action = document.createElement('div')
        content.classList.add('action')
        action.style.cssText=`
        width: 60px;
        height:40px;
        display: flex;
        justify-content: space-between;
        background: #111827;
        margin: 0px 137px 0px 0px;
        `
        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerHTML = "Edit"
        edit.style.cssText=`
        padding: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        color: palevioletred;
        background: #111827;
        `
        const del = document.createElement('button')
        del.classList.add('del')
        del.innerHTML = "Delete"
        del.style.cssText=`
        padding: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        border-radius: 0px 15px 15px 0px;
        color: crimson;
        background: #111827;
        `
        action.appendChild(edit)
        action.appendChild(del)
        task__element.appendChild(action)
        list.appendChild(task__element)       
        edit.addEventListener("click", (e) => {
            if(edit.innerText == "Edit"){
                input__element.removeAttribute("readonly")
                edit.innerText = "Save"                
            }
            else{
                edit.innerText == "Save"
                input__element.setAttribute("readonly", "readonly")
                edit.innerText = "Edit"
            }      
        })
        del.addEventListener("click", (e) => {
            task__element.remove()
        })       
    })
})

