import MuiIcons from '@components/mui-icons';
import React, { useCallback, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IDragContainerProps } from 'src/work-bench/types';
import { Form, FormStrategy } from 'zent';
import DragItem from './DragItem';
import './style.scss';

const getItemStyle = (isDragging, draggableStyle, isSelected) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: `8px 0`,
  margin: '8px 0',
  // 拖拽的时候背景变化
  background: isDragging ? '#eeeeee' : '#fff',
  border: isSelected && '1px dashed red',
  // styles we need to apply on draggables
  ...draggableStyle
});

const DragContainer: React.FC<IDragContainerProps> = (props) => {
  const { schema, selected, onReorder, onRemove, onSelected } = props;
  const form = Form.useForm(FormStrategy.View);

  const handleDragEnd = useCallback((res) => {
    const { source, destination } = res || {};
    const fromIndex = source?.index;
    const toIndex = destination?.index;
    if (fromIndex !== toIndex) {
      onReorder(fromIndex, toIndex);
    }
  }, [onReorder])

  return (
    <div className="drag-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              //provided.droppableProps应用的相同元素.
              {...provided.droppableProps}
              // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
              ref={provided.innerRef}
            >
              <Form form={form} layout="horizontal">
                {schema.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                          selected === item.id
                        )}
                        className="dc-item"
                        onClick={() => onSelected(item.id)}
                      >
                        <DragItem
                          type={item.component}
                          {...item}
                        ></DragItem>
                        <MuiIcons
                          type="delete"
                          color="red"
                          className="di-delete"
                          onClick={() => onRemove(index)}
                        ></MuiIcons>
                      </div>
                    )}
                  </Draggable>
                ))}
              </Form>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DragContainer;