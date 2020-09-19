import React from 'react';
import { useSelector } from "react-redux"
import { store,pin,archive,unpin } from "../../redux/reducer"
import ButtonComponent from '@bit/warishasan.taskbox.button-component'
import TaskList from '@bit/warishasan.taskbox.task-list'
import NewTaskScreen from '../NewTaskScreen/NewTaskScreen'
import './InboxScreen.css'

interface task {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";

}


function onPinTask (id:string) {

store.dispatch(pin({ id: id}))

}


function onArchiveTask (id:string) {

store.dispatch(archive({ id: id}))

}


function onUnpinTask (id:string) {

    store.dispatch(unpin({ id: id}))
    
    }

export default function InboxScreen() {
    const reducer= useSelector((state) => state);
    console.log(reducer)

    const [open,setOpen] = React.useState(false)

return (
    <div >
      {open &&
    <NewTaskScreen open = {open} setOpen = {setOpen}></NewTaskScreen>
      }
      <div >
          <h1 className = "mainHeading">My Taskbox</h1>

      </div>

      <div className = "addANewTaskButtonContainer">
      <ButtonComponent onClick = {()=>{setOpen(true)}}  color = "primary" variant = "contained">Add a Task</ButtonComponent>
      </div>
      <TaskList tasks = {reducer as task[] } onPinTask = {onPinTask} onArchiveTask = {onArchiveTask} onUnpinTask = {onUnpinTask} ></TaskList>
    </div>
  );
}


