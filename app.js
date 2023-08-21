const readline = require('readline-sync');

const tasks = [];

function addTask() {
    const indicator = readline.question('indicador de tarea: ');
    const description = readline.question('descripcion de tarea: ');
    tasks.push({ indicator, description, completed: false });
    console.log('Added task.');
}

function removeTask() {
    const index = parseInt(readline.question('indice de la tarea a borrar: '));
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('tarea borrada.');
    } else {
        console.log('indice invalido.');
    }
}

function completeTask() {
    const index = parseInt(readline.question('Index of the completed task: '));
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log('Tarea completadad.');
    } else {
        console.log('indice invalido.');
    }
}

function printTasks() {
    console.log('\nTask list:');
    tasks.forEach((task, index) => {
        console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
    });
}

while (true) {
    console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Borrar tarea');
    console.log('3. Marque tarea como completada');
    console.log('4. Muestra las tareas');
    console.log('5. Salir');
    const choice = parseInt(readline.question('Escoge una funcion: '));

    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            removeTask();
            break;
        case 3:
            completeTask();
            break;
        case 4:
            printTasks();
            break;
        case 5:
            console.log('bye');
            process.exit(0);
        default:
            console.log('Opcion invalida.');
    }
};