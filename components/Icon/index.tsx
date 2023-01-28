import * as React from 'react';
import InboxIcon from '@heroicons/react/solid/InboxIcon'
import StarIcon from '@heroicons/react/outline/StarIcon'
import UserGroupIcon from '@heroicons/react/outline/UserGroupIcon'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import { GlobeAltIcon, ChatIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { IconProps } from "./Icon.interfaces";

const Icon: React.FunctionComponent<IconProps> = ({ type }) => {
  switch(type) {
    case 'inbox-arrow-down':
      return <InboxIcon className="h-5" />
    case 'airplane':
      return <PaperAirplaneIcon className="h-5" />
    case 'star':
      return <StarIcon className="h-5" />
    case 'user':
      return <UserGroupIcon className="h-5" />
    case 'heart':
      return <HeartIcon className="h-5" />
    case 'globe':
      return <GlobeAltIcon className="h-5" />
    case 'chat':
      return <ChatIcon className="h-5" />
    default:
      <div>icon does not exist</div>
  }
};

export default Icon;
