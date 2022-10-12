import Button from "../Styles/Button"
import Grid from "../Styles/Grid"
import PreviousResult from "../Styles/PreviousResult"
import Input from "./Input"
import { useReducer, useState } from "react"
import styled from "@emotion/styled"

const initialState = {
	firstValue: "",
	secondValue: "",
	operator: ""
}

export default function Calculator () {
	const [inputValue, setInputValue] = useState("")

	const reducer = (state, action) => {

		if (action.type !== "secondValue") {
			setInputValue("")
		}
		switch (action.type) {
			case "firstValue":
				return { ...state, firstValue: action.payload }
			case "secondValue":
				return { ...state, secondValue: action.payload }
			case "operator":
				return { ...state, operator: action.payload }
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	//TODO: catch input errors
	const handleClick = (e) => {
		const textContent = e.target.textContent
		//check if value is a number
		if (!isNaN(textContent)) {
			setInputValue(inputValue + e.target.textContent)
		} else {
			//check if value is an operator
			switch (textContent) {
				case "C":
					setInputValue("")
					dispatch({ type: "firstValue", payload: "" })
					dispatch({ type: "secondValue", payload: "" })
					dispatch({ type: "operator", payload: "" })
					break
				case ".":
					setInputValue(inputValue + ".")
					break
				case "=":
					dispatch({ type: "secondValue", payload: inputValue })
					const result = eval(state.firstValue + state.operator + inputValue)
					setInputValue(result)
					break
				case "+" :
				case "-" :
				case "*" :
					dispatch({ type: "firstValue", payload: inputValue })
					dispatch({ type: "secondValue", payload: "" })
					dispatch({ type: "operator", payload: textContent })
					break
				default :
					console.error("Unknown operator", e)
			}
		}
	}

	return (<CalculatorStyled>
		<PreviousResult>{`${state.firstValue} ${state.operator} ${state.secondValue}`}</PreviousResult>
		<Input placeholder="0" type="text" inputValue={[inputValue, setInputValue]}/>
		<Grid onClick={handleClick}>
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>+</Button>
			<Button>4</Button>
			<Button>5</Button>
			<Button>6</Button>
			<Button>-</Button>
			<Button>7</Button>
			<Button>8</Button>
			<Button>9</Button>
			<Button>*</Button>
			<Button>0</Button>
			<Button>.</Button>
			<Button>=</Button>
			<Button>C</Button>
		</Grid>
	</CalculatorStyled>)
}

const CalculatorStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.5rem;
	width: min-content;
	`