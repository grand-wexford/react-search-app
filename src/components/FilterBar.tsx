import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchLocales } from '../services/api';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedLocale: string;
  setSelectedLocale: React.Dispatch<React.SetStateAction<string>>;
  onFilterChange: (category: string, locale: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedLocale, setSelectedLocale] = useState('');

  const [sections, setSections] = useState<{ id: string; name: { ru: string } }[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = await fetchCategories();
        setSections((data?.data?.results as { id: string; name: { ru: string } }[]) || []);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };

    fetchSections();
  }, []);
  const [locales, setLocales] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocalesU = async () => {
      try {
        const data = await fetchLocales();

        setLocales((data?.data?.locales as string[]) || []);
      } catch (error) {
        console.error('Error fetching locales:', error);
      }
    };

    fetchLocalesU();
  }, []);

  useEffect(() => {
    onFilterChange(selectedSection, selectedLocale);
  }, [selectedSection, selectedLocale, onFilterChange]);

  return (
    <div className="filter-bar">
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
      >
        <option value="">Разделы</option>
        {sections.map((section) => (
          <option key={section.id} value={section.id}>
            {section.name?.ru}
          </option>
        ))}
      </select>

      <select
        value={selectedLocale}
        onChange={(e) => setSelectedLocale(e.target.value)}
      >
        <option value="">Локали</option>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;