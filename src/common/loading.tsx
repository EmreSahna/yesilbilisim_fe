const Loading = () => {
    return (
        <div className="absolute z-[1001] bg-main-blue transition-opacity">
            <div className="fixed flex justify-center items-center w-full h-full top-0 left-0 bg-main-blue gap-[15px]">
                <div className="w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Loading;