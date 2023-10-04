import { memo } from 'react';
import * as TagMount from './tag.Mount';
import { TBlockAttribute, TClick, TItemTagAttribute, TSubItemTagAttribute } from './tag.Type';

const Tag: Function = memo((props: {data: TBlockAttribute[], children?: React.ReactNode, click?: TClick[]}): JSX.Element => {
  const { data, children, click } = props;
  return(
    <>
      {
        data.map((block: TBlockAttribute, i: number) => (
          <TagMount.TagBasic key={i} data={block} click={click}>
            <>
              {
                block.itemTag?.map((itemTag: TItemTagAttribute, j: number) => (
                  <TagMount.TagBasic key={i + '-itemTag-' + j} data={itemTag} click={click}>
                    <>
                      {
                        itemTag.subItemTag?.map((subItemTag: TSubItemTagAttribute, k: number) => (
                          <TagMount.TagBasic key={i + '-itemTag-' + j + '-subItemTag-' + k} data={subItemTag} click={click}>
                            { subItemTag.putMarkChildren && children }
                          </TagMount.TagBasic>
                        ))
                      }
                      { itemTag.putMarkChildren && children }
                    </>
                  </TagMount.TagBasic>
                ))
              }
              { block.putMarkChildren && children }
            </>
          </TagMount.TagBasic> 
        ))
      }
    </>
  )
})

export default Tag;