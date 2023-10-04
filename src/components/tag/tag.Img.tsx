import { memo } from 'react';
import { TImgAttribute } from './tag.Type';

const TagImg: Function = memo((props: TImgAttribute): JSX.Element => {
return (
    <img className={props.classes} src={props.src} alt={props.alt} />
  ) 
})

export { TagImg };