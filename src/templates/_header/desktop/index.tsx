import Tag from '../../../components/tag';
import TagLink from '../../../components/link';
import { dataTagContainer, dataTagBlockNav, dataLink } from '../data';

const Desktop: React.FC = (): JSX.Element => {
  return (
    <Tag data={dataTagContainer}>
      <Tag data={dataTagBlockNav}>
        <TagLink data={dataLink} />
      </Tag>
    </Tag>
  )
}

export { Desktop };

