import dynamic from 'next/dynamic';
import React, { forwardRef } from 'react';

// Dynamically import the InitializedMDXEditor and turn off SSR
const Editor = dynamic(() => import('./InitializedMDXEditor.jsx'), {
  ssr: false
});

// This component is exported to other components, pre-initialized with plugins and ready to accept props and ref
export const ForwardRefEditor = forwardRef((props, ref) => (
  <Editor {...props} editorRef={ref} />
));

// Setting the display name for debugging or React DevTools
ForwardRefEditor.displayName = 'ForwardRefEditor';

