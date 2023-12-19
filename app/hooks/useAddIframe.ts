import { createShapeId, useEditor } from '@tldraw/tldraw'

import { html as beautifyHtml } from 'js-beautify'
import { useCallback } from 'react'
import { PreviewShape } from '../PreviewShape/PreviewShape'

export function useAddIframe() {
	const editor = useEditor()

	return useCallback(
		async (previewURL: string) => {
			const newShapeId = createShapeId()
			// previewURL = 'https://nine-chronicles.com/'
			previewURL = 'http://localhost:3000/login?id=' + newShapeId // This can be redirected to login page if the page required login

			try {
				const res = await fetch(previewURL, { method: 'GET' })
				let htmlContent = await res.text()

				// Format the HTML content
				htmlContent = beautifyHtml(htmlContent, { indent_size: 2 })
				console.log('html', htmlContent)

				editor.createShape<PreviewShape>({
					id: newShapeId,
					type: 'preview',
					x: 256,
					y: 256,
					props: { html: htmlContent, src: previewURL },
				})
			} catch (e: any) {
				console.error(e)
			}
		},
		[editor]
	)
}
