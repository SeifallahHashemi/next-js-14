'use client'
import React, { useTransition } from "react";
import { List, ListItem, Card, ListItemPrefix, Radio, Typography, Checkbox } from "@material-tailwind/react";
import { Todo } from "@/components/server-actions/NewTodo with ServerActions/new-todo-page";
import { updateTodoAction } from "@/utils/actions/_action";
import { cn } from "@/utils/tailwind-merger";

const NewTodoList = ({todos}: {todos: Todo[]}) => {
  const [isPending, startTransition] = useTransition();
  return (
    <Card className="w-96">
      <List>
        {todos?.map(todo => {
          return (
            <ListItem className='p-0' key={todo.id}>
              <label
                htmlFor={todo.id}
                className='flex w-full cursor-pointer items-center px-3 py-2'
              >
                <ListItemPrefix className='mr-3'>
                  <Checkbox
                    name='vertical-list'
                    id={todo.id}
                    ripple={false}
                    className={'peer hover:before:opacity-0'}
                    onChange={(e) =>
                      startTransition(() =>
                        updateTodoAction(todo.id, e.target.checked),
                      )
                    }
                    defaultChecked={todo.isCompleted}
                    containerProps={{
                      className: 'p-0',
                    }}
                    crossOrigin
                  />
                </ListItemPrefix>
                <Typography
                  color='blue-gray'
                  className={cn('peer-checked:text-slate-500 font-medium text-blue-gray-400 peer-checked:line-through', {
                    'line-through': todo.isCompleted,
                  })}
                >
                  {todo.title}
                </Typography>
              </label>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default NewTodoList;