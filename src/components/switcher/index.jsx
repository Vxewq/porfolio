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
    <Select
      defaultValue={localStorage.getItem('language')}
      label="Select Language"
      onChange={(value) => handleLanguageChange(value)}
    >
      <Option value="en">EN</Option>
      <Option value="uz">UZ</Option>
      <Option value="ru">RU</Option>
    </Select>
  );
}
