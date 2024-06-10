import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    absolute: 'MyToDo'
  }
}

export default function Todo() {
    console.log('Todo component is available');
    return (
        <div>
            <ul>
                <li>Todo Item 1</li>
                <li>Todo Item 2</li>
                <li>Todo Item 3</li>
                <li>Todo Item 4</li>
                <li>Todo Item 5</li>
            </ul>
        </div>
    )
}