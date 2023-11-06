import React, {FC} from 'react';
import {Product} from "@/libs/types";

interface TodoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: Product
    innerRef?: React.Ref<HTMLDivElement>
}
const TodoCard: FC<TodoCardProps> = ({ product,  innerRef,...props}) => {
    return (
        <div key={product.id} {...props} ref={innerRef}>
            {product.product}
        </div>
    );
};

export default TodoCard;