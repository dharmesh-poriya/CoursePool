'use client';

import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher: FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log("ThemeSwitcher component mounted");
        setMounted(true);
    }, []);
    if (!mounted) {
        console.log("ThemeSwitcher component not yet mounted");
        return null;
    }
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    console.log("Current theme:", theme);

    return (
        <div className="flex items-center justify-center mx-4">
            {theme === "light" ? (
                <BiMoon className="cursor-pointer" fill="black" size={25} onClick={toggleTheme} />
            ) : (
                <BiSun className="cursor-pointer" size={25} onClick={toggleTheme} />
            )}
        </div>
    );
};
