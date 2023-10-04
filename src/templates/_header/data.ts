import { TBlockAttribute, TIconAttribute } from '../../components/tag/tag.Type';
import { TLinkAttribute } from '../../components/link/link.Type';
import style from './style.module.scss';

const dataTagContainer: TBlockAttribute[] = [
  {
    tag: 'header',
    classes: style.container,
    putMarkChildren: 'on'
  }
];

const dataTagBlockH1: TBlockAttribute[] = [
  {
    tag: 'h1',
    classes: style['block-h1'],
    title: 'GROWTASK',
  }
];

const dataTagBlockNav: TBlockAttribute[] = [
  {
    tag: 'nav',
    classes: style['block-nav'],
    putMarkChildren: 'on'
  }
];

const dataIcon: TIconAttribute[] = [
  {
    classes: style['block-icon'],
    icon: 'hamburger'
  },
  {
    classes: style['block-icon'],
    icon: 'cross'
  }
];

const dataLink: TLinkAttribute[] = [
  {
    classes: style.item,
    to: '',
    title: 'Главная'
  },
  {
    classes: style.item,
    to: 'slider',
    title: 'Слайдер'
  },
  {
    classes: style.item,
    to: 'cards',
    title: 'Карточки'
  },
  {
    classes: style.item,
    to: 'form',
    title: 'Форма'
  },
  {
    classes: style.item,
    to: 'list',
    title: 'Список'
  },
  {
    classes: style.item,
    to: 'modal',
    title: 'Модалка'
  },
];

export { dataTagContainer, dataTagBlockH1, dataTagBlockNav, dataIcon, dataLink };