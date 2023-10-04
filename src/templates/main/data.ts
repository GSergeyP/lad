import { TBlockAttribute } from '../../components/tag/tag.Type';
import style from './style.module.scss';

const data: TBlockAttribute[] = [
  {
    tag: 'section',
    classes: style.container,
    putMarkChildren: 'on',
    itemTag: [
      {
        tag: 'button',
        classes: style['block-button'],
        title: 'Модальное окно'
      }
    ]
  }
];

const dataH1: TBlockAttribute[] = [
  {
    tag: 'h1',
    classes: style['block-h1'],
    title: 'GROWTASK'
  }
];

export { data, dataH1 };