import { screenResolution, useWindowSize } from '../../common/assest/useWindowSize';
import * as DeviceModule from './device.Module';
import Sliders from './_support.Function/slider';


const Slider: React.FC = (): JSX.Element => {
  const width: number = useWindowSize();
  return (
    <>
      {
        width <= screenResolution[0] 
        ? <DeviceModule.Mobile {...Sliders()} /> 
        : width > screenResolution[0] && width <= screenResolution[1]
          ? <DeviceModule.Tablet {...Sliders()} /> 
          : <DeviceModule.Desktop {...Sliders()} /> 
      }
    </>
  )
}

export default Slider;