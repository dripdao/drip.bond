import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa"

function Dropdown({ value, setValue }) {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleDropdown = () => setIsOpen(!isOpen);

    const setDropdownValue = (e) => {
        console.log(value, setValue, e)
        setValue(e.target.innerText);
        setTimeout(() => {
            setIsOpen(false);
        }, 100);
    }

    const list = ["BTC", "ETH", "DRIP"];

    return (
        <Wrapper>
            <Button onClick={onToggleDropdown}>
                <div>
                    <span>{value}</span>
                </div>
                <FaChevronDown />
            </Button>

            {isOpen && (
                <DropdownWrapper>
                    {list.map((el, i) => (
                        <DropdownItem 
                            key={i}
                            onClick={setDropdownValue}
                        > 
                            {el}
                        </DropdownItem>
                    ))}
                </DropdownWrapper>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 1rem;
`;

const Button = styled.div`
    cursor: pointer;
    border: 1px solid white;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`;

const DropdownWrapper = styled.div`
    border: 1px solid white;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 120px;
`;

const DropdownItem = styled.div`
    cursor: pointer;
`;

export default Dropdown;