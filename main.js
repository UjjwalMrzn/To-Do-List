const user = document.getElementById('userId');
const mybutton = document.getElementById('btn');
const tasklist = document.getElementById('tasklist');


function savetasks{
    const tasks = [];
    const taskdivs = document.querySelectorAll('.tasklist');
    taskdivs.forEach((taskdiv) => {
        const text = document.querySelector('span').textContent;
        const completed = document.querySelector('input[type = "checkbox"]').checked;
        tasks.push([text, completed]);

    });
    localStorage.getItem('tasks', JSON.stringify(tasks));
}


// createtaskelement(tasktext, false)
// savetask();
// user.value = '';

// createtaskelement(tasktext, completed);
// const taskelement = document.createElement('div')
// taskelement.classList = 'task1';

mybutton.addEventListener('click' , function(){
    const tasktext = user.value.trim();
    if(!tasktext){
        alert('Please enter task');
        return;
    }



    if(tasktext){
        const taskdiv = document.createElement('div')
        taskdiv.className = 'task'
        // taskdiv.innerHTML = '<ol><li></li></ol>';

        // const taskbox = document.createElement('div')
        // taskbox.className ='box'

    
        const taskspan = document.createElement('span')
        taskspan.textContent = tasktext;

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'chkbox'

        const deletebtn = document.createElement('div')
        deletebtn.innerHTML = '<i class="fas fa-trash"></i>';
        deletebtn.className = 'delete-btn'
    
        taskdiv.appendChild(checkbox);
        taskdiv.appendChild(taskspan);
        taskdiv.appendChild(deletebtn);
        tasklist.appendChild(taskdiv);
        // taskbox.appendChild(taskdiv)

        user.value = '';


        checkbox.addEventListener('change' , function(){
            if(checkbox.checked){
                taskspan.style.textDecoration = 'line-through';
                taskspan.style.color = 'grey';
            }else{
                taskspan.style.textDecoration = 'none';
                taskspan.style.color = 'white';

            }
        })

        

        deletebtn.addEventListener('click' , function(){
            tasklist.removeChild(taskdiv)
        });
        
    }
}



)