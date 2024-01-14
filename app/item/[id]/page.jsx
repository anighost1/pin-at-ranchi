"use client"

import React, { useEffect, useState } from 'react'
import configServ from '@/services/config'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import {
    Box,
    Stack,
} from '@mui/material';



export default function page({ params }) {

    const [imgData, setImgData] = useState({})
    const itemId = params.id

    const fetchItem = async () => {
        try {
            const result = await configServ.getItemByIdWithImg(itemId)
            console.log(result)
            setImgData(result)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (itemId) {
            fetchItem()
        }
    }, [])

    return (
        <Stack
            direction={{
                xs: 'column',
                sm: 'row'
            }}
            justifyContent={'space-between'}
        // alignItems={'center'}
        // flexGrow={1}
        // border={2}
        >
            <Box
                width={{
                    xs: '100%',
                    sm: '60%'
                }}
                height={'100%'}
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    style={{
                        height: '80vh'
                    }}
                >
                    {imgData?.images?.map((item) => (
                        <SwiperSlide key={item._id}>
                            <Box >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    objectFit='contain'
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box
                className={`divider divider-horizontal`}
            />
            <Stack
                width={{
                    xs: '100%',
                    sm: '40%'
                }}
                sx={{
                    p: 2,
                    // height:'30rem'
                }}
            >
                <h1 className='prose'
                    style={{
                        fontWeight: 600,
                        fontSize: '2em'
                    }}
                >
                    {imgData.name || "Loading..."}
                </h1>
                <h1 className='prose'
                    style={{
                        fontWeight: 300,
                        fontSize: '1em'
                    }}
                >
                    {`
                    ${imgData.addressLine1 || ""} 
                    ${imgData.addressLine2 ? ',' : ''}${imgData.addressLine2 || ""} 
                    ${imgData.city ? ',' : ''}${imgData.city || ""}
                    ${imgData.state ? ',' : ''}${imgData.state || ""}
                    ${imgData.pin ? ',' : ''}${imgData.pin || ""}
                    `}
                </h1>
            </Stack>
        </Stack>
    )
}
