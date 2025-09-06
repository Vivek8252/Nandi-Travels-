import React from 'react';
export function Textarea(props) {
  return <textarea {...props} className={(props.className||'')+' border border-slate-200 rounded px-3 py-2 w-full'} />;
}
