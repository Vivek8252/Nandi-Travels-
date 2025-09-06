import React from 'react';
export default function Button({ children, className='', as='button', ...props }) {
  const cls = 'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-sm ' + className;
  if (as === 'a') return <a {...props} className={cls}>{children}</a>;
  return <button {...props} className={cls}>{children}</button>;
}
