import { useState } from 'react'
import { useAddIframe } from '../hooks/useAddIframe'
import { useMakeReal } from '../hooks/useMakeReal'

export function ExportButton() {
	const makeReal = useMakeReal()
	const addIframe = useAddIframe()
	const [inputValue, setInputValue] = useState('')

	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<button
				onClick={makeReal}
				className="p-2"
				style={{ cursor: 'pointer', zIndex: 100000, pointerEvents: 'all' }}
			>
				<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Make Real
				</div>
			</button>

			<input
				type="text"
				value={inputValue}
				style={{
					padding: '10px',
					margin: '10px 0',
					border: '1px solid #ccc',
					borderRadius: '4px',
					width: '200px',
					zIndex: 100001,
				}}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			<button
				onClick={() => addIframe(inputValue)}
				className="p-2"
				style={{ cursor: 'pointer', zIndex: 100000, pointerEvents: 'all' }}
			>
				<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Add Iframe
				</div>
			</button>
		</div>
	)
}
