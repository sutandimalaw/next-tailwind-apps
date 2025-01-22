import React from 'react';
import Navbar from '@/app/SystemDesign/Organism/Navbar';
import Footer from '@/app/SystemDesign/Organism/Footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
