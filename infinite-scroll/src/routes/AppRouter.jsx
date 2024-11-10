import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { InfiniteScrollPage } from '../pages'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<InfiniteScrollPage />} />
			<Route path="/*" element={ <Navigate to='/' />} />
		</Routes>
	)
}