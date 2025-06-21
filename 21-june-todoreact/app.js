const { useState, useEffect } = React;

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    // Load tasks from memory on component mount
    useEffect(() => {
        const savedTasks = window.todoTasks || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to memory whenever tasks change
    useEffect(() => {
        window.todoTasks = tasks;
    }, [tasks]);

    // Add a new task
    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = {
                id: Date.now(),
                text: newTask.trim(),
                completed: false,
                createdAt: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                priority: 'normal'
            };
            setTasks([task, ...tasks]); // Add new tasks at the beginning
            setNewTask('');
            
            // Add animation effect
            setTimeout(() => {
                const newTaskElement = document.querySelector('.task-item');
                if (newTaskElement) {
                    newTaskElement.style.background = '#dbeafe';
                    setTimeout(() => {
                        newTaskElement.style.background = '';
                    }, 1000);
                }
            }, 100);
        }
    };

    // Toggle task completion
    const toggleTask = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                const updatedTask = { ...task, completed: !task.completed };
                if (updatedTask.completed) {
                    updatedTask.completedAt = new Date().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                }
                return updatedTask;
            }
            return task;
        }));
    };

    // Delete a task
    const deleteTask = (id) => {
        // Add fade out animation
        const taskElement = document.querySelector(`[data-task-id="${id}"]`);
        if (taskElement) {
            taskElement.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => {
                setTasks(tasks.filter(task => task.id !== id));
            }, 300);
        } else {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    // Clear all completed tasks
    const clearCompleted = () => {
        const completedTasks = tasks.filter(task => task.completed);
        if (completedTasks.length > 0) {
            if (confirm(`Are you sure you want to delete ${completedTasks.length} completed task${completedTasks.length > 1 ? 's' : ''}?`)) {
                setTasks(tasks.filter(task => !task.completed));
            }
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    // Filter tasks based on current filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    // Calculate statistics
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Get filter button class
    const getFilterClass = (filterType) => {
        return `filter-btn ${filter === filterType ? 'active' : ''}`;
    };

    // Get empty state message
    const getEmptyStateMessage = () => {
        switch (filter) {
            case 'active':
                return {
                    icon: '🎉',
                    title: 'No active tasks!',
                    message: 'Great job! You\'ve completed all your tasks.'
                };
            case 'completed':
                return {
                    icon: '📝',
                    title: 'No completed tasks yet',
                    message: 'Start completing some tasks to see them here.'
                };
            default:
                return {
                    icon: '📋',
                    title: 'No tasks yet',
                    message: 'Add your first task above to get started!'
                };
        }
    };

    const emptyState = getEmptyStateMessage();

    return React.createElement('div', { className: 'app-container' }, [
        // Header
        React.createElement('div', { key: 'header', className: 'header' }, [
            React.createElement('h1', { key: 'title' }, 'My To-Do List'),
            React.createElement('p', { key: 'subtitle' }, 'Stay organized and productive')
        ]),

        // Main content
        React.createElement('div', { key: 'main', className: 'main-content' }, [
            // Input section
            React.createElement('div', { key: 'input', className: 'input-section' }, [
                React.createElement('input', {
                    key: 'task-input',
                    type: 'text',
                    className: 'task-input',
                    placeholder: 'What needs to be done?',
                    value: newTask,
                    onChange: (e) => setNewTask(e.target.value),
                    onKeyPress: handleKeyPress
                }),
                React.createElement('button', {
                    key: 'add-btn',
                    className: 'add-btn',
                    onClick: addTask
                }, [
                    React.createElement('span', { key: 'plus' }, '+'),
                    React.createElement('span', { key: 'text' }, 'Add Task')
                ])
            ]),

            // Progress bar
            totalTasks > 0 && React.createElement('div', { key: 'progress', className: 'progress-bar' },
                React.createElement('div', {
                    className: 'progress-fill',
                    style: { width: `${completionPercentage}%` }
                })
            ),

            // Filter buttons
            React.createElement('div', { key: 'filters', className: 'filters' }, [
                React.createElement('button', {
                    key: 'all',
                    className: getFilterClass('all'),
                    onClick: () => setFilter('all')
                }, `All (${totalTasks})`),
                React.createElement('button', {
                    key: 'active',
                    className: getFilterClass('active'),
                    onClick: () => setFilter('active')
                }, `Active (${activeTasks})`),
                React.createElement('button', {
                    key: 'completed',
                    className: getFilterClass('completed'),
                    onClick: () => setFilter('completed')
                }, `Completed (${completedTasks})`)
            ]),

            // Tasks list
            React.createElement('div', { key: 'tasks', className: 'tasks-list' },
                filteredTasks.length === 0 
                    ? React.createElement('div', { className: 'empty-state' }, [
                        React.createElement('div', { key: 'icon', className: 'empty-icon' }, emptyState.icon),
                        React.createElement('h3', { key: 'title' }, emptyState.title),
                        React.createElement('p', { key: 'message' }, emptyState.message)
                    ])
                    : filteredTasks.map(task =>
                        React.createElement('div', {
                            key: task.id,
                            'data-task-id': task.id,
                            className: `task-item ${task.completed ? 'completed' : ''}`
                        }, [
                            React.createElement('div', {
                                key: 'checkbox',
                                className: `task-checkbox ${task.completed ? 'completed' : ''}`,
                                onClick: () => toggleTask(task.id)
                            }),
                            React.createElement('div', { key: 'content', className: 'task-content' }, [
                                React.createElement('div', {
                                    key: 'text',
                                    className: `task-text ${task.completed ? 'completed' : ''}`
                                }, task.text),
                                React.createElement('div', { key: 'date', className: 'task-date' }, 
                                    task.completed 
                                        ? `Completed: ${task.completedAt || 'Just now'}`
                                        : `Created: ${task.createdAt}`
                                )
                            ]),
                            React.createElement('button', {
                                key: 'delete',
                                className: 'delete-btn',
                                onClick: () => deleteTask(task.id),
                                title: 'Delete task'
                            }, '🗑️')
                        ])
                    )
            ),

            // Statistics and clear button
            totalTasks > 0 && React.createElement('div', { key: 'stats', className: 'stats' }, [
                React.createElement('div', { key: 'stat1', className: 'stat-item' }, [
                    React.createElement('div', { key: 'number', className: 'stat-number' }, totalTasks),
                    React.createElement('div', { key: 'label', className: 'stat-label' }, 'Total Tasks')
                ]),
                React.createElement('div', { key: 'stat2', className: 'stat-item' }, [
                    React.createElement('div', { key: 'number', className: 'stat-number' }, activeTasks),
                    React.createElement('div', { key: 'label', className: 'stat-label' }, 'Active')
                ]),
                React.createElement('div', { key: 'stat3', className: 'stat-item' }, [
                    React.createElement('div', { key: 'number', className: 'stat-number' }, `${completionPercentage}%`),
                    React.createElement('div', { key: 'label', className: 'stat-label' }, 'Complete')
                ]),
                completedTasks > 0 && React.createElement('button', {
                    key: 'clear',
                    className: 'clear-btn',
                    onClick: clearCompleted
                }, `Clear ${completedTasks} Completed`)
            ])
        ])
    ]);
}

// Render the app
ReactDOM.render(React.createElement(TodoApp), document.getElementById('root'));

// Add CSS animation for slide out effect
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
            max-height: 100px;
        }
        to {
            opacity: 0;
            transform: translateX(-100%);
            max-height: 0;
            padding: 0;
            margin: 0;
        }
    }
`;
document.head.appendChild(style);
