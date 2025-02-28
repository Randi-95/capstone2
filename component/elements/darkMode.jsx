import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "enabled";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-white">Light</span>
            <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="toggle-checkbox hidden"
                id="dark-toggle"
            />
            <label
                htmlFor="dark-toggle"
                className="cursor-pointer w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center p-1 transition duration-300"
            >
                <div
                    className={`w-5 h-5 bg-white dark:bg-black rounded-full transform duration-300 ${
                        darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                />
            </label>
            <span className="text-gray-600 dark:text-white">Dark</span>
        </div>
    );
}
