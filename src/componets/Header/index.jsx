import { useState, useEffect } from 'react';
import {
    ContainerHeader,
    SectionLogo,
    Logo,
    SectionPaths,
    ListPaths,
    Path,
    SectionButton,
    Button,
    SectionMenu,
    SectionMobile,
    Overlay,
    SectionPathsMobile,
    ListPathsMobile,
    PathMobile,
    SectionHeader,
    Icon
} from './styles'

import Logoicon from '../../assets/logo.svg'
import Menu from '../../assets/icon-hamburger.svg'
import Close from '../../assets/icon-close.svg'

function Header() {

    const [showNavBar, setShowNavBar] = useState(false)
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
        <ContainerHeader>
            {!mobile ? (
                <>
                    <SectionLogo>
                        <Logo src={Logoicon} alt='Logo' />
                    </SectionLogo>
                    <SectionPaths>
                        <ListPaths>
                            <Path>
                                Pricing
                            </Path>
                            <Path>
                                Product
                            </Path>
                            <Path>
                                About Us
                            </Path>
                            <Path>
                                Careers
                            </Path>
                            <Path>
                                Community
                            </Path>
                        </ListPaths>
                    </SectionPaths>
                    <SectionButton>
                        <Button>
                            Get Started
                        </Button>
                    </SectionButton>
                </>
            ) : (
                <>
                    {!showNavBar ? (
                        <SectionMobile>
                            <SectionLogo>
                                <Logo src={Logoicon} alt='Logo' />
                            </SectionLogo>
                            <SectionMenu>
                                <Logo onClick={() => setShowNavBar(true)} src={Menu} alt='menu' />
                            </SectionMenu>
                        </SectionMobile>
                    ) : (
                        <Overlay>
                            <SectionHeader>
                                <SectionLogo>
                                    <Logo src={Logoicon} alt='Logo' />
                                </SectionLogo>
                                <Icon onClick={() => setShowNavBar(false)} src={Close} alt='' />
                            </SectionHeader>
                            <SectionPathsMobile>
                                <ListPathsMobile>
                                    <PathMobile>
                                        Pricing
                                    </PathMobile>
                                    <PathMobile>
                                        Product
                                    </PathMobile>
                                    <PathMobile>
                                        About Us
                                    </PathMobile>
                                    <PathMobile>
                                        Careers
                                    </PathMobile>
                                    <PathMobile>
                                        Community
                                    </PathMobile>
                                </ListPathsMobile>
                            </SectionPathsMobile>
                        </Overlay>
                    )}
                </>
            )}
        </ContainerHeader>
    )
}

export default Header;