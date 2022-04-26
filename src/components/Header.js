import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const [size, setSize] = useState({
        width: 300,
        height: 300,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const loginHandler = () => {
        menuToggleHandler();
        navigate("/login");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/vaccify-app" className={classes.header__content__logo}>
                    Vaccify
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 1000 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/about-us" onClick={menuToggleHandler}>
                                About Us
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/present" onClick={menuToggleHandler}>
                                Present
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/contact" onClick={menuToggleHandler}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <button onClick={loginHandler}>Login</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;