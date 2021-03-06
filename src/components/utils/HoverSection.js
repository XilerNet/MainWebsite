/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import { Link } from "react-router-dom";

class HoverSection extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="hoverSection">
        {this.props.data.map((item) => {
          return !item.route ? (
            <a
              key={this.props.data.indexOf(item)}
              href={item.url}
              alt={`Url for ${item.name}!`}
              target={item.target}
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={this.props.data.indexOf(item)}
              to={item.url}
              alt={`Url for ${item.name}!`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default HoverSection;
