import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './AppSearch.css'


export default function AppSearch() {
  return (
    <div>
      <h1 className=''>
        <span>W</span>
        <span>o</span>
        <span>o</span>
        <span>g</span>
        <span>l</span>
        <span>e</span>
      </h1>
      <form action="https://www.google.com/search" method='GET'>
        <div className="mx-auto mt-20 search-bar accordion-bodyinput-group mb-3">
          <input name='q' type="text" className="form-control" placeholder="Google search" aria-describedby="button-addon2"/>
        </div>
      </form>
    </div>
  )
}
