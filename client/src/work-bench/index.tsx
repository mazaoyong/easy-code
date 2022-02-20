import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'zent';
import MuiIcon from '@components/mui-icons'
import { COMPONENTS_CONFIG } from './constants'
import DragContainer from './blocks/drag-container'
import ActionBar from './blocks/action-bar'
import { v4 as uuidv4 } from 'uuid';
import './style.scss'
import { IDrageItem } from './types';

const WorkBench: React.FC = () => {
  const [schema, setSchema] = useState<IDrageItem[]>([]);
  const [selected, setSelected] = useState<string>('');
  const handleAddSchema = useCallback((props) => {
    const { id, text } = props;
    setSchema([
      ...schema,
      {
        id: uuidv4(),
        type: 'field.zent',
        component: id,
        name: 'name_' + Math.random().toString(36).substr(2, 4),
        label: text + '：',
        placeholder: ''
      }
    ])
  }, [schema])
  // 拖动结束，重新排序
  const handleReorder = useCallback((form: number, to: number) => {
    if (form !== to) {
      const schemaCopy = [...schema];
      const [removeItem] = schemaCopy.splice(form, 1);
      schemaCopy.splice(to, 0, removeItem);
      setSchema(schemaCopy);
    }
  }, [schema])

  // 删除控件
  const handleRemove = useCallback((removeIndex) => {
    const removeItem = schema.find((_, index) => index === removeIndex);
    if (removeItem?.id === selected) {
      setSelected('')
    }
    const newSchema = schema.filter((_, index) => index !== removeIndex);
    setSchema(newSchema);
  }, [selected, schema]);

  // 配置变化
  const handleConfiChange = useCallback((config) => {
    const schemaCopy = [...schema]
    setSchema(schemaCopy.map(item => {
      if (config?.id === item.id) {
        return config;
      } else {
        return item;
      }
    }))
  }, [schema])

  return (
    <div className="work-bench">
      <div className="wb-left">
        {
          Object.entries(COMPONENTS_CONFIG).map(([compType, list]) => {
            return (
              <div className="wl-components" key={compType}>
                <h4>{compType}</h4>
                <div className="wc-main">
                  {
                    list.map((item, index) => (
                      <div key={compType + index} className="wm-item">
                        <Button className="wi-button" onClick={() => handleAddSchema(item)}>
                          <div className="wb-text">
                            <MuiIcon type={item.icon}></MuiIcon>
                            <span style={{ paddingLeft: '8px' }}>{item.text}</span>
                          </div>
                        </Button>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="wb-center">
        <div className="wc-title">工作台</div>
        <div className="wc-container">
          <div className="wc-main">
            <DragContainer
              selected={selected}
              schema={schema}
              onReorder={handleReorder}
              onRemove={handleRemove}
              onSelected={id => setSelected(id)}
            ></DragContainer>
          </div>
        </div>
      </div>
      <div className="wb-right">
        <ActionBar
          selectedItem={schema.find(item => item.id === selected)}
          onChange={handleConfiChange}
        ></ActionBar>
      </div>
    </div>
  )
}

export default WorkBench;