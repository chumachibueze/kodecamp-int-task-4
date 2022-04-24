import React from 'react'

const Userprofile = ({userlist}) => {
  return (
    <div className=''>
      <div className="">
        <div className="my-5">
          <div className="row">
              {
                userlist.map((userprofile) => (
                  <div className="col-md-6 col-sm-12" key={userprofile.id}>
                    <div className=' px-5 pt-3 pb-2 mb-5 profile-container'>
                      <h1 className="name-header fw-bolder ps-lg-5 ps-md-5 ps-sm-0"> {userprofile.name}</h1>
                      <p className="user-text pt-2 mb-5 ps-lg-5 ps-md-5 ps-sm-0">I'm a disigner in love with photography, 
                      painting and discovering new worlds and cultures.
                      </p>
                      <div className="info-container ps-lg-5 ps-md-5 ps-sm-0">
                        <h3 className='pb-3'>General Info</h3>
                        <div className="row">

                          <div className="col-lg-4 col-md-4 col-sm-3">
                            <p>Date of Birth </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-8">
                            <p>Aug 25, 1988</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-3">
                            <p>Address </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-8">
                            <p>{userprofile.address.street}, {userprofile.address.suite}, {userprofile.address.city}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-3">
                            <p>E-mail </p>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-9">
                            <p>{userprofile.email}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-3">
                            <p>Phone </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-8">
                            <p>{userprofile.phone}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))
              }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile;