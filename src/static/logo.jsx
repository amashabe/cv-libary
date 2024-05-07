import React from 'react';
import { Svg, Defs, ClipPath, Rect, G, Path } from 'react-native-svg';

const Logo = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={200} height={76.037} viewBox="0 0 200 76.037" {...props}>
    <Defs>
      <ClipPath id="a">
        <Rect className="a" width={200} height={76.037} />
      </ClipPath>
    </Defs>
    <G transform="translate(0)">
      <G transform="translate(100 38.018)">
        <G className="b" transform="translate(-100 -38.018)">
          <Path className="c" d="M307.953 101a3.353 3.353 0 0 0 3.353 3.353 3.353 3.353 0 0 0-3.353-3.353z" transform="translate(-217.31 -72.056)" />
          <Path className="d" d="M561.862 130.9h-6.276a7.451 7.451 0 0 0-7.422 7.422v12.753a2.78 2.78 0 1 0 5.531 0V138.351a1.891 1.891 0 0 1 1.691-1.891h6.477a2.78 2.78 0 1 0 0-5.56z" transform="translate(-391.064 -93.387)" />
          {/* Add other Path elements here */}
        </G>
      </G>
    </G>
  </Svg>
);

export default Logo;
