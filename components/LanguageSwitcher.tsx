'use client';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(`/${locale}${pathname}`);
  };
  return (
    <div className="fixed top-2 right-2 z-50">
      <select onChange={handleLocaleChange} defaultValue="en" className="border rounded px-2 py-1">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
} 