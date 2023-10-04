import { TBlockAttribute } from '../../components/tag/tag.Type';
import style from './style.module.scss';

const data: TBlockAttribute[] = [
  {
    tag: 'section',
    classes: style.container,
    itemTag: [
      {
        tag: 'h3',
        classes: style.block,
        title: 'Запрашиваемая Вами страница не найдена'
      }
    ]
  }
];

export { data };