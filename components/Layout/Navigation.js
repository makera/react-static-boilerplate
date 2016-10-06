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
import Link from '../Link';

class Navigation extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <nav className="" ref={node => (this.root = node)}>
        <Link className="" to="/">Home</Link>
        <Link className="" to="/about">About</Link>
      </nav>
    );
  }

}

export default Navigation;
