import React from 'react'
import { Card } from 'antd';
import { ToDoFull } from '../graphql/fragments/types/ToDoFull';

interface ToDoPropTypes {
  toDo: ToDoFull
}

export const ToDo = ({ toDo }: ToDoPropTypes) => {
  return (
    <Card id={toDo.id}>
      <h2>{toDo.title}</h2>
    </Card>
  );
};
