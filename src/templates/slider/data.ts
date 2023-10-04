import { TBlockAttribute } from '../../components/tag/tag.Type';
import style from './style.module.scss';

const dataDATA: TBlockAttribute[] = [
  {
    tag: 'section',
    classes: style.container,
    itemTag: [
      {
        tag: 'button',
        classes: style['block-button__left'],
        putMarkClick: 'mark1',
        title: String.fromCharCode(8249)
      },
      {
        tag: 'div',
        classes: style['block-div'],
        putMarkChildren: 'on'
      },
      {
        tag: 'button',
        classes: style['block-button__right'],
        putMarkClick: 'mark2',
        title:  String.fromCharCode(8250)
      },
    ]
  }
];

const dataErrorDATA: TBlockAttribute[] = [
  {
    tag: 'section',
    classes: style['container-err'],
    itemTag: [
      {
        tag: 'h3',
        classes: style['block-err'],
        title: 'Запрашиваемая Вами страница не найдена'
      }
    ]
  }
];
const dataLoadingDATA: TBlockAttribute[] = [
  {
    tag: 'section',
    classes: style['container-load'],
    itemTag: [
      {
        tag: 'h3',
        classes: style['block-load'],
        title: 'loading...'
      }
    ]
  }
];

export { dataDATA, dataErrorDATA, dataLoadingDATA };