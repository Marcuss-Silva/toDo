function addTask(){
    let taskTitle = document.querySelector('#task-title').value
    if(taskTitle){
        let tasksList = document.querySelector('#tasks-list')
        let templete = document.querySelector('.templete')
        let newTemplete = templete.cloneNode(true)
        newTemplete.querySelector('.task-title1').textContent = taskTitle
        newTemplete.classList.remove('templete')
        newTemplete.classList.remove('hide')
        tasksList.appendChild(newTemplete)

        document.querySelector('#task-title').value = ''
        const removeBtn = newTemplete.querySelector('#remove-btn').addEventListener('click', function(){

            removeTask(this)
        })
        const checkBtn = newTemplete.querySelector('#check-btn').addEventListener('click', function(){

            selectTask(this)
        })

    }
}
function selectTask(check){
    const taskComplete = check.parentNode
    taskComplete.classList.toggle('done')
}
function removeTask(remove){
    remove.parentNode.remove(true)
}
// evento adiciona tarefa
let taskBtn = document.querySelector('#task-btn')
taskBtn.addEventListener('click' , function(e){
    e.preventDefault()
    addTask()
})

