import React, { useEffect } from "react";
import { Select, Option } from "@material-tailwind/react"; // Replace with the actual UI library you are using
import { useTranslation } from "react-i18next";

export default function Switcher() {
  const { i18n } = useTranslation();

  if (!i18n) {
    console.error("i18n is not defined");
    return null;
  }

  const lang = localStorage.getItem("language");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("language", "en");
    }
  }, []);

  const handleLanguageChange = (value) => {
    const selectedLanguage = value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    console.log(value);
  };

  return (
    <div className="select">
      <Select
        onChange={(value) => handleLanguageChange(value)}
        value={lang}
        className="flex column"
        label={"Select Language"}
      >
        <Option className="flex" value="uz">
          <img src="https://alchiroq.uz/_nuxt/img/flag-uz.7f05fea.svg" alt="" />
          UZ
        </Option>
        <Option className="flex" value="en">
          <img src="https://alchiroq.uz/_nuxt/img/flag-en.0c98644.svg" alt="" />
          EN
        </Option>
        <Option className="flex" value="ru">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzI1OV8xMzUxIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij4KPHBhdGggZD0iTTEyIDI0QzE4LjYyNzQgMjQgMjQgMTguNjI3NCAyNCAxMkMyNCA1LjM3MjU4IDE4LjYyNzQgMCAxMiAwQzUuMzcyNTggMCAwIDUuMzcyNTggMCAxMkMwIDE4LjYyNzQgNS4zNzI1OCAyNCAxMiAyNFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8yNTlfMTM1MSkiPgo8cGF0aCBkPSJNMCA3LjgyODEyTDExLjg5NjkgNi45MjM0M0wyNCA3LjgyODEyVjE2LjE3MTlMMTIuMDUxNiAxNy42ODU5TDAgMTYuMTcxOVY3LjgyODEyWiIgZmlsbD0iIzAwNTJCNCIvPgo8cGF0aCBkPSJNMCAwSDI0VjcuODI4MTJIMFYwWiIgZmlsbD0iI0VFRUVFRSIvPgo8cGF0aCBkPSJNMCAxNi4xNzE5SDI0VjI0SDBWMTYuMTcxOVoiIGZpbGw9IiNEODAwMjciLz4KPC9nPgo8L3N2Zz4K"
            alt=""
          />
          RU{" "}
        </Option>
      </Select>
    </div>
  );
}
