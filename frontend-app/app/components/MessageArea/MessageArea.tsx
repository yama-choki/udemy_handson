'use client';

import { selectMessage } from '@/app/features/messageSlice';
import { useAppSelector } from '@/app/hooks/useRTK';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import MessageItem from '../MessageItem/MessageItem';

const MessageArea = () => {
  const pathname = usePathname();
  const messages = useAppSelector(selectMessage);
  const data = messages.ragextra1;
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [data]);

  return (
    <div className="w-full overflow-auto pt-10">
      {data.length !== 0 &&
        data.map((d: { isMan: boolean; message: string }, index: number) => (
          <MessageItem isMan={d.isMan} message={d.message} key={index} />
        ))}
      <div ref={scrollBottomRef} />
    </div>
  );
};

export default MessageArea;