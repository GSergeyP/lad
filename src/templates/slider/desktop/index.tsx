import { useEffect, useState } from 'react';
import Tag from '../../../components/tag';
import * as TagMount from '../../../components/tag/tag.Mount';
import { TImgAttribute } from '../../../components/tag/tag.Type';
import { dataDATA, dataErrorDATA, dataLoadingDATA } from '../data';
import style from '../style.module.scss';

const Desktop: React.FC = (props: {[key: string]: any}): JSX.Element  => {

  const {status, data, click} = props[0]
  const [content, setContent] = useState<any>()

  useEffect(() => {
    
    if (status === 'loadingDATA') setContent(<Tag data={dataLoadingDATA} />)
    else if (status === 'errorDATA') setContent(<Tag data={dataErrorDATA} />)
    else if (status === 'data') setContent(
      <Tag data={dataDATA} click={click}>
        {
          data.map((item: TImgAttribute, i: number) => (
            <Tag key={i} data={[{tag: 'div', classes: style[`item${i}`], putMarkChildren: 'on'}]}>
              <TagMount.TagImg  classes={style[`subItem${i}`]} src={item.src} alt={item.alt} />
            </Tag>
          ))
        }
      </Tag>
    )  
  }, [status, data, click]);
  
  return content
}

export { Desktop };




