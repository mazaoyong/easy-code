import React, { useState, useCallback, useMemo, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Rnd } from 'react-rnd';

const EditorBlock: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(window.innerHeight - 40)
  }, [])

  const handleEditorDidMount = useCallback((editor, monaco) => {
    editor.focus()
  }, [width])

  const handleChange = useCallback((newValue) => {
    setCode(newValue)
  }, [])

  const handleResize = useCallback((e, direction, ref, delta, position) => {
    setWidth(ref.offsetWidth)
  }, [])

  return (
    <div className="editor-block">
      <Rnd
        size={{
          width,
          height
        }}
        style={{ background: 'red' }}
        onResize={handleResize}
        disableDragging
        enableResizing={{
          left: true,
          right: true
        }}
      >
        <MonacoEditor
          language="html"
          width={width}
          height={height}
          options={{}}
          value={code}
          onChange={handleChange}
          editorDidMount={handleEditorDidMount}
          theme="vs-dark"
        >
        </MonacoEditor>
      </Rnd>
    </div>
  );
}

export default EditorBlock;
