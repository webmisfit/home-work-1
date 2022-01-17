import React from "react";
import "./styles.css";

function Profile(props) {
  // функциональный подход
  return (
    <div className="profile">
      <h2>
        Привет, <b>{props.name}!</b>
      </h2>
      <p>
        Дата регистрации:{" "}
        {props.date
          .toLocaleDateString("ru", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })
          .slice(0, -3)}
      </p>
    </div>
  );
}

class Profile2 extends React.Component {
  render() {
    return (
      <div className="profile">
        <h2>
          Привет, <b>{this.props.name}!</b>
        </h2>
        <p>
          Дата регистрации:{" "}
          {this.props.date
            .toLocaleDateString("ru", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })
            .slice(0, -3)}
        </p>
      </div>
    );
  }
}

export { Profile, Profile2 };
