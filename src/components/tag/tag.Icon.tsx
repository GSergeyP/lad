import { memo } from 'react';
import IconsFile from '../../common/svg/icons.svg';
import { TIconAttribute } from './tag.Type';

const TagIcon: Function = memo((props: TIconAttribute): JSX.Element => {
  
  return(
    <svg className = {props.classes} onClick={props.onClick}>
      <use xlinkHref = { `${IconsFile}#${props.icon}` }></use>
    </svg> 
  )
}) 

export { TagIcon };