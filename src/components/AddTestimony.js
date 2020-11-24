import React,{useState} from "react"
import {useDispatch} from "react-redux";
import * as testimonialActions from "../actions/testimonialActions"

const Context = React.createContext()

function AddTestimony(){

        const dispatch = useDispatch()

        const [state,setState] = useState({
            OwnerFullName: "",
            OwnerId: 0,
            testimonialType: "",
            testimonialTitle: "",
            testimonialBody: ""
        })

    const changeStateValue = (e) =>{
        setState({...state,
            [e.target.name ]: e.target.value
        })
    }

    const submitForm = (e) =>{
        dispatch(testimonialActions.addTestimonial(state))
        e.preventDefault()
    }

        return (
            <div>
                <div className="card">
                    <h2 className="align-center  font-weight-bold">Add Testimony</h2><br/><br/>
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Full names</label>
                            <input type="text" name="OwnerFullName" onChange={changeStateValue} value={state.OwnerFullName} className="form-control" id="exampleFormControlInput1"
                                   placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Testimony title</label>
                            <input type="text" name="testimonialTitle" onChange={changeStateValue} value={state.testimonialTitle} className="form-control" id="exampleFormControlInput1"
                                   placeholder="Enter title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Testimony</label>
                            <textarea type="text" name="testimonialBody" onChange={changeStateValue} value={state.testimonialBody} className="form-control" id="exampleFormControlInput1"
                                      placeholder="Enter testimony body" rows="8" ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select value={state.testimonialType} name="testimonialType" onChange={changeStateValue} className="form-control" id="exampleFormControlSelect1">
                                <option value="">choose type</option>
                                <option value="illness">illness</option>
                                <option value="admissions">admissions</option>
                                <option value="gender harassment">gender harassment</option>
                                <option value="home conflicts">home conflicts</option>
                                <option value="others">others</option>
                            </select>
                        </div>
                    </form>

                    <input type="submit" value="Post Testimony" onClick={submitForm} />
                </div>
            </div>
        )
}

export default AddTestimony