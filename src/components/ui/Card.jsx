import React from 'react';
export function Card({ children, className='' }) {
  return <div className={('card-elev bg-white p-4 '+className).trim()}>{children}</div>;
}
export function CardHeader({ children }) { return <div className='mb-2'>{children}</div>; }
export function CardContent({ children }) { return <div>{children}</div>; }
export function CardTitle({ children }) { return <h3 className='text-lg font-semibold'>{children}</h3>; }
