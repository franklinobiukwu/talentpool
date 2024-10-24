'use client'
// https://github.com/mdx-editor/editor/blob/1fc2ec747c8b273359bfff0f030447a047521141/docs/getting-started.md#nextjs-app-router
import { useRef, useState, Suspense, useEffect } from 'react';
import React from 'react';

import { forwardRef } from 'react';
import type { MDXEditorMethods, MDXEditorProps } from './base';

// This is the only place InitializedMDXEditor is imported directly.
const BaseEditor = React.lazy(() => import('./base'))

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const CoreEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <BaseEditor {...props} editorRef={ref} />)

// TS complains without the following line
CoreEditor.displayName = 'CoreEditor'

type MetaData = {
  title: string,
  description: string,
  slug: string,
  image: string,
  tags: string
}

export const Editor = ({ onSave, onClear, onChange }: { onSave?: (value: string) => void, onClear?: () => void, onChange?: (value: string) => void }) => {
  const editorRef = useRef<MDXEditorMethods>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const handleSave = () => {
    saveAsMDX(markdown);
    onSave?.(markdown);
  }
  const handleClear = () => {
    onClear?.();
    setMarkdown('');
    editorRef.current?.setMarkdown('');
  }

  const handleChange = (value:string) => {
      setMarkdown(value)
    if (onChange){
        onChange(value)
    }
  }

  return (
    <div className="flex flex-row min-h-screen w-full gap-6">
      <div className="flex flex-col items-center justify-center my-4 gap-6">
        <Suspense fallback={<div className='h-screen w-full'><Loader /></div>}>
          <CoreEditor ref={editorRef} markdown={markdown} onChange={handleChange} />
        </Suspense>
      </div>
    </div>
  )
}

const Loader = () => (
  <div className='h-screen w-full flex items-center justify-center'>
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
)


const saveAsMDX = (value: string) => {
  const blob = new Blob([value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download =  'sandbox.mdx';
  a.click();
  URL.revokeObjectURL(url);
}
