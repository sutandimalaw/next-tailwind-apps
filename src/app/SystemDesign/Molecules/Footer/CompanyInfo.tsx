// CompanyInfo.tsx (Molecule)
import React from 'react';
import Paragraph from '../../Atoms/commons/Paragraph';

interface CompanyInfoProps {
  label: string;
  title: string;
  description?: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ label, title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph className="text-sm font-bold">{label}</Paragraph>
      <Paragraph className="text-sm text-gray-500 font-bold">{title}</Paragraph>
      {description && <Paragraph className="text-sm text-gray-500 font-black">{description}</Paragraph>}
    </div>
  );
};

export default CompanyInfo;
