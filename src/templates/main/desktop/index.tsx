import Tag from '../../../components/tag';
import { data, dataH1 } from '../data';

const Desktop: React.FC = (): JSX.Element => {
  return (
    <Tag data={data}>
      <Tag data={dataH1} />
    </Tag>
  )
}

export { Desktop };