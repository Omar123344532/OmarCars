import { Swiper, SwiperSlide } from 'swiper/react';



import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function Carousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mercedes-Benz_S-Klasse_%28W_140%2C_Facelift%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Hilden_%28cropped%29.jpg/1200px-Mercedes-Benz_S-Klasse_%28W_140%2C_Facelift%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Hilden_%28cropped%29.jpg" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/MH48W8TXScCNvGEbXrX8" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Land-Cruiser-300/8448/1750750759371/front-left-side-47.jpg" alt="" />
                </SwiperSlide>
        
            </Swiper>
        </>
    );
}