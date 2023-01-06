export default function sectionis(){
    return(
        <div className="my-8">
            <h1 className="font-bold text-[36px] justify-center flex">İş Ortaklarımız</h1>
            <div className="flex items-center justify-center mt-4">
                <ul className="flex items-center">
                    <li className="mx-6">
                        <img src={require('../assets/companies/cisco.png')} className='h-[50px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/trendmicro.png')} className='h-[65px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/microsoft.png')} className='h-[65px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/mcafee.png')} className='h-[20px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/lenovo.png')} className='h-[20px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/huawei.png')} className='h-[50px] w-auto' alt="" />
                    </li>
                    <li className="mx-6">
                        <img src={require('../assets/companies/ibm.png')} className='h-[25px] w-auto' alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}