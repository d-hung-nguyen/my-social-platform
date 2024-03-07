// components/DynamicComponent.js
import { useEffect, useState } from 'react';

function DynamicComponent() {
  const [dynamicContent, setDynamicContent] = useState('Initial content'); // Consistent initial state

  useEffect(() => {
    // Change state to something client-specific after mount
    const clientSpecificContent = 'Content based on client-side operation';
    setDynamicContent(clientSpecificContent);
  }, []);

  return <div>{dynamicContent}</div>;
}

export default DynamicComponent;

