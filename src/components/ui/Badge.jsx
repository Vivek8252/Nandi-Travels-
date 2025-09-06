import React from 'react';
export default function Badge({ children }) {
  return <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">{children}</span>;
}
