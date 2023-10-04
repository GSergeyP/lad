import { TImg } from '../tag/tag.Type';
import { TIcon } from '../tag/tag.Type';

interface TLinkAttribute {
  to: string,
  classes: string,
  title?: string,
  children?: React.ReactNode,
  img?: TImg[],
  icon?: TIcon[],
  onClick?: () => void
}

export type { TLinkAttribute };