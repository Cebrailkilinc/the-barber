import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const users = [
    {
        name: "Ali Veli",
        photo: "https://picsum.photos/seed/ali_veli/200",
        comment: "Berber çok ilgiliydi ve saç kesiminden memnun kaldım. Ortam temiz ve hijyenikti. Tekrar geleceğim."
    },
    {
        name: "Ayşe Yılmaz",
        photo: "https://picsum.photos/seed/ayse_yilmaz/200",
        comment: "Saç kesimi ve sakal tıraşı mükemmeldi. Berber oldukça profesyoneldi. Ortam çok rahattı. Kesinlikle tavsiye ederim."
    },
    {
        name: "Mehmet Öz",
        photo: "https://picsum.photos/seed/mehmet_oz/200",
        comment: "Berberin el becerisi harika. Saç kesimi tam istediğim gibi oldu. Hijyen kurallarına uygun bir mekan."
    },
    {
        name: "Fatma Kaya",
        photo: "https://picsum.photos/seed/fatma_kaya/200",
        comment: "Profesyonel bir hizmet aldım. Saç kesimi çok güzel oldu. Berber oldukça kibar ve dikkatliydi."
    },
    {
        name: "Emre Demir",
        photo: "https://picsum.photos/seed/emre_demir/200",
        comment: "Berber çok yetenekli ve hızlı. Saç ve sakal tıraşı istediğim gibiydi. Mekan çok temiz ve düzenli."
    },
    {
        name: "Zeynep Çelik",
        photo: "https://picsum.photos/seed/zeynep_celik/200",
        comment: "Hizmet çok kaliteli. Berber gayet profesyonel. Saç kesimi mükemmel oldu. Temiz ve düzenli bir ortam."
    },
    {
        name: "Canan Toprak",
        photo: "https://picsum.photos/seed/canan_toprak/200",
        comment: "Saç kesimi için geldim ve çok memnun kaldım. Berber çok güler yüzlü ve profesyoneldi. Ortam çok hijyenik."
    },
    {
        name: "Ahmet Ak",
        photo: "https://picsum.photos/seed/ahmet_ak/200",
        comment: "Mükemmel bir berber. Saç kesiminden çok memnun kaldım. Ortam rahat ve hijyenik. Kesinlikle tekrar geleceğim."
    }
];

const Feedback = () => {
    return (
        <div className='bg-[#1F1F1F] py-20'>
            <div className='max-w-[1280px] mx-auto flex flex-col items-center gap-10'>
                <h1 className='text-[#493c28] text-4xl'>Customer Feedback</h1>
                <div>
                   
                </div>
            </div>
        </div>
    )
}

export default Feedback;
