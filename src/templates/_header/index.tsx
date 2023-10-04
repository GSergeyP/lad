import { screenResolution, useWindowSize } from '../../common/assest/useWindowSize';
import * as DeviceModule from './device.Module';

const Header: React.FC = (): JSX.Element => {
  const width: number = useWindowSize();
  return (
    <>
      {
        width <= screenResolution[0] 
        ? <DeviceModule.Mobile /> 
        : width > screenResolution[0] && width <= screenResolution[1]
          ? <DeviceModule.Tablet /> 
          : <DeviceModule.Desktop /> 
      }
    </>
  )
}

export default Header;