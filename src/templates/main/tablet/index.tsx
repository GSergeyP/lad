import { useEffect, useState } from 'react';
import Tag from '../../../components/tag';
import { data, dataH1 } from '../data';

const Tablet: React.FC = (): JSX.Element => {

  const [h1, setH1] = useState<Boolean>(false)
  const width: number = window.innerWidth;

  useEffect(() => {
    if(width <= 730) setH1(false)
    else setH1(true)
  }, [width])

  return (
    <Tag data={data}>
      {
        h1 
        ? <Tag data={dataH1} />
        : ''
      }
    </Tag>
  )
}

export { Tablet };