/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToDos
// ====================================================

export interface ToDos_toDos {
  __typename: "ToDo";
  id: string;
  title: string;
}

export interface ToDos {
  toDos: (ToDos_toDos | null)[];
}
