import { useState, useEffect } from 'react';
import { Button } from '../Header/styles';
import {
    ContainerComments,
    Title,
    SectionComments,
    Card,
    Picture,
    Name,
    Comment
} from './styles'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import Ali from '../../assets/avatar-ali.png'
import Anisha from '../../assets/avatar-anisha.png'
import Richard from '../../assets/avatar-richard.png'

function Comments() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const mobile = (width <= 768);
    return (
        <ContainerComments>
            <Title>
                What they've said
            </Title>
            <SectionComments>
                {!mobile ? (
                    <>
                        <Card>
                            <Picture src={Anisha} alt='Avatar' />
                            <Name>
                                Anisha Li
                            </Name>
                            <Comment>
                                "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                keeps everyone motivated."
                            </Comment>
                        </Card>
                        <Card>
                            <Picture src={Ali} alt='Avatar' />
                            <Name>
                                Ali Bravo
                            </Name>
                            <Comment>
                                "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                keeps everyone motivated."
                            </Comment>
                        </Card>
                        <Card>
                            <Picture src={Richard} alt='Avatar' />
                            <Name>
                                Richard Watts
                            </Name>
                            <Comment>
                                "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                keeps everyone motivated."
                            </Comment>
                        </Card>
                    </>
                ) :
                    <Swiper
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        navigation>
                        <SwiperSlide>
                            <Card>
                                <Picture src={Anisha} alt='Avatar' />
                                <Name>
                                    Anisha Li
                                </Name>
                                <Comment>
                                    "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                    keeps everyone motivated."
                                </Comment>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Picture src={Ali} alt='Avatar' />
                                <Name>
                                    Ali Bravo
                                </Name>
                                <Comment>
                                    "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                    keeps everyone motivated."
                                </Comment>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Picture src={Richard} alt='Avatar' />
                                <Name>
                                    Richard Watts
                                </Name>
                                <Comment>
                                    "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times
                                    keeps everyone motivated."
                                </Comment>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                }
            </SectionComments>
            <Button>
                Get Started
            </Button>
        </ContainerComments>
    )
}

export default Comments;