import { memo } from 'react';
import { TClick, TIcon, TImg, TSubItemTagAttribute } from './tag.Type';
import * as TagMount from './tag.Mount';

const TagBasic: Function = memo((props: {data: TSubItemTagAttribute, click?: TClick[], children?: React.ReactNode}): JSX.Element => {
  const { data, click, children } = props;
  const Tag = `${data.tag}` as keyof JSX.IntrinsicElements;

  let onClick: React.MouseEventHandler | undefined;
  if (click) {
    for (let i = 0; i < click.length; i++) {
      if(click[i].putMarkClick === data.putMarkClick ) {
        onClick = click[i].onClick
        break;
      }
      else {
        onClick = undefined
      } 
    }
  }

  return (
    <Tag 
      className={data.classes}
      onClick={onClick}
    >
      {
       data.icon?.map((item: TIcon, i: number) => (
          item.position === 'left'
          && <TagMount.TagIcon {...item} key={i} />
        ))
      }
      {
        data.img?.map((item: TImg, i: number) => (
          item.position === 'left'
          && <TagMount.TagImg {...item} key={i} />
        ))
      }
      {data.title}
      {children}
      {
        data.icon?.map((item: TIcon, i: number) => (
          item.position === 'right'
          && <TagMount.TagIcon {...item} key={i} />
        ))
      }
      {
        data.img?.map((item: TImg, i: number) => (
          item.position === 'right'
          && <TagMount.TagImg {...item} key={i} />
        ))
      }
    </Tag>
  )
})

export { TagBasic };