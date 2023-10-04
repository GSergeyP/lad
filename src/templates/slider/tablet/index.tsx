import React, { useEffect, useState } from 'react';
import Tag from '../../../components/tag';
import * as TagMount from '../../../components/tag/tag.Mount';
import { TImgAttribute } from '../../../components/tag/tag.Type';
import { dataDATA, dataErrorDATA, dataLoadingDATA } from '../data';
import style from '../style.module.scss';

const Tablet: React.FC = (props: {[key: string]: any}): JSX.Element => {

  const {status, data, click} = props[0]
  const [content, setContent] = useState<any>()
  const [windows, setWindows] = useState<Boolean>(false)
  const width: number = window.innerWidth;

  useEffect(() => {

    if(width <= 730) setWindows(false)
    else setWindows(true)
    
    if (status === 'loadingDATA') setContent(<Tag data={dataLoadingDATA} />)
    else if (status === 'errorDATA') setContent(<Tag data={dataErrorDATA} />)
    else if (status === 'data') setContent(
      <Tag data={dataDATA} click={click}>
        {
          data.map((item: TImgAttribute, i: number) => (
            windows
            ? <Tag key={i} data={[{tag: 'div', classes: style[`item${i}`], putMarkChildren: 'on'}]}>
                <TagMount.TagImg  classes={style[`subItem${i}`]} src={item.src} alt={item.alt} />
              </Tag>
            : i === 0
              && <TagMount.TagImg  key={i} classes={style.item} src={item.src} alt={item.alt} />
          ))
        }
      </Tag>
    )  
  }, [status, data, click, width, windows]);

  return content
}

export { Tablet };