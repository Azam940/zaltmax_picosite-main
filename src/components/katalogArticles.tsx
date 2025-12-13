import Rectangle42 from '@/assets/Rectangle 42.svg'
import Rectangle43 from '@/assets/Rectangle 43.svg'
import Rectangle44 from '@/assets/Rectangle 44.svg'
import Rectangle45 from '@/assets/Rectangle 45.svg'

const data = [
    { id: 1, img: Rectangle42, title: 'Все о ножах: как правильно выбрать', data: '24.07.2019' },
    { id: 2, img: Rectangle43, title: 'Как правильно выбрать фонарь', data: '24.07.2019' },
    { id: 3, img: Rectangle44, title: 'Кухонные ножи для хозяек', data: '24.07.2019' },
    { id: 4, img: Rectangle45, title: 'Кухонные ножи для хозяек', data: '24.07.2019' },
];

export default function KatalogArticles() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <h1 className="font-bold text-3xl tracking-[5%] mont pb-[30px] pl-4 md:pl-[95px]">
                Наши статьи
            </h1>

            <div
                className="
                    grid 
                    gap-6
                    pl-4 md:pl-[95px]
                    xl:grid-cols-4    
                    lg2:grid-cols-3   
                    md:grid-cols-2    
                    sm:grid-cols-1    
                    xs:grid-cols-1 items-center  
                "
            >
                {data.map((item) => (
                    <div key={item.id} className="bg-white shadow-2xl w-[275px] rounded-lg">
                        <img src={item.img} className="w-full rounded-t-lg" />
                        <p className="font-semibold text-xl mont pl-[27px] pt-5">
                            {item.title}
                        </p>
                        <p className="pt-3 pl-7 font-medium text-base leading-[34px] text-[#ABABAB] mont">
                            {item.data}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
