import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../../../media/images/gallery/img1.jpeg'
import img2 from '../../../media/images/gallery/img2.jpeg'
import img3 from '../../../media/images/gallery/img3.jpeg'
import img4 from '../../../media/images/gallery/img4.jpeg'
import img5 from '../../../media/images/gallery/img5.jpeg'
import img6 from '../../../media/images/gallery/img6.jpeg'
import img7 from '../../../media/images/gallery/img7.jpeg'
import './gallery.css'


function Gallery() {
    let data = [{
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    },{
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    },{
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    },{
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    },{
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    }
]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }
  return (
    <div className='gallery-container'>
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="imgae"/>
            <CloseIcon onClick={() =>{setModel(false)}} />
        </div>
        <div>
            <h2 className='gallery-heading'>Gallery</h2>
            <div className='gallery'>
                  {data.map((item, index) => {
                      return (
                          <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                              <img src={item.imgSrc} style={{ width: '100%' }} alt="IMG" />
                          </div>
                      )
                  })}
            </div>
        </div>
    </div>
  )
}

export default Gallery
