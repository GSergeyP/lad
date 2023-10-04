import { useState } from 'react';
import Tag from '../../../components/tag';
import TagLink from '../../../components/link';
import * as TagMount from '../../../components/tag/tag.Mount';
import { dataTagContainer, dataTagBlockH1, dataTagBlockNav, dataIcon, dataLink } from '../data';
import { TLinkAttribute } from '../../../components/link/link.Type';

const Mobile: React.FC = (): JSX.Element => {

  const [icon, setIcon] = useState<Boolean>(true)

  const handleClick = () => {
    setIcon(value => !value);
  }

  const content = dataLink.map((item: TLinkAttribute) => (
    {
      ...item, onClick: handleClick
    }
  ))

  return (
    <Tag data={dataTagContainer}>
      <Tag data={dataTagBlockH1} />
      {
        icon
        ? <TagMount.TagIcon {...dataIcon[0]} onClick={handleClick} />
        : <>
            <TagMount.TagIcon {...dataIcon[1]} onClick={handleClick} />
            <Tag data={dataTagBlockNav}>
              <TagLink data={content} />
            </Tag>
          </>
      }
    </Tag>
  )
}

export { Mobile };