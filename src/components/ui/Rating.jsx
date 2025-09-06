import React from 'react';
export default function Rating({value=5}) {
  return <div className="text-amber-500">{'★'.repeat(value)}</div>;
}
