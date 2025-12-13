import background from '@/assets/background1.png'
import pticka from '@/assets/pticka.svg'
import daftar from '@/assets/nopybook.svg'
import percentage from '@/assets/percentage.svg'
import gruz from '@/assets/gruz.svg'
import { Button } from './ui/button'

export const KatalogFirtsPage = () => {
    return (
        <div
            className="w-full h-[756px] bg-cover bg-center bg-[#1E2122] px-[90px] pt-11 mb-[100px]"
            style={{ backgroundImage: `url(${background})` }}
        >   
            <div className='container mx-auto'>
                <h1 className='pb-[15px]  font-bold text-4xl text-white mont'>
                    Интернет магазин сертифицированных
                </h1>

                <p className='pb-[30px] text-white font-medium text-4xl mont'>
                    златоустовских ножей
                </p>

                <p className='pb-[60px] font-medium text-xl text-white leading-[26px]'>
                    <b>Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине</b>  <br />
                    представлен наиболее широкий выбор Златоустовских ножей от Златоустовских <br />
                    Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
                </p>

                <Button className="w-[228px] h-[50px] mont" variant={'website'}>
                    Подробнее
                </Button>
                <div className="flex items-center gap-4 mt-6">
                    <div className="w-3 h-3 bg-[#E1A22F] rounded-full"></div>

                    <div className="flex items-center gap-3">
                        <span className="w-6 h-0.5 bg-white/70 block"></span>
                        <span className="w-6 h-0.5 bg-white/70 block"></span>
                        <span className="w-6 h-0.5 bg-white/70 block"></span>
                    </div>

                    <div className="flex items-end text-[20px] font-semibold">
                        <span className="text-[#E1A22F] mont">01</span>
                        <span className="text-white mont">/4</span>
                    </div>
                </div>
            </div>
            <div className='pt-[122px] flex justify-center items-center gap-[60px]'>
                <div className="w-[285px] h-[145px] rounded-md flex flex-col items-center justify-center text-center px-3">
                    <img
                        src={pticka}
                        alt=""
                        className=" mb-3"
                    />
                    <p className=" font-semibold text-xl leading-8 tracking-[0%] text-center mont text-white">
                        Гарантия 100% возврата <br />
                        денежных средств
                    </p>
                </div>
                <div className=" rounded-md flex flex-col items-center justify-center text-center px-3">
                    <img
                        src={gruz}
                        alt=""
                        className=" mb-3"
                    />
                    <p className=" font-semibold text-xl leading-8 tracking-[0%] text-center mont text-white">
                        Доставка по России, <br />
                        Казахстану и Белоруссии
                    </p>
                </div>
                <div className="rounded-md flex flex-col items-center justify-center text-center px-3">
                    <img
                        src={daftar}
                        alt=""
                        className=" mb-3"
                    />
                    <p className=" font-semibold text-xl leading-8 tracking-[0%] text-center mont text-white">
                        Возможность оформление <br />
                        заказа без регистрации.
                    </p>
                </div>
                <div className="rounded-md flex flex-col items-center justify-center text-center px-3">
                    <img
                        src={percentage}
                        alt=""
                        className=" mb-3"
                    />
                    <p className=" font-semibold text-xl leading-8 tracking-[0%] text-center mont text-white">
                        Скидки постоянным <br />
                        покупателям.
                    </p>
                </div>
            </div>
        </div>
    )
}
