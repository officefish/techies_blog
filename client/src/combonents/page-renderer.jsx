import React from 'react'
import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const PageRenderer = () => {    
    const { page } = useParams()
    const Element = lazy(() => import(`../pages/${page}`))
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <Element />
        </Suspense>
      )
}
export default PageRenderer