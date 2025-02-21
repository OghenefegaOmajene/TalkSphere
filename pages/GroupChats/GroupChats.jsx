import React from 'react'
import './GroupChats.css'
import { IoMdAddCircle } from "react-icons/io";
import Group from '../../components/Group/Group';

const GroupChats = () => {
  return (
    <div className='groupsBox'>
        <div className="groups">
            <div className="groupsHead">
                <h1>Groups</h1>
                <i><IoMdAddCircle /></i>
            </div>
            
            <Group></Group>
            <Group></Group>
            <Group></Group>
            <Group></Group>
            <Group></Group>
            <Group></Group>
            
        </div>

        <div className="groupChatSpace">
            
        </div>
    </div>
  )
}

export default GroupChats