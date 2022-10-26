import Footer from '../components/home/Footer';
import HeaderNav from '../components/common/HeaderNav';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {saveAs} from 'file-saver';
import axios from 'axios';
import { useState } from 'react';

function JpgToPdf(){
    const [cards, setCards] =useState(null);
    const [pickFile, setpickFile] = useState(false);
    const [selectedFile, setSelectedFile] = useState("/images/card-icon.png");
    const [fileLoading, setFileLoading] = useState(false);
    const [responseSave, setResponseSave] = useState('');
    const [formdata, setformdata] = useState('');

    const handleChoose = (event) =>{
        setFileLoading(true)
        const imgFile = event.target.files[0];
        // const cardType = cards.type;
        setSelectedFile(event.target.files[0]);
        const formData = new FormData();
        formData.append('file', imgFile);
        // console.log(cardType)

        const valueInput=document.getElementById('#inputTag').value
        setformdata('valueInput');
        // if (cardType ==  'application/png'||'application/jpg'||'application/jpeg') {
            axios.post('http://localhost:8080/api/jpgToPdf',{body:formData})
            .then(async (res) =>{
                
            })
        // }
        // else {
        //     axios.post('http://localhost:8080/api/jpgToPdf',{body:formData})
        //     .then(async (res) =>{
                
        //     })
        // }
    }
    const handleRemove = () =>{
        setpickFile(false);
    }

    const downloadHandler = () => {
        console.log(selectedFile , 'selectedFile')
        setpickFile(false);
        // if(selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || selectedFile.type === 'application/msword'){
        //     saveAs(responseSave , `new${Date.now()}.pdf`)

        // }
        // else if(selectedFile.type === 'application/pdf' ){
        //     saveAs(responseSave , `new${Date.now()}.docx`)
        // }
        // else{
        //     alert('Your file not a right for convertable')
        // }
    }

    return(<div id='JpgToPDF'>
        <div className="detail-hero">
            <HeaderNav />
            <div className="detail-hero-content">
                <div className="detail-hero-content-heading">
                    <h1>Jpg To Pdf</h1>
                </div>
                <div className="detail-hero-content-des">
                    <p>Convert Jpg images to PDF</p>
                </div>
                {
                    fileLoading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        : null
                }
                {
                    pickFile ?(
                        <div className="detail-hero-content-butn">
                            <p>{selectedFile.name}</p>
                            <a className='btn btn-outline-danger' onClick={handleRemove}>Remove</a>
                            <Button onClick={() => downloadHandler()} className='btn btn-primary'><i className="fa fa-download"></i> Download</Button>
                        </div>
                    ):
                    (
                        <div className="detail-hero-content-nav">
                            <form method='POST' encType="multipart/form-data">
                                <label htmlFor="inputTag">
                                    CHOOSE FILE
                                    <input disabled={fileLoading} id="inputTag" name="fiels" type="file"  onChange={handleChoose} multiple className="detail-hero-content-nav-home-btn"/>
                                    <input type='submit' value='CHOOSE FILE'/>
                                </label>
                            </form>
                        </div> 
                    )
                } 
            </div>      
        {/* <Footer /> */}
        </div>
    </div>)
}

export default JpgToPdf;


// if(res.status == 200)
//                     console.log(res.status)
//                     const resp = await  res.blob();
//                     setResponseSave(resp)
//                     setpickFile(true)
                
//                 else {
//                     alert('Please choose file with docx or doc extension')
//                 }