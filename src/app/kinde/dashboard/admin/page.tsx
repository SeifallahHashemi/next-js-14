import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const KindeDashboard = async () => {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const isAuthed = await isAuthenticated();
  if (!isAuthed) {
    redirect('/api/auth/login');
  }
  const requiredPermission = await getPermission('admin:access');
  if (!requiredPermission?.isGranted) {
    redirect('/')
  }
  return (
    <div className='relative max-w-2xl mx-auto'>
      <input
        type='email'
        className='peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
        placeholder='Enter name'
      />
      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50'>
        <svg
          className='h-4 w-4 flex-shrink-0 text-gray-500'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
          <circle cx='12' cy='7' r='4' />
        </svg>
      </div>
    </div>
  );
};

export default KindeDashboard;