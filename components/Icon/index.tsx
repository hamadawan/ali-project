import * as React from 'react';
import InboxIcon from '@heroicons/react/solid/InboxIcon';
import StarIcon from '@heroicons/react/outline/StarIcon';
import UserGroupIcon from '@heroicons/react/outline/UserGroupIcon';
import HeartIcon from '@heroicons/react/outline/HeartIcon';
import { GlobeAltIcon, ChatIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { IconProps } from './Icon.interfaces';

const Icon: React.FunctionComponent<IconProps> = ({ type, className }) => {
  switch (type) {
    case 'inbox-arrow-down':
      return <InboxIcon className={className ?? 'h-5'} />;
    case 'airplane':
      return <PaperAirplaneIcon className={className ?? 'h-5'} />;
    case 'star':
      return <StarIcon className={className ?? 'h-5'} />;
    case 'user':
      return <UserGroupIcon className={className ?? 'h-5'} />;
    case 'heart':
      return <HeartIcon className={className ?? 'h-5'} />;
    case 'globe':
      return <GlobeAltIcon className={className ?? 'h-5'} />;
    case 'chat':
      return <ChatIcon className={className ?? 'h-5'} />;
    default:
      return <div>icon does not exist</div>;
  }
};

export default Icon;
