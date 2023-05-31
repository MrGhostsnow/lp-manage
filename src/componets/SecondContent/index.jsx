import {
    ContainerSecondContent,
    SectionFirstText,
    Title,
    Subtitle,
    SectionSecondText,
    ListOption,
    Label,
    TitleSection,
    Number,
    Text,
    ContainerText
} from './styles'

function SecondContent() {
    return (
        <ContainerSecondContent>
            <SectionFirstText>
                <ContainerText>
                    <Title>
                        Whats's different about Manage?
                    </Title>
                    <Subtitle>
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                    </Subtitle>
                </ContainerText>
            </SectionFirstText>
            <SectionSecondText>
                <ListOption>

                    <Number>
                        01
                    </Number>
                    <Label>
                        <TitleSection>
                            Track company-wide progress
                        </TitleSection>

                        <Text>
                            See how you day-to-day tasks fit into the wider vision.
                            Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of
                            the bigger picture again.
                        </Text>
                    </Label>
                </ListOption>
                <ListOption>

                    <Number>
                        02
                    </Number>
                    <Label>
                        <TitleSection>
                            Advanced built-in reports
                        </TitleSection>

                        <Text>
                            Set internal delivery estimates and track progress toward
                            company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.
                        </Text>
                    </Label>
                </ListOption>
                <ListOption>

                    <Number>
                        03
                    </Number>
                    <Label>
                        <TitleSection>
                            Everything you need in one place
                        </TitleSection>

                        <Text>
                            Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers all-in-one teams
                            productivity solution.
                        </Text>
                    </Label>
                </ListOption>
            </SectionSecondText>
        </ContainerSecondContent>
    )
}

export default SecondContent;