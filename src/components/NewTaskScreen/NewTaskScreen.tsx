import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import {store,add} from '../../redux/reducer'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NewTask from '@bit/warishasan.taskbox.new-task'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",

        
       
      },
 


  })

);






export interface props {
    open:boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void
}
export default function NewTaskScreen(props:props) {
const classes = useStyles();

        
const [input, setInput] = React.useState("");



function inputOnChange (e: React.ChangeEvent<HTMLInputElement>) {
  setInput (e.target.value);
 
  }


const handleSave = () => {
        props.setOpen(false);

        if (input === ""){

        store.dispatch (add({title: "Anonymous Task"}))

        }
        else{

        store.dispatch (add({title: input}))

        }

    };


const handleCancel = () => {
        props.setOpen(false);
    };



return (
<div>
<Backdrop open={props.open} className = {classes.backdrop} >
<NewTask handleSave = {handleSave} handleCancel = {handleCancel} inputOnChange = {inputOnChange}></NewTask>
</Backdrop>
</div>
  
)
}