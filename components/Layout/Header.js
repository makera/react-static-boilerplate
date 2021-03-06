/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.sass';

class Header extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <header className="" ref={node => (this.root = node)}>
        <div className="">
          <Link className="" to="/">
            React Static Boilerplate
          </Link>
          <div className=""></div>
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
