import { memo } from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { Loader } from '../Loader/Loader';

type Props = {
  todo: Todo,
  onDeleteTodo: (todoId: number) => void,
  isLoading: boolean
};

export const TodoInfo: React.FC <Props> = memo(({
  todo,
  onDeleteTodo,
  isLoading,
}) => {
  return (
    <div
      data-cy="Todo"
      className={classNames('todo', { completed: todo.completed })}
      key={todo.id}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          defaultChecked
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">{todo.title}</span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDeleteButton"
        onClick={() => onDeleteTodo(todo.id)}
      >
        ×
      </button>

      <Loader
        isLoading={isLoading}
      />

    </div>
  );
});