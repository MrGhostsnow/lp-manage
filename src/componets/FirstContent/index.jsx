import { Button } from '../Header/styles';
import {
    ContainerFirstContent,
    SectionText,
    Title,
    Subtitle,
    SectionImages,
    Images,
    Text
} from './styles'

import Introimage from '../../assets/illustration-intro.svg'

function FirstContent() {
    return (
        <ContainerFirstContent>
            <SectionText>
                <Text>
                    <Title>
                        Bring everyone together to build better products.
                    </Title>
                    <Subtitle>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </Subtitle>
                    <Button>
                        Get Started
                    </Button>
                </Text>
            </SectionText>
            <SectionImages>
                <Images src={Introimage} alt='Graficos' />
            </SectionImages>
        </ContainerFirstContent>
    )
}

export default FirstContent;