import React from 'react'

function Container({children}) {
  return (
    <section className="card" style={{ width: "50%"}}>
        <div className="card-body">
            {children}
        </div>
    </section>
  )
}

export default Container;