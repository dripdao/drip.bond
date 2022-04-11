import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import styled from 'styled-components';

function BondModal({children, bond}) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenModal = () => setIsOpen(true);
    const onCloseModal = () => setIsOpen(false);

    return (
        <ModalWrapper>
            <Clickable onClick={onOpenModal}>
                {children}
            </Clickable>
            <Modal 
                open={isOpen} 
                onClose={onCloseModal} 
                center
                classNames={{
                    closeIcon: 'customClose',
                    modal: 'customModal'
                }}
            >
                <ModalHeader>
                    {bond?.name || 'Bond Details'}
                </ModalHeader>
                {bond?.maturity === "POSTDRIP" ? (
                    <Content>
                        Ready to burn
                    </Content>
                ) : (
                    <Content>
                        {bond?.maturity}
                    </Content>
                )}
            </Modal>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
`;

const Clickable = styled.div`
    cursor: pointer;
`;

const Content = styled.div`
    padding-top: 1rem;
`;

const ModalHeader = styled.span`
    font-size: 20px;
`;

export default BondModal;