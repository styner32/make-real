'use server'

import { Prisma } from '@prisma/client'
import prisma from './prisma'

export async function uploadLink(shapeId: string, html: string) {
	if (typeof shapeId !== 'string' || !shapeId.startsWith('shape:')) {
		throw new Error('shapeId must be a string starting with shape:')
	}

	if (typeof html !== 'string') {
		throw new Error('html must be a string')
	}

	shapeId = shapeId.replace(/^shape:/, '')
	await prisma.$queryRaw(
		Prisma.sql`INSERT INTO links (shape_id, html) VALUES (${shapeId}, ${html})`
	)
}
