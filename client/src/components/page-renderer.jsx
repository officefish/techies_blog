import React from 'react'
import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const PageRenderer = () => {    
    const { page } = useParams()
    const Element = lazy(() => import(`../pages/${page}.jsx`))
    return (
        <Suspense fallback={<div className='h-screen'>Loading...</div>}>
          <Element />
        </Suspense>
      )
}
export default PageRenderer