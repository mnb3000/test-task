/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateToDo
// ====================================================

export interface CreateToDo_createToDo {
  __typename: "ToDo";
  id: string;
  title: string;
}

export interface CreateToDo {
  createToDo: CreateToDo_createToDo;
}

export interface CreateToDoVariables {
  title?: string | null;
}
