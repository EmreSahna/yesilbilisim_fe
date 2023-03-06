interface IProps {
    title: string;
}

const TitleSection = ({ title } : IProps) => {
    return (
        <div className="h-auto bg-main-blue flex justify-center py-6 max-small:py-3 flex-col items-center">
            <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] max-small:h-[50px] mb-2 max-small:mb-1" alt="logo" />
            <ul className="my-4 max-small:my-1">
                <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block max-small:w-[8px] max-small:h-[8px]"/>
                <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block max-small:w-[8px] max-small:h-[8px]"/>
                <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block max-small:w-[8px] max-small:h-[8px]"/>
            </ul>
            <h1 className="text-white text-center font-bold text-[28px] max-small:text-[22px]">{title}</h1>
        </div>
    );
};

export default TitleSection;