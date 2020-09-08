import React, { useEffect } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import { ToDo } from './ToDo';
import { ToDos as ToDosType } from '../graphql/query/types/ToDos';
import { Card, Col, Row } from 'antd';
import { ToDoChanged } from '../graphql/subscription/types/ToDoChanged';
import { addOrReplaceBy } from '../utils/addOrReplaceBy';

const ToDosQuery = loader('../graphql/query/toDos.graphql');
const ToDoChangedSubscription = loader('../graphql/subscription/toDoChanged.graphql');

export const ToDos = () => {
  const { data, loading, error, subscribeToMore } = useQuery<ToDosType>(ToDosQuery);
  useEffect(subscribeToMore<ToDoChanged>({
    document: ToDoChangedSubscription,
    updateQuery: (previousQueryResult, { subscriptionData }) => {
      if (!subscriptionData.data) return previousQueryResult;
      const todoChanged = subscriptionData.data.ToDoChanged;
      const newTodos = addOrReplaceBy(previousQueryResult.toDos, { id: todoChanged.id }, todoChanged);
      return {
        ...previousQueryResult,
        toDos: [...newTodos],
      }
    }
  }));
  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h1>Failed to load!</h1>;
  return (
    <Row>
      {
        data.toDos.map(
        (toDo, index) =>
          <Col span={6}>
            {
              toDo ?
                <ToDo toDo={toDo} key={toDo?.id} /> :
                <Card key={index}>Failed to load</Card>
            }
          </Col>
        )
      }
    </Row>
  )
};
