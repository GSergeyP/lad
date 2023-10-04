import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getFetchingData } from '../../../connect/connect';
import { TClick } from '../../../components/tag/tag.Type';

const Sliders: Function = (): Object[] => {
  
  const { DATA, loadingDATA, errorDATA } = useSelector((state: RootState) => state.fetchingData);
  const dispatch = useDispatch();
  const [currentDATA, setCurrentDATA] = useState<Object[]>(DATA);
  
  useEffect(() => {
    dispatch(getFetchingData());
  }, [dispatch]);

  useEffect(() => {
    setCurrentDATA(DATA);
  }, [DATA])

  const data = useMemo(() => {

    const next = () => {
    
      let  putKeyObjectDATA: Object[] = []; 
      let index: number = 0;
      let i: number = 0;
  
      const { 0: _, ...deletingObjectDATA} = currentDATA;
      
      for (let key in deletingObjectDATA) {  
        putKeyObjectDATA[i] = deletingObjectDATA[key];
        i++;
      }
      index = currentDATA.length - 1;
      putKeyObjectDATA[index] = currentDATA[0];
      setCurrentDATA(putKeyObjectDATA);
    }
    const prev = () =>  {
      
      let  putKeyObjectDATA: Object[] = []; 
      let i: number = 1;
  
      const { [currentDATA.length - 1]: _, ...deletingObjectDATA} = currentDATA;
      for (let key in deletingObjectDATA) {  
        putKeyObjectDATA[i] = deletingObjectDATA[key];
        i++;
      }
      putKeyObjectDATA[0] = currentDATA[currentDATA.length - 1];
      setCurrentDATA(putKeyObjectDATA);
    }
    
    const click: TClick[] = [
      {
        putMarkClick: 'mark1',
        onClick: prev
      },
      {
        putMarkClick: 'mark2',
        onClick: next
      },
    ];
    
    let data: Object[] = [];

    if (loadingDATA && !errorDATA) data = [{status: 'loadingDATA'}]
    else if (!loadingDATA && errorDATA) data = [{status: 'errorDATA'}]
    else data = [{status: 'data', data: currentDATA, click: click}]

    return data
 
  }, [loadingDATA, errorDATA, currentDATA]);

  return data
}

export default Sliders;
