import styled from "@emotion/styled"

export default function Input (props) {
	const [inputValue, setInputValue] = props.inputValue

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	return (<InputStyled step="0.1" {...props} value={inputValue} onChange={handleInputChange}/>)
}

const InputStyled = styled.input`
	width: 100%;
	pointer-events: none;
	text-align: right;
	border: none;
	background: transparent;
	color: var(--white);
	font-size: 2rem;
	`