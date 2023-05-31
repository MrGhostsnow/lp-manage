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

import Ali from '../../assets/avatar-ali.png'
import Anisha from '../../assets/avatar-anisha.png'
import Richard from '../../assets/avatar-richard.png'

function Comments() {
    return (
        <ContainerComments>
            <Title>
                What they've said
            </Title>
            <SectionComments>
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
            </SectionComments>
            <Button>
                Get Started
            </Button>
        </ContainerComments>
    )
}

export default Comments;