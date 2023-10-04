import { useEffect, useMemo, useState } from 'react';
import TagLink from '../../../components/link';
import Tag from '../../../components/tag';
import * as TagMount from '../../../components/tag/tag.Mount';
import { dataIcon, dataLink, dataTagBlockNav, dataTagContainer, dataTagBlockH1 } from '../data';

const Tablet: React.FC = (): JSX.Element => {

  const [index, setIndex] = useState<number>(0);
  const [icon, setIcon] = useState<Boolean>(true);
  const width: number = window.innerWidth;

  useEffect(() => {
    const saze: Array<{}> = [ 550, 640, 730, 820, 910 ];
    
    if (width <= saze[0]) setIndex(1)
    else if ( width > saze[0] && width <= saze[1]) setIndex(2)
    else if ( width > saze[1] && width <= saze[2]) setIndex(3)
    else if ( width > saze[2] && width <= saze[3]) setIndex(4)
    else if ( width > saze[3] && width <= saze[4]) setIndex(5)
    else if ( width > saze[4]) setIndex(6)
  }, [width])
 
  const contentIcon = useMemo(() => {
    let content: object[] = dataLink.slice( index )
    return content
  }, [index])

  const contentNav = useMemo(() => {
    let content: object[] = dataLink.slice( 0, index)
    return content
  }, [index])

  const handleClick = () => {
    setIcon(value => !value);
  }

  const content = contentIcon.map((item: {[key: string]: any}) => (
    {
      ...item, onClick: handleClick
    }
  ))
 
  return (
    <Tag data={dataTagContainer}>
      <TagLink data={contentNav} />
      {
        index < dataLink.length
        ? icon
          ? <TagMount.TagIcon {...dataIcon[0]} onClick={handleClick} />
          : <>
              <TagMount.TagIcon {...dataIcon[1]} onClick={handleClick} />
              <Tag data={dataTagBlockNav}>
                <TagLink data={content} />
              </Tag>
            </>
        : ''
      } 
      { index < 4 && <Tag data={dataTagBlockH1} /> }
    </Tag>
  )
}

export { Tablet };