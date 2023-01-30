
import { useContext, useEffect, useState } from 'react'
import classes from './components.module.css'
import Button from './UI/Button'
import Input from './UI/Input'

const ModalWindow = ({ isShow, editTodo, dataTask, handleOnChange, closeWindow, addTodo }) => {

  if (!isShow) {
    return <></>
  }

  return (
    <>
      <div onClick={closeWindow} className={classes.modalWindowWrapper}>
      </div>
      <div className={classes.modalWindow}>
        <Input name='title' value={dataTask.title} handleOnChange={handleOnChange}/>
        <Input name='description' value={dataTask.description} handleOnChange={handleOnChange}/>
        
        {dataTask.id 
        ?
          <Button handleDo={() => {
            editTodo(dataTask)
            closeWindow()
          }}>Редактировать</Button>
        :
          <Button handleDo={() => {
            addTodo(dataTask)
            closeWindow()
          }}>Добавить</Button>
        }
      </div>
    </>
  )
}

export default ModalWindow