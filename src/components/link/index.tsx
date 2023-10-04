import { memo } from 'react';
import { Link } from 'react-router-dom';
import * as TagMount from '../tag/tag.Mount';
import { TIcon, TImg } from '../tag/tag.Type';
import { TLinkAttribute } from './link.Type';

const TagLink: Function = memo((props: {data: TLinkAttribute[]}): JSX.Element => {
  const { data } = props;
  return (
    <>
      {
        data.map((item: TLinkAttribute, i: number) => (
          <Link 
            key={i}
            to={item.to}
            className={item.classes}
            onClick={item.onClick}
          >
            {
              item.icon?.map((item: TIcon, i: number) => (
                item.position === 'left'
                && <TagMount.TagIcon {...item} key={i} />
              ))
            }
            {
              item.img?.map((item: TImg, i: number) => (
                item.position === 'left'
                && <TagMount.TagImg {...item} key={i} />
              ))
            }
            {item.title}
            {
              item.icon?.map((item: TIcon, i: number) => (
                item.position === 'right'
                && <TagMount.TagIcon {...item} key={i} />
              ))
            }
            {
              item.img?.map((item: TImg, i: number) => (
                item.position === 'right'
                && <TagMount.TagImg {...item} key={i} />
              ))
            }
          </Link>
        ))
      }
    </>
  ) 
})

export default TagLink;