import _ from 'lodash';

export function addOrReplaceBy<T>(arr: T[] = [], predicate: any, item: T): T[] {
  const index = _.findIndex(arr, predicate);
  return index === -1
    ? [...arr, item]
    : [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index + 1)
    ];
}
