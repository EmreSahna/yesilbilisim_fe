function topnavbar() {
    return (
      <div className="bg-main-gray h-8 w-full max-small:hidden">
        <div className="max-w-[1170px] mx-auto h-full flex items-center justify-between">
            <div className="flex h-full items-center">
                <div className="flex gap-1 mx-2 items-center">
                    <i className="material-icons-round text-main-black text-[20px]">phone</i>
                    <p className="text-main-black font-semibold">+90 534 432 60 01</p>
                </div>
                <div className="flex gap-1 mx-2 items-center">
                    <i className="material-icons-round text-main-black text-[20px]">phone</i>
                    <p className="text-main-black font-semibold">+90 549 828 45 01</p>
                </div>
                <div className="flex gap-1 mx-2 items-center">
                    <i className="material-icons-round text-main-black text-[20px]">send</i>
                    <p className="text-main-black font-semibold">info@yesilbilisim.net</p>
                </div>
            </div>
            <div className="flex h-full gap-4">
                <div className="bg-main-gray-2 w-fit px-4 h-full flex items-center text-main-black font-semibold">
                    <a href="/sss">S.S.S</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default topnavbar;