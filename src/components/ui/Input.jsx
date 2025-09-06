import React from 'react';
export function Input(props) {
  return <input {...props} className={(props.className||'')+' border border-slate-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-amber-200'} />;
}
