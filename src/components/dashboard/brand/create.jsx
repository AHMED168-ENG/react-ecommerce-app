
import React, { useEffect, useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch } from 'antd';
import "../../../scss/dashboard/brand/create.scss";
import { useDispatch, useSelector } from 'react-redux';
import { BrandCreateServer } from '../../../store/reducers/brand/brand_server';
import { reset } from '../../../store/reducers/brand/brand_slice';

function DashboardCreateBrandComponent() {
  const dispatch = useDispatch()
  const errorsValidation = useSelector(state => state.brandReducer.errors)
  const isError = useSelector(state => state.brandReducer.isError)
  const created = useSelector(state => state.brandReducer.created)
  const message = useSelector(state => state.brandReducer.message)
  const [title , setTitle] = useState("")
  const [active , setActive] = useState(true)

  
  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create brand /\/\/\/\/\/\//\/\/\/\/\
  function resetForm() {
    setTitle("")
    setActive(true)
  }

  function createbrand(e) {
    e.preventDefault()
    dispatch(BrandCreateServer({
      title,
      active,
    }))
  }
  useEffect(() => {
    if(isError) {
        window.Toast.fire({
            icon: "error",
            title: message,
        });
        dispatch(reset())
    }

    if(created) {
      window.Toast.fire({
        icon: "success",
        title: message,
      });
      dispatch(reset())
      resetForm()

    }
} , [isError , message , created]);

  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create brand /\/\/\/\/\/\//\/\/\/\/\
  return(
    <div className="create-brand">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Brand"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="title" className='text-capitalize'>title</label>
            <input value={title} onInput={(e) => setTitle(e.target.value)} id='title' type="text" className='form-control' />
            {errorsValidation.title ? <small className="text-danger">{errorsValidation.title[0].msg}</small> : ""}
          </div>
          <div className='d-flex gap-5 mb-4'>
            <div className="input">
              <label className='text-capitalize d-block'>is Active</label>
              <Switch value={active} onChange={(checked) => {
                setActive(checked)
              }} />
              {errorsValidation.name ? <small className="text-danger">{errorsValidation.name[0].msg}</small> : ""}
            </div>
          </div>
          <div className="">
            <button className='btn btn-primary btn-block w-100' onClick={createbrand}>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateBrandComponent;