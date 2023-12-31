import React from 'react'

function Welcome({formData}) {
  return (
    <>
    <h4 className="text-center mt-2">
        Registration was successful for...
    </h4>
    <div className="card mt-4">
        <h6 className="card-header bg-dark text-white">
            {formData.firstName}
            {formData.lastName}
            </h6>
        <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    FirstName:<span className='h6 text-success'>{formData.firstName}</span>
                </li>
                <li className="list-group-item">
                     Email:<span className='h6 text-success'>{formData.email}</span>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Welcome