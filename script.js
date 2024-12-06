// Adiciona um evento ao botão de adicionar tarefa
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); // Remove espaços em branco no início e no final

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        // Criar item de tarefa
        const li = document.createElement('li');
        li.textContent = taskText;

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete';
        deleteButton.style.marginLeft = '10px'; // Adiciona espaçamento entre o texto e o botão
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li); // Remove o item da lista
        });

        // Concluir tarefa
        li.addEventListener('click', () => {
            li.classList.toggle('completed'); // Alterna a classe "completed"
        });

        // Adiciona o botão de exclusão ao item
        li.appendChild(deleteButton);
        
        // Adiciona o item à lista de tarefas
        taskList.appendChild(li);

        // Limpa o campo de entrada
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
});