import React from 'react';

type Position = 'left' | 'right';

type Toggle = 'on';

type Tag = 'h1' | 'h3' | 'header' | 'section' | 'footer' | 'div' | 'nav' | 'button' | 'ul';

type Mark = 'mark1' | 'mark2' | 'mark3';

interface Classes {
  classes: string
}

interface TClick {
  putMarkClick: Mark,
  onClick: () => void
}

type TSubItemTagAttribute = Classes & {
  tag: Tag,
  putMarkClick?: Mark
  title?: string,
  children?: React.ReactNode,
  putMarkChildren?: Toggle,
  img?: TImg[],
  icon?: TIcon[]
}

type TItemTagAttribute = TSubItemTagAttribute & {
  subItemTag?: TSubItemTagAttribute[]
}

type TBlockAttribute = TSubItemTagAttribute & {
  itemTag?: TItemTagAttribute[],
}

type TImg = Classes & {
  src: string,
  alt: string,
  position: Position,
}

type TImgAttribute = Omit<TImg, 'position'>;

type TIcon = Classes & {
  icon: string,
  position: Position,
  onClick?: () => void
}

type TIconAttribute = Omit<TIcon, 'position'>;

export type { TBlockAttribute, TItemTagAttribute, TSubItemTagAttribute, TClick, TImg, TImgAttribute, TIcon, TIconAttribute };