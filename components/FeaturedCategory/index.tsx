import * as React from 'react';
import { FeaturedCategoryProps } from './FeaturedCategory.interfaces';
import SmallCard from '@/components/SmallCard';
import Icon from '@/components/Icon';
import { IconType } from '@/components/Icon/Icon.interfaces';

const FeaturedCategory: React.FunctionComponent<FeaturedCategoryProps> = ({
  title,
  icon,
  items,
}) => {
  return (
    <div className="border-2 m-2 rounded-xl">
      <div className="flex m-2">
        <Icon type={icon as IconType} />
        <h2 className="ml-2">{title}</h2>
      </div>
        {items.map((item) => (
          <SmallCard id={item.id} key={item.id} title={item.title} price={item.price} img={item.img} url={item.url} />
        ))}
    </div>
  );
};

export default FeaturedCategory;
