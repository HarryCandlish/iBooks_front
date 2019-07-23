import React, { Component } from "react";

import homeStyles from "../../modules/home.module.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img className={homeStyles.image} alt="godot" src="godot.jpg" />
        </div>
        <div>
          <ul className={homeStyles.container}>
            <a className={homeStyles.flexbox} href="">
              <li>
                <img
                  className={homeStyles.imageProfile}
                  alt="profile"
                  src="profile.png"
                />

                <h3 className={homeStyles.content}>PROFILE</h3>
                <p className={homeStyles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </a>
            <a className={homeStyles.flexbox} href="/#/books">
              <li>
                <img
                  className={homeStyles.imageBook}
                  alt="book"
                  src="book.png"
                />
                <h3 className={homeStyles.content}>BOOKS</h3>
                <p className={homeStyles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </a>
            <a className={homeStyles.flexbox} href="">
              <li>
                <img
                  className={homeStyles.imagePen}
                  alt="pen"
                  src="pencil.png"
                />
                <h3 className={homeStyles.content}>REVIEWS</h3>
                <p className={homeStyles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>{" "}
            </a>
            <a className={homeStyles.flexbox} href="">
              <li>
                <img
                  className={homeStyles.imageGrowth}
                  alt="growth"
                  src="growth.png"
                />
                <h3 className={homeStyles.content}>MONITORING</h3>
                <p className={homeStyles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
