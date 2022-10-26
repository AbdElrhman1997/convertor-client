import React from 'react'
import {useState} from 'react';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import HeaderNav from '../components/common/HeaderNav'


export default function MinifyJSON(){

    const [formdata, setformdata] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const current = JSON.parse(formdata)
            const result = JSON.stringify(current,null,0)
            setformdata(result)
        } catch (err) {
            alert('ERROR: Unable to parse JSON')
        }
        
    }

    return(<div>
        <HeaderNav />
        <div className="tools-for-better-thinking" style={{padding:'5rem 0px 5rem 0px'}}>
            <div className="container d-flex align-items-center justify-content-center row col-md-8">
            <div className="col-md-12 col-lg-12 offset-lg-6">
            <label className="my-1 mr-2"><h2>Input JSON</h2></label>
            <form className="" role="form" onSubmit={handleSubmit}>
                <div className="form-group">
                <textarea className="form-control" rows="15" id="input-comment" value={formdata}
            onChange={(e) => setformdata(e.target.value)} style={{fontSize:'1.5rem'}}></textarea>
                </div>
                <p></p>
                <div class="d-grid gap-3 col-md-2">
                    <button type="submit" className="btn btn-primary btn-lg" id="formdata">Minify JSON</button>
                </div>
            </form>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>)
}