import Button from './Button'
import ACL from './ACL'

const tasks = [
  {id: 1, title: 'Dish washing'},
  {id: 2, title: 'Go to carwash'},
]

function Tasks() {
  return (
    <div>
      <Button permission="add_task">Add task</Button>

      <ol>
        {tasks.map((task, index) =>
          <li key={task.id}>
            {task.title}
            <Button permission="remove_task">Remove task</Button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ACL(Tasks)