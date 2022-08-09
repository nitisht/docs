/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
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
import MobileSidebar from "../MobileSidebar/Layout"

const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Demo",
    href: "https://demo.parseable.io/",
  },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
  {
    name: "Github",
    href: "https://github.com/parseablehq/parseable",
  },
];

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
                    <img
                      className={styles.logoMob}
                      src={useBaseUrl("img/Component 19 – 1.svg")}
                      alt="Workflow"
                    />
                    <img
                      className={styles.logoWeb}
                      src={useBaseUrl("img/Component 19 – 1.svg")}
                      alt="Workflow"
                    />
                  </div>
                  <div className={styles.linkContainer}>
                    <NavHashLink
                      to="/"
                      className={styles.link}
                      activeClassName={styles.active}
                    >
                      <img
                        height="12px"
                        src={useBaseUrl("img/Icon awesome-home.svg")}
                      />
                      <span className={styles.linkText}>Home</span>
                    </NavHashLink>
                    <a
                      href="https://demo.parseable.io/"
                      target="_blank"
                      className={styles.link}
                    >
                      {/* <span className="flex space-x-3 items-center"> */}
                      <PlayIcon className={styles.playIcon} />
                      <span className={styles.linkText}>Demo</span>
                      {/* </span> */}
                    </a>

                    <NavHashLink
                      to="/#features"
                      className={styles.link}
                      activeClassName={styles.active}
                    >
                      <img
                        height={"12px"}
                        src={useBaseUrl("img/Icon awesome-list.svg")}
                      />
                      <span className={styles.linkText}>Features</span>
                    </NavHashLink>

                    <NavHashLink
                      to="/#community"
                      className={styles.link}
                      activeClassName={styles.active}
                    >
                      <img
                        src={useBaseUrl("img/Icon ionic-ios-people.svg")}
                        height="12px"
                      />
                      <span className={styles.linkText}>Community</span>
                    </NavHashLink>

                    <NavHashLink
                      to="/#contact"
                      className={styles.link}
                      activeClassName={styles.active}
                    >
                      <img
                        height="12px"
                        src={useBaseUrl("img/Icon ionic-ios-mail.svg")}
                      />
                      <span className={styles.linkText}>Contact</span>
                    </NavHashLink>
                    <a
                      href="https://github.com/parseablehq/parseable"
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
                    </a>
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
                      <NavHashLink to={item.href} activeClassName="phoneActive">
                        <span className="h-10 w-full px-3 text-white inline-flex items-center">
                          {item.name}
                        </span>
                      </NavHashLink>
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
