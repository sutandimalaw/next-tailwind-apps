// ContactInfo.tsx (Molecule)
import React from 'react';
import Paragraph from '../../Atoms/commons/Paragraph';

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph className="font-bold">{phone}</Paragraph>
      <Paragraph className="font-bold">{email}</Paragraph>
    </div>
  );
};

export default ContactInfo;
