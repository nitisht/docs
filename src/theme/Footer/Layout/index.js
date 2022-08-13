/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      id="contact"
      className={clsx("", styles.container, {
        "footer--dark": style === "dark",
      })}
    >
      <div className={clsx("max-w-6xl", styles.innerGrid)}>
        <div className={clsx("", styles.contactContainer)}>
          {" "}
          <div>
            <div className={styles.heading}>Contact Us</div>
            <div className={styles.subHeading}>
              Questions, Queries, or Comments?
            </div>
          </div>
          <form
            action="https://formspree.io/f/mgedgvyv"
            method="POST"
            className={styles.formContainer}
          >
            <div className={styles.inputContainer}>
              <div className={styles.imageContainer}>
                <img
                  src={useBaseUrl("img/Icon feather-user.svg")}
                  className={styles.image}
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className={styles.input}
                placeholder="Full name"
                autoComplete="off"
              />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.imageContainer}>
                <img
                  src={useBaseUrl("img/Icon feather-mail.svg")}
                  className={styles.image}
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className={styles.input}
                placeholder="E-mail"
              />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.textareaImageContainer}>
                <img
                  src={useBaseUrl("img/Icon feather-message-square.svg")}
                  className={styles.image}
                  aria-hidden="true"
                />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={styles.input}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div>
              <button type="submit" className={styles.button}>
                Send
              </button>
            </div>
          </form>
        </div>
        <div className={styles.LinksContainer}>
          <div className={styles.heading}>Find us on Social Media</div>
          <div className={styles.socialContainer}>
            <a href="https://twitter.com/parseableio" target="_blank">
              <img
                src={useBaseUrl("img/Icon awesome-twitter-square.svg")}
                width={"40px"}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/parseable/"
              target="_blank"
              style={{ marginLeft: "12px" }}
            >
              <img
                src={useBaseUrl("img/Icon awesome-linkedin.svg")}
                width={"40px"}
              />
            </a>
          </div>
          <div style={{ marginTop: "80px" }} className={styles.heading}>
            Useful Links
          </div>
          <div className={styles.usefulLinksContainer}>
            <a
              href={"https://demo.parseable.io/"}
              target="_blank"
              className={styles.linkItem}
            >
              <img
                src={useBaseUrl("img/Icon ionic-ios-arrow-forward.svg")}
                className={styles.linkImage}
              />
              <span className={styles.linkText}>Demo</span>
            </a>
            <a
              href={"https://parseable.io/docs"}
              target="_blank"
              className={styles.linkItem}
            >
              <img
                src={useBaseUrl("img/Icon ionic-ios-arrow-forward.svg")}
                className={styles.linkImage}
              />
              <span className={styles.linkText}>Documentation</span>
            </a>
            <a
              href={"https://launchpass.com/parseable"}
              target="_blank"
              className={styles.linkItem}
            >
              <img
                src={useBaseUrl("img/Icon ionic-ios-arrow-forward.svg")}
                className={styles.linkImage}
              />
              <span className={styles.linkText}>Community</span>
            </a>
          </div>
          <div className={styles.copyright}>
            © Copyright by Parseable, Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className=" text--center  text-- ">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div> */}
    </footer>
  );
}
