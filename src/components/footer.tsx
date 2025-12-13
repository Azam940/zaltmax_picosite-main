import tel from '@/assets/tel.svg'
import { ChevronRight, Clock3, Mail, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import fecebook from '@/assets/fecebook.svg'
import telefon from '@/assets/telefon.svg'
import telegram from '@/assets/telegram 4.svg'
import watsapp from '@/assets/watsapp.svg'

const Footer = () => {
  return (
    <div className="w-full text-white bg-[#141414] mt-20">

      <div className="w-full bg-linear-to-br from-[#160c0c] to-[#341111] text-center py-[60px] px-4">
        <h1 className="mont font-bold text-2xl sm:text-3xl lg:text-4xl text-[#E8AA31]">
          Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
        </h1>

        <p className="font-medium mt-6 text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 max-w-[1200px] mx-auto px-2">
         Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.
        </p>
      </div>

      <div className="pt-[60px] pb-10 w-full max-w-[1440px] mx-auto px-4">

        <div className="
      grid 
      xs:grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-4 
      gap-10 
      justify-between text-white
    ">
          {/* COLUMN 1 */}
          <ul>
            <p className="pb-4 font-semibold text-lg">ИНФОРМАЦИЯ</p>
            <li className="pb-3">Златоустовские ножи<br />в Москве и области</li>
            <li className="pb-3">Ножевые стали</li>
            <li className="pb-3">О нас</li>
            <li className="pb-3">Условия оплаты и доставки</li>
            <li className="pb-3">Политика конфиденциальности</li>
          </ul>

          {/* COLUMN 2 */}
          <ul>
            <p className="pb-4 font-semibold text-lg">СЛУЖБА ПОДДЕРЖКИ</p>
            <li className="pb-3">Контактная информация</li>
            <li className="pb-3">Возврат товара</li>
            <li className="pb-3">Карта сайта</li>
          </ul>

          {/* COLUMN 3 */}
          <ul>
            <p className="pb-4 font-semibold text-lg">ДОПОЛНИТЕЛЬНО</p>
            <li className="pb-3">Подарочные сертификаты</li>
            <li className="pb-3">Партнеры</li>
            <li className="pb-3">Товары со скидкой</li>
          </ul>

          {/* COLUMN 4 */}
          <ul>
            <p className="pb-4 font-semibold text-lg">ЛИЧНЫЙ КАБИНЕТ</p>
            <li className="pb-3">Личный кабинет</li>
            <li className="pb-3">История заказов</li>
            <li className="pb-3">Мои закладки</li>
            <li className="pb-3">Рассылка новостей</li>
          </ul>
        </div>

        <hr className="border-white/20 my-8" />

        {/* LOWER BLOCK */}
        <div
          className="
      grid 
      xs:grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-4 
      gap-10
      "
        >
          {/* CONTACTS */}
          <div>
            <p className="pb-4 font-semibold">КОНТАКТЫ</p>

            <a className="flex gap-3 pb-3" href="tel:+88007774967">
              <img className="w-6" src={tel} />
              <span>8 (800) 777-49-67</span>
            </a>

            <div className="flex gap-3 pb-3">
              <Clock3 />
              <span>Пн-Пт<br />7:00 - 16:00 (МСК)</span>
            </div>

            <div className="flex gap-3 pb-3">
              <MapPin />
              <span>Златоуст,<br />ул. Шоссейная,<br />д. 1, офис «6Б»</span>
            </div>

            <div className="flex gap-3 pb-6">
              <Mail />
              <span>info@zlatmax.ru</span>
            </div>

            <div className="flex gap-4">
              <img src={fecebook} />
              <img src={telefon} />
              <img src={telegram} />
              <img src={watsapp} />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <p className="pb-4 font-semibold">ПОЛЕЗНЫЕ ССЫЛКИ</p>
            <a>Способы оплаты и доставки</a>
          </div>

          {/* GUARANTEE */}
          <div>
            <p className="pb-4 font-semibold">НАША ГАРАНТИЯ</p>
            <p>
              Недовольны покупкой? Вы можете вернуть её в течение 30 дней согласно{' '}
              <span className="text-[#E8AA31]">нашим правилам</span>.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <p className="pb-4 font-semibold">НОВОСТНАЯ РАССЫЛКА</p>
            <p className="pb-4">Подпишитесь прямо сейчас!</p>

            <div className="flex">
              <input
                placeholder="example@gmail.com"
                className="border rounded-l-xl w-full h-[50px] pl-4 text-black"
              />
              <Button className="rounded-r-xl w-[50px] h-[50px] bg-[#E8AA31]">
                <ChevronRight color="white" />
              </Button>
            </div>

            <p className="pt-4 text-sm">
              Я прочитал Условия соглашения и согласен с условиями
            </p>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="text-sm flex xs:flex-col lg:flex-row justify-between px-4 pb-10 gap-6">
          <p>
            Все материалы на сайте носят справочный характер... <br />
            При копировании материалов ссылка на сайт обязательна!
          </p>
          <p>Златоустовские ножи www.zlatmax.ru ©</p>
        </div>
      </div>
    </div>


  )
}

export default Footer
