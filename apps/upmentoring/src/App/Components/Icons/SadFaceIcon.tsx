import React from 'react';

import SvgIcon from './SvgIcon';
import { Props } from '../../Types/React';

const SadFaceIcon: React.FunctionComponent<Props> = (props) => (
  <SvgIcon viewBox="0 0 16 18" width={16} height={18} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
      <switch>
        <g>
          <path d="M81.8,29.4c-2-4.8-4.9-9-8.6-12.7c-3.7-3.7-7.9-6.6-12.7-8.6C55.6,6.1,50.4,5,45,5S34.4,6.1,29.4,8.1 c-4.8,2-9,4.9-12.7,8.6c-3.7,3.7-6.5,8-8.6,12.7C6.1,34.4,5,39.6,5,45s1.1,10.6,3.1,15.6c2,4.8,4.9,9,8.6,12.7 c3.7,3.7,7.9,6.6,12.7,8.6C34.4,83.9,39.6,85,45,85s10.6-1.1,15.6-3.1c4.8-2,9-4.9,12.7-8.6c3.7-3.7,6.5-8,8.6-12.7 C83.9,55.6,85,50.4,85,45S83.9,34.4,81.8,29.4z M69.9,70C63.3,76.6,54.4,80.3,45,80.3c-9.4,0-18.3-3.7-24.9-10.3 C13.4,63.3,9.8,54.4,9.8,45s3.7-18.3,10.3-25C26.7,13.4,35.6,9.7,45,9.7c9.4,0,18.3,3.7,24.9,10.3c6.7,6.7,10.3,15.5,10.3,25 S76.6,63.3,69.9,70z" />
          <path d="M53,54.2c-3.9-1.3-7.1-1.4-8-1.4c-5.3,0-10.4,1.7-14.8,4.8c-1.8,1.2-3.2,2.5-4.2,3.6c-1,1-0.8,2.6,0.3,3.5l0,0 c0.9,0.7,2.3,0.6,3.1-0.3c2.4-2.5,7.7-6.9,15.6-6.9c1,0,9.4,0.2,15.6,6.8c0.8,0.9,2.2,1,3.1,0.3l0,0c1.1-0.8,1.3-2.4,0.3-3.5 C61.1,58,57.3,55.6,53,54.2z" />
          <circle cx="32.8" cy="35.7" r="5.9" />
          <circle cx="57.2" cy="35.7" r="5.9" />
        </g>
      </switch>
    </svg>
  </SvgIcon>
);

export default SadFaceIcon;
