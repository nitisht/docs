/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import styles from "./styles.module.css";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import { NavHashLink } from "react-router-hash-link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import MobileSidebar from "../MobileSidebar/Layout";
import { useLocation } from "@docusaurus/router";
import NavbarItem from "@theme/NavbarItem";
import Link from "@docusaurus/Link";

const navigation = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "Docs",
    href: "/docs/intro",
  },
  { name: "Blogs", href: "/blog" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
  {
    name: "Github",
    href: "https://github.com/parseablehq/parseable",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const [current, setCurrent] = useState("/#");
  const location = useLocation();

  // console.log(process.env.GOOGLE_ID);

  // useEffect(() => { }, [current]);

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        "navbar",
        "navbar--fixed-top",
        "padding-vert--none",
        "padding-horiz--none"
      )}
    >
      {/* {children} */}
      <Disclosure as="nav" className={styles.navbarContainer}>
        {({ open }) => (
          <>
            <div className={styles.innerContainer}>
              <div className={styles.itemsContainer}>
                <div className={styles.menuButtonContainer}>
                  <div
                    onClick={mobileSidebar.toggle}
                    className={styles.toggleButton}
                  >
                    {open ? (
                      <XIcon className={styles.buttonIcon} aria-hidden="true" />
                    ) : (
                      <MenuIcon
                        className={styles.buttonIcon}
                        aria-hidden="true"
                        // onClick={mobileSidebar.toggle}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.itemsContainer}>
                  <div className={styles.logoContainer}>
                    <a href="/">
                      <img
                        className={styles.logoMob}
                        src={useBaseUrl("img/Component 19 – 1.svg")}
                        alt="Workflow"
                      />
                    </a>
                    <a href="/">
                      <img
                        className={styles.logoWeb}
                        src={useBaseUrl("img/Component 19 – 1.svg")}
                        alt="Workflow"
                      />
                    </a>
                  </div>
                  <div className={styles.linkContainer}>
                    <Link
                      to="/#features"
                      className={`${styles.link} ${
                        current === "/#features"
                          ? styles.active
                          : styles.nonActive
                      }`}
                      onClick={() => setCurrent("/#features")}
                    >
                      <img height="15px" src={useBaseUrl("img/Icon.svg")} />
                      <span className={styles.linkText}>Features</span>
                    </Link>
                    {/* <a
                      href="/docs/intro"
                      target="_blank"
                      className={styles.link}
                    >
                      <PlayIcon className={styles.playIcon} />
                      <span className={styles.linkText}>Docs</span>
                    </a> */}

                    <Link to="/docs/intro" className={styles.link}>
                      <img
                        height={"12px"}
                        src={useBaseUrl("img/Icon awesome-book-open-white.svg")}
                      />
                      <span className={styles.linkText}>Docs</span>
                    </Link>
                    <Link
                      to="/#community"
                      className={`${styles.link} ${
                        current === "#community"
                          ? styles.active
                          : styles.nonActive
                      }`}
                      onClick={() => setCurrent("#community")}
                    >
                      <img
                        src={useBaseUrl("img/Icon ionic-ios-people.svg")}
                        height="12px"
                      />
                      <span className={styles.linkText}>Community</span>
                    </Link>
                    <Link to="/blog" className={styles.link}>
                      <img
                        height={"12px"}
                        src={useBaseUrl("img/Icon awesome-list.svg")}
                      />
                      <span className={styles.linkText}>Blogs</span>
                    </Link>

                    {/* <NavbarItems isNavLink={true} items={navigation} /> */}

                    <Link
                      to="/#contact"
                      // className={styles.link}
                      // activeClassName={styles.active}
                      className={`${styles.link} ${
                        current === "#contact"
                          ? styles.active
                          : styles.nonActive
                      }`}
                      onClick={() => setCurrent("#contact")}
                    >
                      <img
                        height="12px"
                        src={useBaseUrl("img/Icon ionic-ios-mail.svg")}
                      />
                      <span className={styles.linkText}>Contact</span>
                    </Link>
                    <Link
                      to="https://github.com/parseablehq/parseable"
                      target="_blank"
                      className={styles.gitLink}
                    >
                      <span className={styles.gitLogo}>
                        <img
                          height="20px"
                          src={useBaseUrl(
                            "img/Icon awesome-github-alt (1).svg"
                          )}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block  w-full rounded-md"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name === "Demo" ? (
                      <a
                        target={"_blank"}
                        href={item.href}
                        className="h-10 w-full px-3 text-white inline-flex items-center"
                      >
                        {item.name}
                      </a>
                    ) : item.name === "Github" ? (
                      <a
                        target={"_blank"}
                        href={item.href}
                        className="h-10 w-full px-3 text-white inline-flex items-center"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a href={item.href} activeClassName="phoneActive">
                        <span className="h-10 w-full px-3 text-white inline-flex items-center">
                          {item.name}
                        </span>
                      </a>
                    )}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <MobileSidebar />
    </nav>
  );
}
