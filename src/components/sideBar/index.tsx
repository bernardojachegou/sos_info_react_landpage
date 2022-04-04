import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper,
} from './styles';

const Sidebar = ({ isOpen, toggle }: any) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="alert-section" onClick={toggle}>
                        Alertas
                    </SidebarLink>
                    <SidebarLink to="home" onClick={toggle}>
                        Você sabia?
                    </SidebarLink>
                    <SidebarLink to="learn-sms" onClick={toggle}>
                        SMS
                    </SidebarLink>
                    <SidebarLink to="risk-section" onClick={toggle}>
                        Áreas de risco
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Links úteis
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
