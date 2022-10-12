import styled from "@emotion/styled"

const Button = styled.button`
	background: var(--dark-grey);
	color: var(--white);
	border-radius:50%;
	width: 3rem;
	height: 3rem;
	${props => props.color && `
		background: ${props.color};
	`}
	${props => isNaN(props.children) && `
		background: var(--primary);
		color: var(--dark-grey);
	`
}
	
`

export default Button
