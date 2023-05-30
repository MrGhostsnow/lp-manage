import {
    ContainerHeader,
    SectionLogo,
    Logo,
    SectionPaths,
    ListPaths,
    Path,
    SectionButton,
    Button
} from './styles'

import Logoicon from '../../assets/logo.svg'

function Header() {
    return (
        <ContainerHeader>
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
        </ContainerHeader>
    )
}

export default Header;