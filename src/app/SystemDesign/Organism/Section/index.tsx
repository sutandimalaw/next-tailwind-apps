import React from 'react';

interface SectionContentProps {
    hero: React.ReactNode;
    featuredList: React.ReactNode;
    sliderList: React.ReactNode;
    featuredItemList: React.ReactNode;
    featuredItemCheckList: React.ReactNode;
}

const Section: React.FC<SectionContentProps> = ({
    hero,
    featuredList,
    sliderList,
    featuredItemList,
    featuredItemCheckList,
}) => {
    return (
        <div className="relative z-10 container max-w-7xl mx-auto flex flex-col">
            <div className="lg:flex lg:flex-row justify-between items-center mb-[30px]">
                <div className="flex flex-1 flex-col">
                    {hero}
                    <div className="hidden lg:block mt-8">{featuredList}</div>
                </div>
                <div className="flex flex-1 flex-col mt-8 lg:mt-0">
                    {sliderList}
                    <div className="block lg:hidden">{featuredItemCheckList}</div>
                </div>
            </div>
            <div className="hidden lg:block flex flex-col lg:flex-row mt-[30px]">{featuredItemList}</div>
        </div>
    );
};

export default Section;
