
import React, { useEffect, useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch } from 'antd';
import "../../../scss/dashboard/color/create.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ColorCreateServer } from '../../../store/reducers/color/color_server';
import { reset } from '../../../store/reducers/color/color_slice';

function DashboardCreateColorComponent() {
  const dispatch = useDispatch()
  const errorsValidation = useSelector(state => state.colorReducer.errors)
  const isError = useSelector(state => state.colorReducer.isError)
  const created = useSelector(state => state.colorReducer.created)
  const message = useSelector(state => state.colorReducer.message)
  const [name , setName] = useState("")
  const [active , setActive] = useState(true)

  
  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create color /\/\/\/\/\/\//\/\/\/\/\
  function resetForm() {
    setName("")
    setActive(false)
  }

  function createColor(e) {
    e.preventDefault()
    dispatch(ColorCreateServer({
      name,
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

  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create color /\/\/\/\/\/\//\/\/\/\/\
  return(
    <div className="create-color">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Color"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="name" className='text-capitalize'>name</label>
            <input id='name' value={name} onInput={(e) => setName(e.target.value)} type="text" className='form-control' />
            {errorsValidation.name ? <small className="text-danger">{errorsValidation.name[0].msg}</small> : ""}
          </div>
          <div className='d-flex gap-5 mb-2'>
            <div className="input">
              <label className='text-capitalize d-block'>is Active</label>
              <Switch value={active} onChange={(checked) => {
                setActive(checked)
              }} />
              {errorsValidation.active ? <small className="text-danger">{errorsValidation.active[0].msg}</small> : ""}
            </div>
          </div>
          <div className="">
            <button className='btn btn-primary btn-block w-100' onClick={createColor}>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateColorComponent;